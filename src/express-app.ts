import express, { Application } from 'express'
import cors from 'cors'
import { Transaction } from './api'
import fetchEthereumPrice from './cron/ethereumPrice'

// eslint-disable-next-line @typescript-eslint/require-await
const expressApp = async (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())

    Transaction(app)

    fetchEthereumPrice.start()
}

export default expressApp
