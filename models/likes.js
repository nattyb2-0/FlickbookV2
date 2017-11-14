const database = require ('../db/dbconnection');

module.exports = {
  getAllLikes : (req,res,next)=>{
    database.any(`select * from likes`)
    .then((result)=>{
      res.likes = result
      next()
    })
    .catch( err => next(err))

  }
}
