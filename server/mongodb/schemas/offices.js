var mongoose=require('mongoose');

var offices=mongoose.model('offices',new mongoose.Schema(
    {
      name: String,
      address: String,
      city: String,
      pin: String
    }
),'offices');

module.exports=offices;