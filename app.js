// const express=require('express');
// const app =express();
// require('dotenv').config();


// const userModel=require('./models/user');

// app.set('view engine', 'ejs');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// const path= require('path');
// app.use(express.static(path.join(__dirname,'public')));

// const cookieParser=require('cookie-parser');
// app.use(cookieParser());
 




// app.get('/',(req, res) =>{
    
//     res.render('login');
// })

// app.get('/sign-up',(req,res) => {
//     res.render('sign-up');
// })
 
// app.get('/profile',jwtAuthentication,(req,res)=>{
    
//     res.render('login');
// })


// const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken');

// app.post('/pinterest',fetchUnsplash ,async (req,res)=> {
    
//     try {
//         if(!req.body.firstName){
//             console.log(!req.body.firstName);
            
//             console.log("username & password");
            
//             const userObject = await userModel.findOne({email: `${req.body.email}`});
             
//             try {
                
//                 if(userObject != null && bcrypt.compareSync(`${req.body.password}`, userObject.password)){
//                     var token = jwt.sign({ email :  `${req.body.email}` }, 'some-secret-string');
                
//                     res.cookie('JWTcookie', token);
//                     console.log('b');

//                     res.render('pinterest' ,{obj : req.unsplashObjArray ,userDetail: { firstName: `${userObject.firstName}`,
//                     lastName: `${userObject.lastName}`} });
//                 }else{
                
//                     res.send('user is not available');
//                 } 
//             } catch (error) {
//                 console.log("error 1");
                
//             }

//         }else{
           
//             try {
//                     console.log("create user");
                    
//                 const userObj= await userModel.findOne({email: `${req.body.email}`})
    
//                 if(userObj == null){
                    

//                     let {firstName, lastName, email, password}= req.body;
                
//                     bcrypt.genSalt( 10, function(err, salt) {
//                         bcrypt.hash(password, salt,async function(err, hash){
//                             const userDetail=await userModel.create({
//                                 firstName,
//                                 lastName,
//                                 email,
//                                 password: hash
//                             }) 
//                             var token = jwt.sign({ email :  `${req.body.email}` }, 'some-secret-string');
                
//                             res.cookie('JWTcookie', token);

//                             res.render('pinterest',{ obj : req.unsplashObjArray,
//                                 userDetail: { firstName: firstName,
//                                                lastName: lastName}
//                                             } );
                                        
                                        
//                         });
//                     });
//                 }else{
//                     console.log(userObj);
                
//                     res.send('user already exist');
//                 }

//             } catch (error) {
//                 console.log('error 2');
                
//             }
    
            
//         }
//     } catch (error) {
//         console.log("error 3");
        
//     }
    

// })

// app.get('/home', jwtAuthentication ,(req,res) =>{

//     res.render('home',{userDetail: null});
// })
  


// function jwtAuthentication(req,res,next){
//     try {
        
//         const token=req.cookies.JWTcookie;
        
//         if(!token){
//             next();
//         }else{
            
//             jwt.verify(token, 'some-secret-string',async function(err, decoded) {
            
//                 const userobj = await userModel.findOne({email: decoded.email});

//                 if( !userobj ){
//                     res.redirect('/pineterest-guest')
//                 }else{ 
//                     console.log('user is authrosize');
                    
//                     // this is important req.k="kk", means we are adding a k variable to the req and we can access this k variable by using req.k here jwtAuthentication function and also in the req of where this this function jwtAuthentication is called ; means in our case in req of '/home' route . 
//                     req.userObj;
//                     res.render('profile', {userObj: userobj});
//                 }


            
//             });
        
//         }

//     } catch (error) {
//         console.log('error 4');
        
//     }
    
// }

// app.get('/pinterest-guest',fetchUnsplash,(req,res) =>{
//     res.render('pinterest' , {obj : req.unsplashObjArray ,userDetail : null} );
// })


// const { createApi } = require('unsplash-js');
// const fetch = require('node-fetch'); // Required for environments that don't have a built-in fetch

// const unsplash = createApi({
//     // accessKey: [process.env.ACCESS_KEY]
//     // OR
//     accessKey:process.env.ACCESS_KEY 
// });

// async function fetchUnsplash(req,res,next) {
//     try {
//         const response = await unsplash.photos.list({ page: 1, perPage: 50 });

//         req.unsplashObjArray=response.response.results;
//         console.log('images are fetched');
        
//         next();
        
//     } catch (error) {
//         console.error('Error fetching data from Unsplash:', error.message);
//     }
// }

 


// app.get('/log-out',(req,res)=> {
    
//     res.clearCookie('JWTcookie');
//     res.send('log-out');
// })



// const mongoose = require('mongoose'); 
// const { log } = require('console');
// async function dropAllCollections() {
//     try {
//         // Connect to the MongoDB database
//         await mongoose.connect(`${process.env.MONGODB_URL/unsplashUser}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB');

//         // Get all collections in the database
//         const collections = await mongoose.connection.db.collections();

//         // Drop each collection
//         for (let collection of collections) {
//             try {
//                 await collection.drop();
//                 console.log(`Dropped collection: ${collection.collectionName}`);
//             } catch (error) {
//                 // Ignore errors for collections that have already been dropped
//                 if (error.message === 'ns not found') continue;
//                 console.error(`Error dropping collection ${collection.collectionName}:`, error);
//             }
//         }

//         console.log('All collections dropped');
//         next();
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     } finally {
//         // Close the database connection
//         await mongoose.connection.close();
//         console.log('Connection closed');
//     }
// }


 
// app.get('/delete', async (req, res) => {
     
//     // Run the function to drop all collections
//     dropAllCollections();

// });
 
 

// app.get('/text',print,(req,res) => {
    
// }) 
// function print(req,res,next){
    
//     return res.send(`${req.n}`)
// }

// if (!process.env.VERCEL) {
//     // This means we’re NOT running on Vercel
//     const port = process.env.PORT || 3000;
//     app.listen(port, () => {
//       console.log(`Local server is listening on port ${port}`);
//     });
// }

const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createApi } = require('unsplash-js');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const userModel = require('./models/user');

// Middleware setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'some-secret-string';
const MONGODB_URL = process.env.MONGODB_URL;

// MongoDB Connection
const connectDB=async()=>{ 
    await mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
    
}
connectDB();
// Unsplash Setup
const unsplash = createApi({
    accessKey: process.env.ACCESS_KEY,
    fetch: fetch
});

// Middleware Functions
async function fetchUnsplash(req, res, next) {
    try {
        const response = await unsplash.photos.list({ page: 1, perPage: 50 });
        req.unsplashObjArray = response.response.results;
        console.log('Images fetched successfully');
        next();
    } catch (error) {
        console.error('Unsplash fetch error:', error.message);
        next(error);
    }
}

function jwtAuthentication(req, res, next) {
    try {
        const token = req.cookies.JWTcookie;
        
        if (!token) {
            return next();
        }

        jwt.verify(token, JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.redirect('/');
            }

            const userobj = await userModel.findOne({ email: decoded.email });
            if (!userobj) {
                return res.redirect('/pinterest-guest');
            }

            req.user = userobj;
            res.render('profile', { userObj: userobj });
        });
    } catch (error) {
        console.error('Auth error:', error);
        res.redirect('/');
    }
}

// Routes
app.get('/', (req, res) => {
    res.render('login');
});

app.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

app.get('/profile', jwtAuthentication, (req, res) => {
    res.render('login');
});

app.post('/pinterest', fetchUnsplash, async (req, res) => {
    try {
        if (!req.body.firstName) {
            // Login flow
            const userObject = await userModel.findOne({ email: req.body.email });
            
            if (userObject && bcrypt.compareSync(req.body.password, userObject.password)) {
                const token = jwt.sign({ email: req.body.email }, JWT_SECRET);
                res.cookie('JWTcookie', token);

                return res.render('pinterest', {
                    obj: req.unsplashObjArray,
                    userDetail: {
                        firstName: userObject.firstName,
                        lastName: userObject.lastName
                    }
                });
            }
            return res.status(401).send('Invalid credentials');
        } else {
            // Signup flow
            const existingUser = await userModel.findOne({ email: req.body.email });
            
            if (existingUser) {
                return res.status(409).send('User already exists');
            }

            const { firstName, lastName, email, password } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            await userModel.create({
                firstName,
                lastName,
                email,
                password: hash
            });

            const token = jwt.sign({ email }, JWT_SECRET);
            res.cookie('JWTcookie', token);

            res.render('pinterest', {
                obj: req.unsplashObjArray,
                userDetail: { firstName, lastName }
            });
        }
    } catch (error) {
        console.error('Pinterest route error:', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/home', jwtAuthentication, (req, res) => {
    res.render('home', { userDetail: null });
});

app.get('/pinterest-guest', fetchUnsplash, (req, res) => {
    res.render('pinterest', { obj: req.unsplashObjArray, userDetail: null });
});

app.get('/log-out', (req, res) => {
    res.clearCookie('JWTcookie');
    res.redirect('/');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Server setup
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Development server running on port ${port}`);
    });
}

module.exports = app;