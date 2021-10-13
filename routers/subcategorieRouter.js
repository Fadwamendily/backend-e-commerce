const subcategorieController =require('../controllers/subcategorieController');
const express=require('express');

const route= express.Router();

route.post('/addsubcategorie',subcategorieController.createsubcategorie)

route.get('/findsubcategorie',subcategorieController.getAllsubcategorie)
route.get('/findsubcategoriebyid/:id',subcategorieController.getsubcategorieById)
route.delete('/deletesubcategorie/:id',subcategorieController.deletesubcategorie)
route.put('/updatesubcategorie/:id',subcategorieController.updatesubcategorie)
route.delete('/removesubcategorie',subcategorieController.removesubcategorie)

module.exports=route;