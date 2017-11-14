const database = require ('../db/dbconnection');

module.exports = {
  getAllUsers : (req,res,next)=>{
    database.any(`select * from users`)
    .then((result)=>{
      res.users = result
      next()
    })
    .catch( err => next(err))

  },

  getProfile : (req,res,next)=>{
    database.any(`select * from users
inner join comments on users.user_id = comments.user_id
inner join boards on users.user_id = boards.user_id
inner join posts on users.user_id = posts.user_id
inner join likes on users.user_id = likes.user_id;`)
    .then((results)=>{
      res.profile = results
      next()
    })
  }
}



