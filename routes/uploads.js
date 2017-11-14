const uploadRouter = require('express').Router()
const uploadModel = require('../models/uploads')

uploadRouter.route('/')
  .post(uploadModel.uploadPhoto, (req,res)=>{
    res.send('heiiiiii')
  })

module.exports = uploadRouter
