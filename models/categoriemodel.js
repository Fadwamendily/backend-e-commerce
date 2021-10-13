const mongoose=require('mongoose')
const Schema = mongoose.Schema

var uniqueValidator = require('mongoose-unique-validator');



const categorieSchema = new Schema({


name_categorie:{

    type:String,
    require:true
},


id_categorie:{

    type:String,
    require:true
},





subcategorie:[{

    type:mongoose.Schema.Types.ObjectId,////plusieur  relation entre commande et user (1..*) donc juste nzido [] bech ywali 3anna tableau d'objet
    ref:"subcategorie"
    
    
    }]


},

{timestamps:true},



)


categorieSchema.plugin(uniqueValidator);

module.exports=mongoose.model('categorie',categorieSchema);