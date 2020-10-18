const bcrypt = require('bcryptjs')
const userModel = require('../models/appuser')
const CustomError = require('../utility/CustomError')
const util = require('../utility/utilize')


class UserServices{
    async addUser(data){
        const existingUser =   await userModel.findOne({email: data.email})
        if(existingUser) throw new CustomError("Email already in use", 400)
        const hashedPassword = await bcrypt.hash(data.password, 12);
        data.password = hashedPassword;
        const toSave = new userModel(data);
        const saved = await toSave.save()
        const token = await util.generateToken({id: saved._id, role: saved.role})
        const dataToSend = {
            _id: saved._id,
            token: token,
            name:saved.name,
            email: saved.email,
            phone: saved.phone,
            role: saved.role,
            address: saved.address,
            sex: saved.sex
        }
        return dataToSend
    }
    async login(email, password){
        const  existing = await userModel.findOne({email})
        if(!existing) throw new CustomError("User do not exist", 400)
        const decryptedPassword = await bcrypt.compare(password, existing.password)
        if(!decryptedPassword) throw new CustomError("Access Denied", 401)
        const token = await util.generateToken({id: existing._id, role: existing.role})
        const dataToSend =   {
            id:existing._id,
            token: token,
            name: existing.name,
            email: existing.email, 
            phone: existing.phone,
            role: existing.role,
            cart: existing.cart,
            address: existing.address,
            sex: existing.sex
        }
        return dataToSend
    }
   
}

module.exports = new UserServices()