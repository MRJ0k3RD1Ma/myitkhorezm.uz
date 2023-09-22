const express = require("express");
const app = express();

app.use('/course',require('./cource'))
app.use('/user',require('./user'))

module.exports = app;