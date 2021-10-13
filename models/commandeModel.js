const mongoose=require('mongoose')
const Schema = mongoose.Schema

var uniqueValidator = require('mongoose-unique-validator');



const commandeSchema = new Schema({
  


    id_cmd:{

        type:String,
        required:true  

    },

 

   adresse_cmd:{


    type:String,
    require:true

   },
    

   montant_cmd:{


    type:Number,
    require:true

   },




   user:{

    type:mongoose.Schema.Types.ObjectId,////une seule relation entre commande et user (1)
    ref:"users"
    
    },



    
   produit:[{

    type:mongoose.Schema.Types.ObjectId,////plsieur relation entre commande et user (1)
    ref:"product"
    
    }]

},

{timestamps:true},


)



commandeSchema.plugin(uniqueValidator);

module.exports=mongoose.model('commande',commandeSchema);