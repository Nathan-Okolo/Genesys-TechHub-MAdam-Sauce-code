const express = require('express');
const router = express.Router();

const {makeOrder, removeOrder, getOrder, getOrders, editOrder, getOrderProds} = require('../controllers/orderController')
const {authentication, authorize} = require('../middlewares/auth')
const { validateId, validateOrder } = require('../middlewares/validators')


router.post('/make',authentication, validateOrder,  makeOrder)
router.get('/get', authentication, getOrders)



module.exports = router;