const express = require("express");
const mongoose  = require("mongoose");
const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/latestdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},).then(() => console.log('connected'))
.catch((err) => { console.error(err);});

app.listen(3000, ()=>{
    console.log("on port 3000 !!!")
})