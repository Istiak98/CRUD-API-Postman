const express = require('express')
const { signupUser, loginUser } = require('../controllers/UserController')
const router = express();


// signup route
router.post('/signup', signupUser)
router.post('/login', loginUser)

module.exports = router