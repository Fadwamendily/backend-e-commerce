const bodyParser = require('body-parser')
const sellermodel = require('../models/sellermodel')




module.exports={


    
    createseller: async (req, res) => {
        try { 
          const seller = new sellermodel(req.body);
          const result = await seller.save();
        
          res.send(result+" "+'seller created');
        } catch (error) {
          console.log(error.message);
          res.send(error+'err');
        }
    },
        


    
    getAllseller: async (req, res) => {
        try { 
         
          const result = await sellerModel.find({}).populate('product').populate('categorie');
          res.json({message:'all seller in bd', data:result,statut:200});
       
        } catch (error) {
          console.log(error.message);
          res.json({message:'error', data:Null,statut:500});
        }
    },
  
  
  
  
  
    getsellerById: async (req, res) => {
  
      try { 
       
        const result = await sellerModel.findById({_id:req.params.id}).populate('product').populate('categorie');
        res.json({message:'seller in bd', data:result,statut:200});
      
      } catch (error) {
        console.log(error.message);
        res.json({message:'error', data:Null,statut:500});
      }
    },





    deleteseller: async (req,res) => {
      try{
          const result = await sellermodel.findByIdAndDelete({_id:req.params.id})
          res.json({message:'seller deleted', data:result,statut:200});
      } catch (error) {
          console.log(error.message);
          res.json({message:'error', data:Null,statut:500});
      }
  },


  updateseller: async (req,res) => {
    try{
        const result = await sellermodel.updateOne({_id:req.params.id},req.body,)
        res.json({message:'seller updated', data:result,statut:200});
    } catch (error) {
        console.log(error.message);
        res.json({message:'error', data:Null,statut:500});
    }
}


}






