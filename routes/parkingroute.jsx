const express = require("express");
const router = express.Router();

const Park =require('../models/park.jsx')

router.get('/getallparkings', async(req,res)=>{

try {
  const park =await Park.find({})
  res.send(park)
} catch (error) {
  return res.status(400).json({message: error});
}

});

router.get('/getspotbyid', async(req,res)=>{

const spotid = req.body.spotid

  try {
    const spot =await Park.findOne({_id: spotid})
    res.send(spot)
  } catch (error) {
    return res.status(400).json({message: error});
  }
  
  });


module.exports =router;