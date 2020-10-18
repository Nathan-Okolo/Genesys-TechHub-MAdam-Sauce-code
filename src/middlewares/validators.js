const joi = require('joi')
const CustomError = require('../utility/CustomError')


exports.validateSignUp = async(req, res, next) => {
    let Schema = {
        name: joi.string().min(3).required(),
        email:joi.string().email().required(),
        phone: joi.string().min(10).required(),
        password:joi.string().required(),
        address: joi.string().required(), 
    }
    const result = joi.validate(req.body, Schema)
    if(result.error)   throw new CustomError(result.error.message, 401);
    next();
}


exports.validateLogin  = async(req, res, next)=>{
    const Schema = {
        email: joi.string().email().required(), 
        password: joi.string().required(),
    }
    const result = joi.validate(req.body, Schema)
    if(result.error)   throw new CustomError(result.error.message, 401);
    next()
}



// Product validators
exports.validateFood =(req, res, next)=> {
    let schema = {
        name: joi.string().min(3).required(),
        details: joi.string().min(10).required(),
        price: joi.number().required()
    }
    let valid = joi.validate(req.body, schema)
    if(valid.error) throw new CustomError(valid.error.message, 401)
    next();
}


// Validate order

exports.validateOrder =(req, res, next)=> {
    let schema = {
        food: joi.string().required(),
        quantity: joi.number().required()
    }
    let valid = joi.validate(req.body, schema)
    if(valid.error) throw new CustomError(valid.error.message, 401)
    next();
}