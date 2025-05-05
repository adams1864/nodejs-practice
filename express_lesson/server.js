const express = require('express');
const app = express();
require("dotenv").config();
const Port = process.env.PORT;
const useroute = require('./routes/User');
const commentroute = require('./routes/Comment');

app.use('/user', useroute);
app.use('/comments', commentroute);
// const actors = [{id:2, name: 'brapitt'},
//                 {id:3, name:'Robin Williams'}

// ]

app.listen(Port, (req, res)=>{
    console.log(`app running on port ${Port}`);
}
);

