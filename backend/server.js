import { APP_PORT,DATABASE_URL } from "./config";
import express from "express";
import web from "./routes/web.js";
import connectdb from './db/connectdb.js';
import cors from 'cors';
let app=express();

app.use(cors({credentials:true,origin:['http://localhost:3000']}));

//connect database
connectdb(DATABASE_URL);

app.use(express.urlencoded({extended:false}));
app.use(express.json());
//load route
app.use('/api',web);

app.listen( APP_PORT,()=>{
    console.log(`Server Running at port ${ APP_PORT}`)
})