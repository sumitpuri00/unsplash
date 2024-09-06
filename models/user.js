const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/JWTdatabase');

let userModel=mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

module.exports=mongoose.model('user-detail', userModel);
 

 