const database = require ('../db/dbconnection');
const express = require('express');
const router = express.Router()

   router.route('/')
    .get((req,res,next)=>{
      res.send('this will show you all users')
     })
    .post((req,res,next)=>{
      res.send('this will create a user')
     })

   router.route('/profile/:id')
    .get((req,res,next)=>{
      res.send('this will show you a profile info')
     })
    .put((req,res,next)=>{
      res.send('this will edit a profile info')
     })
    .delete((req,res,next)=>{
      res.send('this will delete an account/profile')
     })

module.exports = router;
