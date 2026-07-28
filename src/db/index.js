import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

const connectDB = async ()=>{
    try { 
     const connectionInatance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     console.log(`\n Mongodb connected!! DB HOST:${connectionInatance.connection.host}`);
    }catch(error){
     console.log("Mongdb connection ", error);
     process.exit(1)
    }
}


export default connectDB;