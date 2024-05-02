import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

//  const fetchData=async (method,url='',body='')=>{
//     const res=  await axios({
//       method:method,
//       url:`/api/${url}`,
//       data:body
//     });
//     return res.data;
//  }
 

 useEffect(()=>{
  //  fetchData('get','get').then(res=>{
  //     // console.log(res);
  //     setMessage(res.message)
  //  }).catch(err=>{
  //   console.log(`Error :: ${err}`);
  //  })
     const fetchData = async()=>{
            const res= await axios.get('/api/getdata');
            console.log(res);
            setMessage(res.data.message)
     }
     fetchData()

 },[])

  return (
    <>
      <div>
         hii,{message}
      </div>
    </>
  )
}

export default App
