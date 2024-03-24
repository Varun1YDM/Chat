// const express = require("express")
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
const app = express();


dotenv.config();
const PORT = process.env.PORT || 8000;


app.get("/",function(req,res){
    res.send("Hello Worlds");
});

app.get("/profile",function(req,res){
    res.send("Hello Profile");
});

app.use("/api/auth",authRoutes);

app.listen(PORT , () => console.log(`Server Running on ${PORT}`));