const commentsModel = require('../models/comments')
const express = require('express');
const router = express.Router()

   router.route('/')
    .get(commentsModel. getAllComments,(req,res)=>{
      res.status(200).json(res.comments)
    })
    .post((req,res,next)=>{
      res.send('this will create a comment')
    })
   router.route('/:id')
    .get((req,res,next)=>{
      res.send('this will get 1 comment')
     })
    .put((req,res,next)=>{
      res.send('this edit 1 comment')
     })
    .delete((req,res,next)=>{
      res.send('this will delete 1 comment')
     })

module.exports = router;
