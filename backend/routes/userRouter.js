import express from 'express';
import data from '../data.js'
import User from '../models/userModel.js';
import { getToken } from '../util.js';

const userRouter = express.Router();

// userRouter.get('/seed',async(req,res)=>{
//          const createdUsers = await User.insertMany(data.users);
//          res.send({createdUsers});
//      });
userRouter.post('/signin',async(req,res)=>{

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    try{
      // if(signinUser){
        res.send  ({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })

    }
    catch(error){
        res.status(401).send({msg:'Invalid Email or Password'});
    }
})

userRouter.get('/createadmin', async (req, res) => {
    try {
      const user = new User({
        name: 'ram',
        email: 'user1@gmail.com',
        password: '12345',
        isAdmin: false,
      });
      const newUser = await user.save();
      res.send(newUser);
    } catch (error) {
      res.send({ message: error.message });
    }
  });

  userRouter.post('/register', async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
  });


export default userRouter;

//  router.get("/createadmin", async(req,res)=>{

//     try {
//         console.log('Connected to Database');
//     const user = new User({
//         name: 'harsh',
//         email: 'harsh.maru759@gmail.com',
//         password: '1234',
//         isAdmin: true
//     });

//     const newUser = await user.save();
//     res.send(newUser);
//     } 
    
//     catch (error) {
//         console.log('NOT Connected to Database');
//         res.send({msg: error.message});
//     }

// });




// 
