var express = require('express');

var app = express();

app.get('/',(req,res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/users/asdf', (req,res) => {
    var asdf = req.params.asdf;
    res.send(asdf);
})

app.get('/new',(req,res) => {
    res.sendFile(__dirname + "new.html");
})

app.post('/new',(req,res) => {
    console.log(submitted);
})

app.listen(3000, () => {
    console.log('server listening on port 3k')
});
