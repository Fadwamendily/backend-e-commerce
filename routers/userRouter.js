

const userController=require('../controllers/userController');
const express=require('express');

/* const validUser = require('../midlware/validUser');
 */
const route= express.Router();

route.post('/addUser',userController.createUser);

route.get('/getUser',/* validUser.validateUser */userController.getAllUser);
route.get('/getUserById/:id',userController.getUserById);
route.delete('/deleteUserById/:id',userController.deleteUserById);
route.put('/updateUserById/:id',userController.updateUserById);

route.post('/signin',userController.signin);
route.post('/refrech',userController.refreshToken);
route.post('/logout',userController.LogOut);
route.post('/sendMail',userController.sendMailUser);
route.post('/forgotPass',userController.forgotPassword);
route.post('/resetPass',userController.resetPassword);

module.exports=route;
