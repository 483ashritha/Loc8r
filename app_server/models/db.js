var mongoose=require('mongoose');
var loc=require('./locations')
require('dot').config();
const PORT=process.env.PORT || 3000;

var gracefulshutdown;
const dbURI='mongodb://0.0.0.0:27017/loc8r';
if(process.env.NODE_ENV === 'production'){
   dbURI=process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected',function () {
  console.log('Mongoose connected to' +dbURI);

});
mongoose.connection.on('error',function(err){
  console.log('Mongoose connection error:' +err);
});
mongoose.connection.on('disconnected',function (){
  console.log('Mongoose disconnected');
});
require('./locations');