const express = require('express');
const CourceCntr = require('../controllers/Cource');

const router = express.Router();

router.get('/',CourceCntr.getAll)

module.exports = router