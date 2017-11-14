const postModel = require('../models/posts')
const express = require('express');
const router = express.Router()

   router.route('/')
    .get(postModel. getAllPosts,(req,res)=>{
      res.status(200).json(res.posts)
    })
    .post((req,res,next)=>{
      res.send('this will create a post')
    })
   router.route('/:id')
    .get((req,res,next)=>{
      res.send('this will get 1 post')
     })
    .put((req,res,next)=>{
      res.send('this edit 1 post')
     })
    .delete((req,res,next)=>{
      res.send('this will 1 post')
     })

module.exports = router;
