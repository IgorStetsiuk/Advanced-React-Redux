const express =require('express');
const http = require('http');
const bodyPaser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth');


// App Setup
app.use(morgan('combined'));
app.use(bodyPaser.json({type:'*/*'}));

router(app);
//Server setup
const port = process.env.PORT || 3090;
const server= http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`);