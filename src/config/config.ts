import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

export default {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    ETHERSCAN_API: process.env.ETHERSCAN_API,
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_CONNECTION_URL: process.env.REDIS_CONNECTION_URL
}
