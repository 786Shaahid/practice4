import { configDotenv } from "dotenv";
configDotenv()
import mongoose  from "mongoose";
const url=process.env.DB_URL;

export const ConnectDB=()=>{
    return new Promise(async (resovle,reject)=>{
        try {
             const connection= await mongoose.connect(url);
             if(connection){
                return resovle(connection.connections[0])
             }else{
                throw "Something went wronge"
             }
        } catch (error) {
             return reject(error)
        }

    })
}