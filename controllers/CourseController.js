const User = require('../models/User');
const Person = require('../models/Person');
const Course = require('../models/Course');
const jwt = require('jsonwebtoken')
const {getPhone} = require('../components/Phone')
const {secret} = require('../config/app').jwt;

exports.all = async (req,res)=>{
    const course = await Course.query().where('status',1)
    res.status(200).json({
        success: true,
        data: course
    })

}