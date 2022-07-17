var express=require("express");

var app=express();

app.listen(process.env.PORT || 5000,(err)=>{

    if(err)
    console.log("port error");

    else
    console.log("port listened");
});

app.get("/test",(req,res)=>{
    res.send("hello");
})