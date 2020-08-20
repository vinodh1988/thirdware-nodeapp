var mongoose=require('mongoose');

var people = mongoose.model('keypeople',new mongoose.Schema(
    {
      id: Number,
      name: String,
      position: String,
      pic: String
    }
),'people');



module.exports=people;