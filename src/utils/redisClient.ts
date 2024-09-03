/* eslint-disable @typescript-eslint/no-floating-promises */
import { createClient } from 'redis'
import Logger from './logger'
import config from '../config/config'

const redisClient = createClient({
    url: config.REDIS_CONNECTION_URL
})

redisClient.on('error', (err) => Logger.error((err as Error).message))

redisClient.connect()

export default redisClient
