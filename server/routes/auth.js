const express = require('express');
const router = express.Router();
const { createuser, getuser, sendemail } = require('../controllers/Usercontroller');
const { fetchuser } = require("../middleware/fetchUser")

// create user
router.post('/createuser', createuser);

// user login
router.get('/getuser', fetchuser, getuser);

router.post('/sendemail', sendemail)


module.exports = router