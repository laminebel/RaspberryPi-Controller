// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


let label = 0 ;

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("home", {state:label});
});

app.post("/", function(req,res){
  label = req.body.textInput ;
  console.log(label);
  res.redirect("/");
});




app.listen(3000, ()=>{
  console.log("Server is running on port 3000");
});
