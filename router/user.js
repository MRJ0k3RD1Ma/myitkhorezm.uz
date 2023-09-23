const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/',UserController.findOne)
router.post('/create',UserController.create);
router.post('/login',UserController.login)
router.post('/refresh-token',UserController.refreshToken)



module.exports = router