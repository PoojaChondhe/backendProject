//require('dotenv').config({path:'./env'});
import dotenv from 'dotenv'
// import mongoose  from "mongoose";
// import { DB_NAME } from "./constant";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`SERVER IS RUNNING PORT:${process.env.PORT}`)
    })
})
.catch((err)=>{

    console.log("MONGO db connection failed !!",err);
})




























// import express from "express";
// const app = express();


// ( async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log("Connected to MongoDB");
//         app.on("error",(error)=>{
//             console.log("error:",error)
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`server is running on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// })()