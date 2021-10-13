//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/bootcampw'; // bootcamp est le nom de la base de données
mongoose.connect(mongoDB,{ useNewUrlParser: true ,useUnifiedTopology: true});
mongoose.Promise = global.Promise;
module.exports = mongoose;
