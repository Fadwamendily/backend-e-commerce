const mongoose=require('mongoose')
const Schema = mongoose.Schema

const userModel=require('../models/userModel')



const sellerSchema = new Schema({
  

    cin:{


        type:Number,
        required:true

    }


})


module.exports=userModel.discriminator('seller',sellerSchema);