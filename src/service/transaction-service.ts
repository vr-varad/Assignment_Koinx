import { TransactionRepository } from '../database'
import axios from 'axios'
import config from '../config/config'
import { ApiError, NotFoundError } from '../utils/app-errors'

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
}

export default TransactionService
