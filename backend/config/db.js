import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://shivshantp51:nBYMgiKwstjbIsQj@cluster0.mco01.mongodb.net/Food").then(()=>{
        console.log("DB Connected");
    })
}
