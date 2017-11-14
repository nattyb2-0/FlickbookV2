const database = require ('../db/dbconnection');

module.exports = {
  getAllBoards : (req,res,next)=>{
    database.any(`select * from boards`)
    .then((result)=>{
      res.boards = result
      next()
    })
    .catch( err => next(err))

  }
}
