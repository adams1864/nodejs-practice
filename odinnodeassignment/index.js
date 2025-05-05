const https = require('http');
const fs = require('fs');


const servant = https.createServer((req, res)=>{

   let  path = './view/';
   switch(req.url){
    case '/':
        path+= 'index.html';
    break;
    case '/about':
        path+='about.html';
    break;
    case '/contact':
        path+='contactme.html';
    break;
    default:
        path+='404.html';
        break;

   }
   
fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }
         res.end(data.toString());
} )


});
servant.listen(3000, 'localhost',()=>{
    console.log('Servant is running on port 3000');
});
