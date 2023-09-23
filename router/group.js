const express = require('express');
const GroupController = require('../controllers/GroupController');
const {protect, authorize} = require("../middleware/auth");

const router = express.Router();

router.get('/', GroupController.new)



module.exports = router