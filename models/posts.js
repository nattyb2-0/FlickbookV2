const database = require ('../db/dbconnection');

module.exports = {
  getAllPosts : (req,res,next)=>{
    database.any(`select * from posts`)
    .then((result)=>{
      res.posts = result
      next()
    })
    .catch( err => next(err))

  }
}
