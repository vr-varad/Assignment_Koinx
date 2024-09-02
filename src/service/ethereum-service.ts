/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios'
import { EthereumRepository } from '../database'
import { ApiError } from '../utils/app-errors'

class EthereumService {
    private repository: EthereumRepository

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
            return ethereum
        } catch (error) {
            throw new ApiError('Service Error', 500, (error as Error).message)
        }
    }

    async GetEthereumPrice() {
        try {
            const ethereum = await this.repository.GetEthereumPrice()
            return ethereum
        } catch (error) {
            throw new ApiError('Service Error', 500, (error as Error).message)
        }
    }
}

export default EthereumService
