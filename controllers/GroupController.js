const User = require('../models/User');
const Person = require('../models/Person');
const group = require('../models/Group');
const jwt = require('jsonwebtoken')
const {getPhone} = require('../components/Phone')
const {secret} = require('../config/app').jwt;

exports.new = async (req,res)=>{
    const data = await group.query().where('status_id',1).orderBy('id',"desc")
    res.status(200).json({
        success: true,
        data: data
    })

}