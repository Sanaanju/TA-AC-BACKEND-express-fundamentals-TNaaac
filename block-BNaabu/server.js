var express = require('express');

var app = express();

app.use('/admin',(req,res,next) => {
    next("not valid");
})

app.get('/',(req,res) => {
    res.send('Hello Sana')
});

app.get('/about',(req,res) => {
    res.send('about page');
})

app.get((req,res,next) => {
    res.send('page not Found');
})

app.use((err,req,res,next) => {
    res.send(err);
})

app.listen(3000, () => {
    console.log('server listening on port 3k')
});