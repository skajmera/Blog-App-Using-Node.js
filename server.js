const express = require('express');
const app = express();
const morgan = require('morgan')
require('dotenv').config()

const users = require('./routes/user')
const blogs = require('./routes/blogs')
const likeDislike = require('./routes/likeDislike');

/////
var cookieParser = require('cookie-parser')
app.use(cookieParser())
///////
app.use(express.json());
app.use(morgan('dev'))

app.use('/user', users);
app.use('/blog', blogs);
app.use('/likeDislike', likeDislike)


const PORT = process.env.DB_PORT || 4003;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});

