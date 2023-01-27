import dotenv from 'dotenv'
dotenv.config()

export const MONGO = process.env.MONGO_URL
export const SECRET_KEY = process.env.SECRET_KEY

