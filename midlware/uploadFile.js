/*pour tester le fonctionnement du fct var multer= require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('jfnvjfnj')
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        console.log('111111111111',file.originalname)
      cb(null, file.originalname)
    }
  })
var upload = multer({ storage: storage })
module.exports=upload
*/




var multer= require("multer");
const path=require("path")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {//fonction filename
      cb(null, file.originalname)
    }
  })





  //fonction file filter ne5


/*
   const  fileFilter = function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if( ext !== '.png',ext !== '.jpeg',ext !== '.JPG',) {
            return callback(new Error('Only images are allowed'))
        }

        if (file.mimetype == "text/*") {
          cb(null, true);
          } else {
          cb(null, false);
          }


        callback(null, true)
    }
 cé le meme que cidessous sauf que on a fait deux filter sur image et pdf
*/
/* const fileFilter = (req, file, cb) => {  //function to control which files are accepted
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'application/pdf') {  //mimetype of the file
      cb(null, true);
  } else {
      cb(null, false);
  } 
}
     */
    
var upload = multer({ storage: storage})
module.exports=upload






