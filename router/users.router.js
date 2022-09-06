const express = require('express');
const router = express.Router();
const usersDetails = require('../controller/users.controller');

router
.get('/random',usersDetails.randomUser)
.get('/all',usersDetails.getAllUser)
.post('/save ',usersDetails.addNewUser)
.patch('/update ',usersDetails.updateUserDetail)
.patch('/bulk-update/:Id',usersDetails.userBulkUpdate)
.delete('/delete/:Id',usersDetails.userDelete)


module.exports = router;