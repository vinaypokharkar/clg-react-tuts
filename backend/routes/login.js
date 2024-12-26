const express = require('express')
const loginController = require('../controllers/login')
const loginRoute = express.Router()

loginRoute.post('/login', loginController)

module.exports = loginRoute