const express = require('express');

// express app
const app = express();
 app.set('view engine', 'ejs'); // register new 
 //engine
 
// listen for request
app.listen(3000);

app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/about', (req, res)=>{
    res.render('about');
});
app.get('/blogs/create',(req, res)=>{
    res.render('create');
})
app.get('/about-us',(req, res)=>{
    res.redirect('/about');
});


app.use((req, res)=>{
    res.render('404');
})
