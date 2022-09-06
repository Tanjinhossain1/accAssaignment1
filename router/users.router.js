const express = require('express');
const router = express.Router();
const usersDetails = require('../controller/users.controller');

router
.get('/random',usersDetails.randomUser)
.get('/all',usersDetails.getAllUser)


module.exports = router;