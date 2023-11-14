const mongoose = require("mongoose");

const coustmerSchema  = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    phone:{
        type : Number,
        required: true,
        unique: true
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    address:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    }
})


// we need to create a collection
const Registration = new mongoose.model("Registration", coustmerSchema);

module.exports = Registration;

