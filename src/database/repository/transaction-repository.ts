import { ApiError } from '../../utils/app-errors'
import { Transaction } from '../model'
import { TransactionDTO } from '../../dto/tranaction'

class TransactionRepository {
    async StoreTranasction(address: string, transactions: [TransactionDTO]) {
        try {
            const userTransaction = await Transaction.create({
                address,
                transactions
            })
            return userTransaction
        } catch (error) {
            throw new ApiError('Database Error', 500, (error as Error).message)
        }
    }
}

export default TransactionRepository
