require('dotenv').config();
const express=require("express");

const app=express();
const mongoose=require('mongoose');
const Port=process.env.Port ||3002;
const uri=process.env.MONGO_URL;
app.listen(Port,()=>{
    console.log("App Started");
    mongoose.connect(uri);
    console.log("DataBase Started");
})