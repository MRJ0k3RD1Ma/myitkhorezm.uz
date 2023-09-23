const express = require('express');
const CourceController = require('../controllers/CourceController');
const {protect, authorize} = require("../middleware/auth");

const router = express.Router();

router.get('/',protect, CourceController.new)



module.exports = router