const mongoose = require("mongoose");

const parkSchema = mongoose.Schema({

name : {
  type : String ,
  require: true 
},

carmodel : {
  type : String ,
  require: true
},

phonenumber :{
  type: Number ,
  require: true
},

carnumber :{
  type: String ,
  require: true
},
imageurls : [],
currentparkings:[]

},{
  timestamps : true,
})

const parkModel = mongoose.model('parking-cars' , parkSchema)

module.exports= parkModel