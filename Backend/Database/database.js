import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const connectdb = async () =>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected:  ${con.connection.host}`)
    } catch (error) {
        console.log(`Error:  ${error.message}` )
        process.exit(1);
    }
}