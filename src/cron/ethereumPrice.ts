import cron from 'node-cron'
import { EthereumService } from '../service'
import Logger from '../utils/logger'

const ethereumService = new EthereumService()

const fetchEthereumPrice = cron.schedule('*/10 * * * *', () => {
    ethereumService
        .UpdateEthereumPrice()
        .then(() => {
            Logger.log('Ethereum price updated successfully.')
        })
        .catch((error: unknown) => {
            if (error instanceof Error) {
                Logger.error(error.message)
            } else {
                Logger.error('An unknown error occurred.')
            }
        })
})

export default fetchEthereumPrice
