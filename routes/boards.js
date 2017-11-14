
const boardsModel = require('../models/boards')
const express = require('express');
const router = express.Router()

   router.route('/')
    .get(boardsModel. getAllBoards,(req,res)=>{
      res.status(200).json(res.boards)
    })
    .post((req,res,next)=>{
      res.send('this will create a board')
    })
   router.route('/:id')
    .get((req,res,next)=>{
      res.send('this will get i board')
     })
    .put((req,res,next)=>{
      res.send('this edit board')
     })
    .delete((req,res,next)=>{
      res.send('this will delete a board')
     })

module.exports = router;
