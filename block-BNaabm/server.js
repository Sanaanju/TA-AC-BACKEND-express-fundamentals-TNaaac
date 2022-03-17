var express=require('express');
var app=express();


app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})

app.get('/',(req,res)=>{
    res.send('Hello Sana');

})
    

app.listen(4000,()=>{
    console.log('Server is listening at port 4k');
})