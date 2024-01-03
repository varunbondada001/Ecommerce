import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import cors from 'cors';
//CONFIGURE ENV
dotenv.config();

//DATABASE CONFIG
connectDB();

//REST OBJECT
const app = express();



//MIDDLEWARES
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


//ROUTES
app.use("/api/v1/auth",authRoutes);

//REST API
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//RUN LISTEN
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});

