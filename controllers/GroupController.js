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

exports.running = async (req,res)=>{
    const candidate = jwt.decode(req.headers.authorization.split(" ")[1]);
    const data = await group.query().whereRaw("id in (select group_id from student where person_id = "+candidate.userId+") and status_id = 2")

    res.status(200).json({
        success: true,
        data: data
    })

}

exports.done = async (req,res)=>{
    const candidate = jwt.decode(req.headers.authorization.split(" ")[1]);
    const data = await group.query().whereRaw("id in (select group_id from student where person_id = "+candidate.userId+") and status_id = 3")

    res.status(200).json({
        success: true,
        data: data
    })

}