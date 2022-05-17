const express = require("express");
const app= express();
const path = require("path");

app.listen(8000, ()=> console.log("Probando Servidor"));

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    const indexpath = path.join(__dirname,"/views/index.html")
    res.sendFile(indexpath);
})
app.get("/register",(req,res)=>{
    const indexpath = path.join(__dirname,"/views/register.html")
    res.sendFile(indexpath);
})
app.get("/login",(req,res)=>{
    const indexpath = path.join(__dirname,"/views/login.html")
    res.sendFile(indexpath);
})