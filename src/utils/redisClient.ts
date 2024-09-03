/* eslint-disable @typescript-eslint/no-floating-promises */
import { createClient } from 'redis'
import Logger from './logger'

const redisClient = createClient({
    socket: {
        host: 'localhost',
        port: 6379
    }
})

redisClient.on('error', (err) => Logger.error((err as Error).message))

redisClient.connect()

export default redisClient
