import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './config/db'
import mongoose from 'mongoose';
mongoose.set("strictQuery", false);

dotenv.config()

const app = express()
app.use(cors)
app.use(express.json())

const PORT = process.env.PORT

app.listen(PORT, async()=>{
    await db()
    console.log('Server running')
})