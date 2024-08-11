import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

import dotenv from 'dotenv';
dotenv.config();

// app config

const app = express()
const port = process.env.PORT || 4000

app.use(cors({
    origin: '*'
}));

// middleware
app.use(express.json());

  
// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})

// mongodb+srv://kashu19march:HNSRmf8gu1g7x8SX@cluster0.se1xqgb.mongodb.net/