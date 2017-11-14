
const express = require('express');
const router = express.Router()

   router.route('/')
    .get((req,res,next)=>{
      res.send('this will get all inmates')
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
