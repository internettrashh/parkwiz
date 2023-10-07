const express = require("express")
const cors = require ("cors")
const mongoose = require ('mongoose')
const UserModel = require('../models/userlogin')
const router = express.router

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://cazrot335:Parth990@cluster0.vvcuici.mongodb.net/mern-cars/users')

app.post('/signup', (req,res)=>{
  UserModel.create(req.body)
.then(User => res.json(User))
.catch(err => res.json(err))
})

module.exports = router;
app.listen(port,() =>
console.log(`MY Server is connecte`)
);
