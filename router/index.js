const express = require("express");
const {protect} = require("../middleware/auth");
const app = express();

app.use('/user',require('./user'))
app.use('/group',protect,require('./group'))
app.use('/cource',protect,require('./cource'))
app.use('/leads',protect,require('./lead'))


module.exports = app;