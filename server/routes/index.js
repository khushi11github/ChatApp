const express = require('express')
const registerUser = require('../controller/registerUser');
const checkEmail = require('../controller/checkemail');
const checkPassword = require('../controller/checkPassword');
const userDetails = require('../controller/userDetails');
const logout = require('../controller/logout');
const updateUserDetails = require('../controller/updateUserDetails');
const router = express.Router();

router.post('/register',registerUser)

//check user emAIL
router.post('/email',checkEmail)
// check user password
router.post('/password',checkPassword)
//LOGIN USER DETAILS
router.get('/user-details', userDetails)
//logout user
router.get('/logout',logout)
router.post('/update-user',updateUserDetails)
module.exports = router;
