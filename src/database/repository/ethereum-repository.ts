import { Ethereum } from '../model'
import { ApiError } from '../../utils/app-errors'

class EthereumRepository {
    async UpdateEthereumPrice(price: number) {
        try {
            const ethereum = await Ethereum.findOneAndUpdate(
                {},
                { price },
                {
                    new: true,
                    upsert: true
                }
            )
            return ethereum
        } catch (error) {
            throw new ApiError('Database Error', 500, (error as Error).message)
        }
    }

    async GetEthereumPrice() {
        try {
            const ethereum = await Ethereum.findOne()
            return ethereum
        } catch (error) {
            throw new ApiError('Database Error', 500, (error as Error).message)
        }
    }
}

export default EthereumRepository
