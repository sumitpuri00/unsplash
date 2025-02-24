const mongoose=require('mongoose');
// async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL/unsplashUser}`);
//     } catch (error) {
//         console.log(`user.js file erroe-----${error.message}`);
        
//     }
    
// }


let userModel=mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

module.exports=mongoose.model('user-detail', userModel);
 

 