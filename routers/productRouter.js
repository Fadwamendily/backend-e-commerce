
const productController =require('../controllers/productController');
const express=require('express');
const upload=require('../midlware/uploadFile')
const route= express.Router();
route.post('/addproduct',upload.single('image'), productController.createProduct)
route.get('/findallproduct',productController.getAllproduct)
route.get('/findproductbyid/:id',productController.getproductById)
route.delete('/deleteproductById/:id',productController.deleteproductById)
route.put('/update/:id',productController.updateproductById)
module.exports=route;