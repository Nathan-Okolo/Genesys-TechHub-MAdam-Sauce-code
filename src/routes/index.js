const express = require('express')
const router = express.Router();
const userRoutes = require('./users')
const foodRoutes = require('./food')
const orderRoutes = require('./order')

router.use('/users',userRoutes)
router.use('/foods',foodRoutes )
router.use('/orders', orderRoutes)



module.exports = router