const express  = require("express");
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require("./models/userlogin.jsx")
const parkRoute =require('./routes/parkingroute.jsx')

const  app  = express();
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://cazrot335:Parth990@cluster0.vvcuici.mongodb.net/mern-cars');
app.post('/login', (req,res) =>{
   const {email ,password}=req.body
   UserModel.findOne({email: email})
   .then(user =>{
    if(user){
      if(user.password=== password){
      res.json("Success")
    }
    else{
      res.json("the password is Incorrect")
    }
  } else{
      res.json("NO RECORD EXISTED")
    }
   })
})
app.post('/signup', (req,res)=>{
  UserModel.create(req.body)
.then(User => res.json(User))
.catch(err => res.json(err))
})





app.use(express.json())

app.use('/api/parking'  , parkRoute )
// app.use('/api/user' , userRoute)

const port = process.env.PORT || 5000;

app.listen(port,() =>
console.log(`MY Server is Running`)
);
var connection = mongoose.connection

connection.on('error',() =>{
  console.log(`Mongo DB connection failed`)
})

connection.on('connected',()=>{
  console.log(`Mongo DB Connection Successful`)
})