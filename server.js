// if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });
//adding comment to rebuild to heroku
//why me
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
// const path    = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/boards', require('./routes/boards'))
app.use('/comments', require('./routes/comments'))
app.use('/likes', require('./routes/likes'))
app.use('/posts', require('./routes/posts'))
app.use('/prisoners', require('./routes/prisoners'))
app.use('/users', require('./routes/users'))


const PORT = process.argv[2] || process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log('server is running on', PORT)
})

