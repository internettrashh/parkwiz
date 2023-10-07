const mongoose = require("mongoose");

var mongoURL='mongodb+srv://cazrot335:Parth990@cluster0.vvcuici.mongodb.net/mern-cars'

mongoose.connect(mongoURL , {useUnifiedTopology :true , UseNewUrlParser:true})

var connection = mongoose.connection

connection.on('error',() =>{
  console.log(`Mongo DB connection failed`)
})

connection.on('connected',()=>{
  console.log(`Mongo DB Connection Successful`)
})

module.exports = mongoose