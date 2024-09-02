/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { TransactionRepository } from '../database'
import axios from 'axios'
import config from '../config/config'
import { ApiError, BadRequestError, NotFoundError } from '../utils/app-errors'

class TransactionService {
    private repository: TransactionRepository
    constructor() {
        this.repository = new TransactionRepository()
    }

    async GetTransaction(address: string) {
        if (!address) {
            throw new NotFoundError('Service Error', 404, 'Address Not Found')
        }
        try {
            const { success, user } = await this.repository.GetUser(address)
            if (success) {
                return { user }
            }
            const transaction = await axios.get(
                'https://api.etherscan.io/api',
                {
                    params: {
                        module: 'account',
                        action: 'txlist',
                        address: address,
                        startblock: 0,
                        endblock: 99999999,
                        sort: 'asc',
                        apikey: config.ETHERSCAN_API
                    }
                }
            )
            const userTransaction = await this.repository.StoreTranasction(
                address,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                transaction.data.result
            )
            return { userTransaction }
        } catch (error) {
            throw new ApiError('Service Error', 500, (error as Error).message)
        }
    }

    async GetExpenses(address: string) {
        if (!address) {
            throw new BadRequestError(
                'Address is required',
                400,
                'Address Not Found'
            )
        }
        const { success, user } = await this.repository.GetUser(address)
        if (!success || !user) {
            throw new NotFoundError('Not Found', 404, 'User not found')
        }
        let expenses: number = 0
        try {
            if (user.transactions?.length) {
                expenses = user.transactions.reduce(
                    (total, { gasPrice, gasUsed }) => {
                        return total + Number(gasPrice) * Number(gasUsed)
                    },
                    0
                )
                const WEI_TO_ETH_CONVERSION_FACTOR = 1e18
                expenses /= WEI_TO_ETH_CONVERSION_FACTOR
            }

            return { expenses }
        } catch (error) {
            throw new ApiError('Service Error', 500, (error as Error).message)
        }
    }
}

export default TransactionService
