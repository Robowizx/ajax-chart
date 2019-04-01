const express = require('express');
const data = require('./data.js');
const app = express();

app.get('/:Rid',function(req,res){
   for(var i in data.set){
       if(data.set[i].id==req.params.Rid){
          res.set({'Access-Control-Allow-Origin':'*'}); 
          res.json(data.set[i]);
          console.log(data.set[i]);
       }   
   }
});

app.listen(3000,()=>{
  console.log('listening on port 3000');
});