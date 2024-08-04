import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://kashu19march:HNSRmf8gu1g7x8SX@cluster0.se1xqgb.mongodb.net/cheatmeal").then(()=>{
        console.log("DB Connected");
    })
}
