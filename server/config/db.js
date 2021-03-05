const mongoose = require('mongoose')
require('dotenv').config({path:__dirname+'/../.env'})
module.exports = mongoose.connect(process.env.DATABASE_URL,{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false},(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connected');
    }
})
