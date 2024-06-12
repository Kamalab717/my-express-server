const express=require("express");
const app=express();
app.get("/",function(request,response){
    response.send("hai");
});
app.get("/about",function(req,res){
    res.send("Nothing yet");
});
app.listen(3000,function(){  
    console.log("server started ji");
});   
