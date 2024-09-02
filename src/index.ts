import express, { Application } from 'express'
import config from './config/config'
import expressApp from './express-app'
import Logger from './utils/logger'
import { dbConnection } from './database'

const StartServer = async () => {
    const app: Application = express()
    await dbConnection()
    await expressApp(app)
    app.listen(config.PORT, () => {
        Logger.log(`Listening to PORT ${config.PORT}`)
    })
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
StartServer()
