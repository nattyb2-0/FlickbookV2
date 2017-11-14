
const express = require('express');
const router = express.Router();
const prisonerModel = require('../models/prisoners')

   router.route('/')
    .get(prisonerModel. getAllPrisoners,(req,res)=>{
      res.status(200).json(res.prisoners)
    })
    .post((req,res,next)=>{
      res.send('this will create inmate data')
    })
   router.route('/:name')
    .get((req,res,next)=>{
      res.send('this will search and dispalay for inmate by name')
     })
    .put((req,res,next)=>{
      res.send('this edit inmate info')
     })
    .delete((req,res,next)=>{
      res.send('this will delete inmate info')
     })

module.exports = router;
