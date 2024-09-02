import { Schema, model } from 'mongoose'

const TransactionSchema = new Schema(
    {
        address: {
            type: String,
            required: true
        },
        transactions: [
            {
                blockNumber: String,
                timeStamp: String,
                hash: String,
                nonce: String,
                blockHash: String,
                transactionIndex: String,
                from: String,
                to: String,
                value: String,
                gas: String,
                gasPrice: String,
                isError: String,
                txreceipt_status: String,
                input: String,
                contractAddress: String,
                cumulativeGasUsed: String,
                gasUsed: String,
                confirmations: String,
                methodId: String,
                functionName: String
            }
        ]
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
