const database = require ('../db/dbconnection');

module.exports = {
  getAllComments : (req,res,next)=>{
    database.any(`select * from comments`)
    .then((result)=>{
      res.comments = result
      next()
    })
    .catch( err => next(err))

  }
}
