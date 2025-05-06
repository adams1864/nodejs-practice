const express = require(`express`);
require('dotenv').config();

const app = express();
let username  = 'abel';
let pass= 'tank';

const Port = process.env.PORT;

app.listen(Port, (req, res)=>{
    console.log(`Port running on port ${Port}`);
});

app.get('/', (req, res)=>
    {
    
 res.send(`This is the login page`);

});

app.use(loginmiddleware);

app.get('/profilepage', (req, res)=>
    {
    
 res.send(`This is the profile page`);
 
});

app.get('/feedpage', (req, res)=>
{
    
res.send(`Feed page`);
//  next();   
});

function loginmiddleware(req, res, next){

if(username== 'abela' && pass== 'tank'){
        next()
}
else{
    res.send(`Invalid Credentials`);
}
}