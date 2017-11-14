
const database = require ('../db/dbconnection');
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


// router.route('/')
//       .get(async(req,res,next)=>{
//        const result= await database.any(`select * from users`)
//        console.log(result)
//        // res.send('fu')
//         if(result){
//           res.status(200).json({result})
//         }

//         next()
//         })
//       .post((req,res,next)=>{
//         res.send('need to add db model to add user')
//       })
