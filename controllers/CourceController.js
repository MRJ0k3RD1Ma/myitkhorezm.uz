const User = require('../models/User');
const Person = require('../models/Person');
const jwt = require('jsonwebtoken')
const {getPhone} = require('../components/Phone')
const {secret} = require('../config/app').jwt;

exports.new = (req,res)=>{
    const newcource =
    res.status(200).json({
        success: true,
        data: "asd"
    })

}