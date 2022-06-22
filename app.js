const express= require("express");
const bodyParser = require("body-parser");
// const request = require ("request");

const app=express();

app.use(bodyParser.urlencoded({extended :true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

app.get("/book-room", function(req,res){
     res.sendFile(__dirname +"/public/book-room.html")
})


app.listen(5000,function(){
    console.log("server started on port 5000.")
})
