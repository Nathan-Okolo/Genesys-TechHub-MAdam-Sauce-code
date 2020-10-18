const { required } = require('joi/lib/types/symbol');
const mongoose = require('mongoose');

const Schema =mongoose.Schema

const appUser = new Schema({
    name:{
        type: String,
        min:4,
        required:true
    },
    email:{
        type: String,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    role: {
        type: String,
        enum:["User","Admin"],
        default:"User"
    },
    password:{
        type: String,
        unique:true,
        required: true
    }
},{timestamps:true})
module.exports = mongoose.model("User",appUser)