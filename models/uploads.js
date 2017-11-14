const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.png')
  }
})
var upload = multer({ storage: storage }).single('pic')

// app.post('/profile', function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//       // An error occurred when uploading
//       return
//     }

//     // Everything went fine
//   })
// })


module.exports ={
  uploadPhoto: (req,res,next)=>{

    upload(req, res, function (err) {
       console.log(req.file)
    if (err) {
      // An error occurred when uploading
      return
    }
     res.status(200).json({
      status: 200,
      action: 'photo posted'
     })
    // Everything went fine
  })
  }
}
