
const express=require('express');
const database = require('./config/database')
const bodyParser=require('body-parser')
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./config/swagger.json');
const port=3000
const app=express();


app.get('/hello',(req,res)=>{res.send('hello newserver how are u')})

app.set('secretKey','bootcamp')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


const userRouter=require('./routers/userRouter');
const productRouter=require('./routers/productRouter');
const categorieRouter=require('./routers/categorieRouter');
const subcategorieRouter=require('./routers/subcategorieRouter');
const commandeRouter=require('./routers/commandeRouter');


const sellerRouter=require('./routers/sellerRouter');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.use('/seller',sellerRouter);


app.use('/subcategorie',subcategorieRouter);
app.use('/users',userRouter);
app.use('/product',productRouter);

app.use('/categorie',categorieRouter);
app.use('/commande',commandeRouter);





// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req,res, next) {
    let err = new Error();
       err.status = 404;
       next(err);
   });
   // handle errors
   app.use(function(err, req, res, next) {
    console.log(err);
     if(err.status === 404)
      res.status(404).json({message: " Path Not found"});
     else 
       res.status(500).json({message: "Something looks wrong "});
   });
   
app.listen(port,console.log(`server running at http//localhost:${port}`)); 


//partie fixe fi route: hiya  http//localhost:3000/users


