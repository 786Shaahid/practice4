import { configDotenv } from 'dotenv';
configDotenv();
import express, { urlencoded } from 'express';
import { ConnectDB } from './configuration/mongoose.js';
import User from './models/user.models.js';
import cors from 'cors';
import path from 'path'
const app=express();
const port=process.env.PORT
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/api/getall',async(req,res)=>{
      try {
        const user= await User.find();
        return res.status(200).json({
            message:"Get All list ",
            data:user
        })
      } catch (error) {
        return res.status(500).json({
             message:'error',
             data:{}
        })
      }
});

app.post('/api/create',async(req,res)=>{
    try {
      const user= await User.create(req.body);
      return res.status(200).json({
          message:"Resoure Create Successfully ",
          data:user
      })
    } catch (error) {
      return res.status(500).json({
           message:'error',
           data:{}
      })
    }
});

// app.put('/api/modify/:id',async(req,res)=>{
//     try {
//       const user= await User
//       return res.status(200).json({
//           message:"Updated Succefully ",
//           data:user
//       })
//     } catch (error) {
//       return res.status(500).json({
//            message:'error',
//            data:{}
//       })
//     }
// });
app.get('/api/getdata',(req,res)=>{
    return res.status(200).json({message:'ham aa rhe hai'})
})
if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(path.resolve(),'frontend','dist')))
    app.get('*',(req,res)=>{
         return res.sendFile(path.join(path.resolve(),'frontend','dist','index.html'))
    })
}


ConnectDB().then(connect=>{
    app.listen(port,()=>{
        console.log(`Server is running on port :: ${port}`);
        console.log(`ConnectDB:: ${connect.name}`);
    })
}).catch(err=>{
    console.log(`Error :: ${err}`);
})