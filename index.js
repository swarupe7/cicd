const express=require('express');

const app=express();

app.get('/', function(req, res) {

     res.send({message: 'Hello welcome to devops!'});});

app.listen(8080,()=>{
    console.log('listening on 8080');
})