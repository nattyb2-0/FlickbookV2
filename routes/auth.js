const database = require ('../db/dbconnection');
const express = require('express');
const router = express.Router()

   router.route('/sigin')
    .post((req,res,next)=>{
      res.send('this will sign user in')
     })
    router.route('/sigout')
    .post((req,res,next)=>{
      res.send('this will sign user out')
     })

module.exports = router;
