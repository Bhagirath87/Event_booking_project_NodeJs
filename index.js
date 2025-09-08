const express=require("express");
const app=express();
const port=3000;
const user=require("./models/user");
const event=require("./models/Event");
const booking=require("./models/Booking");
const path=require("path")

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(port);