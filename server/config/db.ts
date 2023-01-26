import mongoose from "mongoose";
import {MONGO} from './url'

async function connect(){
    try {
        await mongoose.connect(MONGO!)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

export default connect