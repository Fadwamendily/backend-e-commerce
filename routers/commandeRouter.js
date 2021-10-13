const commandeController =require('../controllers/commandeController');
const express=require('express');

const route= express.Router();


route.post('/addcommande',commandeController.createcommande)
route.get('/getcommande',commandeController.getAllcommande);
route.get('/getcommandeById/:id',commandeController.getCommandeById);
route.delete('/deletecommande/:id',commandeController.deletecommande)
route.put('/updatecommande/:id',commandeController.updatecommande)
route.delete('/removecommande',commandeController.removecommande)
route.put('/annulerProduit/:id',commandeController.annulerProduit)
route.put('/pushproduit/:id',commandeController.pushProduit)
module.exports=route;