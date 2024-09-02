/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Application, Request, Response } from 'express'
import { TransactionService } from '../service'

const service: TransactionService = new TransactionService()

const Transaction = (app: Application) => {
    app.get(
        '/api/transactions/:address',
        async (req: Request, res: Response) => {
            try {
                const { address } = req.params
                const data: any = await service.GetTransaction(address)
                return res.json(data)
            } catch (error) {
                throw new Error((error as Error).message)
            }
        }
    )
}

export default Transaction
