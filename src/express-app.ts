import express, { Application } from 'express'
import cors from 'cors'
import { Ethereum, Transaction } from './api'

// eslint-disable-next-line @typescript-eslint/require-await
const expressApp = async (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())

    Transaction(app)
    Ethereum(app)
}

export default expressApp
