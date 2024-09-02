import { Schema, model } from 'mongoose'

const TransactionSchema = new Schema(
    {
        address: {
            type: String,
            required: true
        },
        transactions: Array
    },
    {
        timestamps: true,
        toJSON: {
            transform(doc, ret) {
                delete ret.__v
            }
        }
    }
)

const Transaction = model('transaction', TransactionSchema)

export default Transaction
