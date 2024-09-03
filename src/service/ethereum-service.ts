/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios'
import { EthereumRepository } from '../database'
import { ApiError } from '../utils/app-errors'
import redisClient from '../utils/redisClient'

class EthereumService {
    private repository: EthereumRepository
    private cacheKey: string = 'ethereum_price'

    constructor() {
        this.repository = new EthereumRepository()
    }

    async UpdateEthereumPrice() {
        try {
            const response = await axios.get(
                'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr'
            )
            const price: number = Number(response.data.ethereum.inr)

            const ethereum = await this.repository.UpdateEthereumPrice(price)

            await redisClient.set(this.cacheKey, price.toString(), {
                EX: 600
            })

            return ethereum
        } catch (error) {
            throw new ApiError('Service Error', 500, (error as Error).message)
        }
    }

    async GetEthereumPrice() {
        try {
            const cachedPrice = await redisClient.get(this.cacheKey)
            if (cachedPrice) {
                return Number(cachedPrice)
            }
            const ethereum = await this.repository.GetEthereumPrice()
            return ethereum?.price
        } catch (error) {
            throw new ApiError('Service Error', 500, (error as Error).message)
        }
    }
}

export default EthereumService
