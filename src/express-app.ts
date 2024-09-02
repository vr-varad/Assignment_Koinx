import express, { Application } from 'express'
import cors from 'cors'

// eslint-disable-next-line @typescript-eslint/require-await
const expressApp = async (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
}

export default expressApp
