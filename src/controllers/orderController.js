const {make, remove, getMany, get, edit, getOrderProds} = require('../services/orderServices');
const response = require('../utility/response')

class OrderController{
    async makeOrder(req, res){
        const userId = req.user.token.id;
        const data = await make(userId, req.body);
        res.status(201).json(response(true, "Order made successfully", data))
    }
    async removeOrder(req, res){
        const userId = req.user.token.id;
        const orderId = req.params.id;
        const data = await remove(userId, orderId);
        res.status(200).json(response(true, "Order removed successfully", data))
    }
    async getOrders(req, res){
        const data = await getMany()
        res.status(200).json(response(true, "Orders fetched successfully", data))
    }
    async getOrder(req, res){
        const userId = req.user.token.id;
        const orderId = req.params.id;
        const data = await get(userId, orderId);
        res.status(200).json(response(true, "Order fetched successfully", data))
    }
    async editOrder(req, res){
        const userId = req.user.token.id;
        const orderId = req.params.id;
        const data = await edit(userId, orderId);
        res.status(200).json(response(true, "Order editted  successfully", data))
    }
    async getOrderProds(req, res){
        const userId = req.user.token.id;
        const data = await getOrderProds(userId)
        res.status(200).json(response(true, "Ordered Products fetched successfully", data));
    }
}


module.exports = new OrderController