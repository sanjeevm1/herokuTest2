var express=require("express");

var app=express();

app.listen(3000,(err)=>{

    if(err)
    console.log("port error");

    else
    console.log("port 3000 listened");
});

app.get("/test",(req,res)=>{
    res.send("hello");
})