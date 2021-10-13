const categorieController =require('../controllers/categorieController');
const express=require('express');

const route= express.Router();

route.post('/addcategorie',categorieController.createNewcategorie)
route.get('/allcategorie',categorieController.getAllcategorie)
route.get('/getcategoriebyid/:id',categorieController.getCategorieById)
route.delete('/deletecategorie/:id',categorieController.deletecategorie)
route.put('/updatecategorie/:id',categorieController.updatecategorie)
route.delete('/removecategorie',categorieController.removecategorie)



module.exports=route;