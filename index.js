const express = require ('express');
const student = require('./routes/student')
let  connection = require ('./connection')
const app = express();
connection();
app.use(student);

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log('Server is running on 3000')
    }
})