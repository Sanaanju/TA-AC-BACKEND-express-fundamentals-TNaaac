var express = require('express');


var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
app.use(logger('dev'))

app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();

});

app.use(cookieParser);
app.get('/about', (req,res) => {
    res.cookie("username", "sana")
})

app.listen(3000, () => {
    console.log('server listening on port 3k')
})
