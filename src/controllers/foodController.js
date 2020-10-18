const {add, getMany} = require('../services/foodServices')
const response = require("../utility/response");
class FoodController{
    async addFood(req, res){
        const data = req.body;
        const result = await add(data)
        res.status(201).json(response(true, "Food added successfully", result))
    }
    async getMany(req, res){
        const {pageNo, noOfFoods} = req.query
        const data= await getMany(parseInt(pageNo), parseInt(noOfFoods))
        res.status(200).json(response(true, "Foods fetched successfully", data ))
    }
}


module.exports = new FoodController()