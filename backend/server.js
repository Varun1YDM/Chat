// const express = require("express")
import express from "express"
import dotenv from "dotenv"
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/",function(req,res){
    res.send("Hello Worlds");
});



app.listen(3000 , () => console.log(`Server Running on ${PORT}`));