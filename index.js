import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";


dotenv.config();
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send("MERN project is successfully running");
})



const CONNECTION_URL=process.env.MONGO_CONNECTION_URL;

const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
    .catch((error)=>console.log(error));
