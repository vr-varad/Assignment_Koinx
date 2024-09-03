/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Application, NextFunction, Request, Response } from 'express'
import { EthereumService, TransactionService } from '../service'

const transactionService: TransactionService = new TransactionService()
const ethereumService: EthereumService = new EthereumService()

const Transaction = (app: Application) => {
    app.get(
        '/api/transactions/:address',
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const { address } = req.params
                const data: any =
                    await transactionService.GetTransaction(address)
                return res.json(data)
            } catch (error) {
                return next(error)
            }
        }
    )

    app.get(
        '/api/user/expense/:address',
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const { address } = req.params
                const data: { expenses: number } =
                    await transactionService.GetExpenses(address)
                const ethereumPrice = await ethereumService.GetEthereumPrice()
                return res.json({ ...data, ethereumPrice })
            } catch (error) {
                return next(error)
            }
        }
    )
}

export default Transaction
