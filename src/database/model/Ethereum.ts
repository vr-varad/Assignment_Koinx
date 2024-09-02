import { Schema, model } from 'mongoose'

const EthereumSchema = new Schema(
    {
        price: Number
    },
    { timestamps: true }
)

const Ethereum = model('ethereum', EthereumSchema)

export default Ethereum
