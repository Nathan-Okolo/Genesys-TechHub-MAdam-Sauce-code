const foodModel = require('../models/foodModel');
const CustomError = require('../utility/CustomError')


class food{
    async add(foodDetails){
        const existing = await foodModel.findOne({name: foodDetails.name})
        if(existing)  throw new CustomError("This food is already in our database", 400)
        const food = new foodModel({
            name: foodDetails.name,
            price: foodDetails.price,
            details: foodDetails.details
        })
        const dataToSend = await food.save()
        return dataToSend
    }
    async getMany(){
        const foodToReturn = await foodModel.find()
        let totalFoodNumber = await foodModel.count()
        const dataToSend = {
            requestedFood:foodToReturn, 
            totalfoods: totalFoodNumber? totalFoodNumber : null
        }
        return dataToSend
    }
}


module.exports = new food()