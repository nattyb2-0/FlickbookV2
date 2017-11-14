const database = require ('../db/dbconnection');

module.exports = {
  getAllUsers : (req,res,next)=>{
    database.any(`select * from users`)
    .then((result)=>{
      res.users = result
      next()
    })
    .catch( err => next(err))

  }
}
