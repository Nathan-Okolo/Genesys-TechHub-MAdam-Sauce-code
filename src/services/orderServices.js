const orderModel = require('../models/foodorderModel');
const foodModel = require('../models/foodModel');
const userModel = require('../models/appuser');
const CustomError = require('../utility/CustomError');

class OrderServices{
    async make(userId, data){
        const user = await userModel.findById(userId)
        if(!user) throw new CustomError("User do not exist", 401)
        const food = await foodModel.findById(data.food)
        if(!food) throw new CustomError("Food do not exist", 401)
        let totalPrice = food.price * data.quantity
        data.user = userId,
        data.totalPrice = totalPrice
        const userOrder = new orderModel(data)
        const newOrder = await userOrder.save();
        return newOrder
    }
    async getMany(){
        const orders = await orderModel.find()
        .populate('user')
        .populate('food')
        if(orders.length === 0) throw new CustomError("No order from the user yet", 401)
        return orders;
    }

}
module.exports = new OrderServices