const database = require ('../db/dbconnection');

module.exports = {
  getAllPrisoners : (req,res,next)=>{
    database.any(`select * from prisoners`)
    .then((result)=>{
      res.prisoners = result
      next()
    })
    .catch( err => next(err))

  }
}
