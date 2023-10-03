const express = require('express');
const CourseController = require('../controllers/CourseController');
const {protect, authorize} = require("../middleware/auth");

const router = express.Router();

router.get('/',protect, CourseController.all)



module.exports = router