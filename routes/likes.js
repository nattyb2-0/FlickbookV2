
const likesModel = require('../models/likes')
const express = require('express');
const router = express.Router()

   router.route('/')
    .get(likesModel. getAllLikes,(req,res)=>{
      res.status(200).json(res.likes)
    })


module.exports = router;
