const mongoose=require('mongoose')
const Schema = mongoose.Schema

var uniqueValidator = require('mongoose-unique-validator');



const productSchema = new Schema({
  


    name:{

        type:String,
        required:true  

    },

   
    price:{


        type:Number,
        required:true


    },



    description:{

        type:String,
        required:true  

    },


   image:{
    
        type:String,
      require:true
          
     },


     commande:[{

        type:mongoose.Schema.Types.ObjectId,
      ref:"commande"



     }],



     subcategorie:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"subcategorie"
  
  
  
       },
  

},


{timestamps:true},

)



productSchema.plugin(uniqueValidator);

module.exports=mongoose.model('product',productSchema);