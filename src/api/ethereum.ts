/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Application, Request, Response } from 'express'
import { EthereumService } from '../service'

const ethereumService: EthereumService = new EthereumService()

const Ethereum = (app: Application) => {
    app.get('/api/price/ethereum', async (req: Request, res: Response) => {
        try {
            const data: any = await ethereumService.UpdateEthereumPrice()
            return res.json(data)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    })
}

export default Ethereum
