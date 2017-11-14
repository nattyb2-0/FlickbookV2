

const express = require('express');
const router = express.Router()

   router.route('/')
    .get((req,res,next)=>{
      res.send('this will show you the home page')
     })
   router.route('/browse')
    .get((req,res,next)=>{
      res.send('this will show you all the public boards')
     })

module.exports = router;


