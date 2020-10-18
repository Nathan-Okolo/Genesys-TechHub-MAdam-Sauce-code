const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const foodModel = new Schema({
    name : {
        required: true, 
        min: 3,
        type: String
    },
    details: {
        type: String, 
        required: true
    }, 
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports  = mongoose.model("food", foodModel);