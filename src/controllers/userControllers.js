const {addUser, login} = require('../services/userServices')
const response = require('../utility/response')


class UserController{
    async addUser(req, res){
        const data = await addUser(req.body)
        res.status(201).json(response(true, "User Created", data))
    }
    
    async login(req, res){
        const {email, password} = req.body
        const data = await login(email, password);
        res.status(200).json(response(true, "User logged in successfully", data))
    }
   
}


module.exports = new UserController()