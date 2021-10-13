const bodyParser = require('body-parser')
const subcategoriemodel = require('../models/subcategoriemodel')




module.exports={
    createsubcategorie: async (req, res) => {
        try { 
          const subcategorie = new subcategoriemodel(req.body);
          const result = await subcategorie.save();
        
          res.json({message:'subcategorie created', data:result});
        } catch (error) {
          console.log(error.message);
          res.json({message:'subcategorie is not created', data:error+'err'});
        }
    },

    getAllsubcategorie: async (req, res) => {
        try { 
         
          const result = await subcategoriemodel.find({}).populate('product').populate('categorie');
          res.json({message:'all subcategorie in bd', data:result,statut:200});
       
        } catch (error) {
          console.log(error.message);
          res.json({message:'error', data:Null,statut:500});
        }
    },
  
    getsubcategorieById: async (req, res) => {
  
      try { 
       
        const result = await subcategoriemodel.findById({_id:req.params.id}).populate('product').populate('categorie');
        res.json({message:'subcategorie in bd', data:result,statut:200});
      
      } catch (error) {
        console.log(error.message);
        res.json({message:'error', data:Null,statut:500});
      }
    },






    deletesubcategorie: async (req,res) => {
      try{
          const result = await subcategoriemodel.findByIdAndDelete({_id:req.params.id})
          res.json({message:'subcategorie deleted', data:result,statut:200});
      } catch (error) {
          console.log(error.message);
          res.json({message:'error', data:Null,statut:500});
      }
  },


  updatesubcategorie: async (req,res) => {
    try{
        const result = await subcategoriemodel.updateOne({_id:req.params.id},req.body,)
        res.json({message:'subcategorie updated', data:result,statut:200});
    } catch (error) {
        console.log(error.message);
        res.json({message:'error', data:Null,statut:500});
    }
},



removesubcategorie: async (req,res) => {
  try{
      const result = await subcategoriemodel.remove()
      res.json({message:'subcategorie removed', data:result,statut:200});
  } catch (error) {
      console.log(error.message);
      res.json({message:'error', data:Null,statut:500});
  }
}



}






