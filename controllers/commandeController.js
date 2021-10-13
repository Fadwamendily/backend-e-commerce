const bodyParser = require('body-parser')
const commandeModel = require('../models/commandeModel')
module.exports={

    createcommande: async (req, res) => {
        try { 
          const commande = new commandeModel(req.body);
          const result = await commande.save();
        
          res.json({message:'new commande created', data:result,statut:200});
        } catch (error) {
          console.log(error.message);
          res.json({message:'error', data:null,statut:500});
        }
    },

    getAllcommande: async (req, res) => {
        try { 
         
          const result = await commandeModel.find({}).populate('user').populate('produit');
          res.json({message:'all commande in bd', data:result,statut:200});
       
        } catch (error) {
          console.log(error.message);
          res.json({message:'error', data:null,statut:500});
        }
    },
  
    getCommandeById: async (req, res) => {
  
      try { 
       
        const result = await commandeModel.findById({_id:req.params.id}).populate('user').populate('produit');
        res.json({message:'commande in bd', data:result,statut:200});
      
      } catch (error) {
        console.log(error.message);
        res.json({message:'error', data:null,statut:500});
      }
    },
  
    deletecommande: async (req,res) => {
      try{
          const result = await commandeModel.findByIdAndDelete({_id:req.params.id})
          res.json({message:'commande deleted', data:result,statut:200});
      } catch (error) {
          console.log(error.message);
          res.json({message:'error', data:null,statut:500});
      }
  },

  updatecommande: async (req,res) => {
    try{
        const result = await commandeModel.updateOne({_id:req.params.id},req.body)
        res.json({message:'commande updated', data:result,statut:200});
    } catch (error) {
        console.log(error.message);
        res.json({message:'error', data:null,statut:500});
    }
},

removecommande: async (req,res) => {
  try{
      const result = await commandeModel.remove()
      res.json({message:'commande removed', data:result,statut:200});
  } catch (error) {
      console.log(error.message);
      res.json({message:'error', data:null,statut:500});
  }
},

/*   try{
    commandeModel.method('commande annulée', function unFollow(id) {
  var commande = this;
  commande.following.pull({_id: id});
  res.json({message:'commande annulée', data:result,statut:200});
})}
 catch (error) {
  console.log(error.message);
  res.json({message:'error', data:null,statut:500});
} */
annulerProduit: async (req,res) => {
  try { 
    const result = await commandeModel.updateOne( { _id: req.params.id }, { $pull: { produit: req.body.produit }});
    res.json({message:'produit annulé', data:result,statut:200});
  }
  catch (error) {
    console.log(error.message);
    res.json({message:'error', data:null,statut:500});
  }
},

pushProduit: async (req, res) => {
  try { 
    const result = await commandeModel.updateOne( { _id: req.params.id }, { $push: { produit: req.body.produit }});/*ajout d'un nouveau produit au tableau commande::produit meme nom de relation qui se trouve au schema commande*/
    res.json({message:'produit pushed', data:result,statut:200});
  }
  catch (error) {
    console.log(error.message);
    res.json({message:'error', data:null,statut:500});
  }
}
}