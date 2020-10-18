const router = require('express').Router()
const {addUser, login}= require('../controllers/userControllers')
const {validateSignUp, validateLogin} = require('../middlewares/validators');


router.post('/add',validateSignUp, addUser);
router.post('/login', validateLogin, login)




module.exports = router