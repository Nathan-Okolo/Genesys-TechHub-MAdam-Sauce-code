const express = require('express');
const router = express.Router();

const {addFood, getMany} = require('../controllers/foodController')
const { validateFood } = require('../middlewares/validators')
const {authentication, authorize} = require('../middlewares/auth')

router.post('/addFood',authentication, authorize, validateFood, addFood)
router.get('/getFoods', getMany)

module.exports = router