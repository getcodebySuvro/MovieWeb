import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Whatshot } from '@mui/icons-material';
import Trendcard from '../Components/Trendcard/Trendcard';
import "./Commonstyle.css"



const Trending = ({ticket}) => {

const [content,setContent] = useState([])
const [loading,setLoading] = useState(true)

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';  
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&"+ API_KEY;



const fetchTrending =  async()=>{
  const {data} = await axios.get(API_URL);
   setContent(data.results);
   setLoading(false);
  

}
  useEffect(()=>{
    fetchTrending()
    
  },[])


  return (
    <div>
      <div className='maintitle'>
       <span><Whatshot/></span> Trending<span><Whatshot/></span>
       </div>
       
         <div className='mainbody'>
        
         {
          loading
          ?
          <div className='trendload'></div>
          
           :
           content && content.map((item)=>{
            return(
             <Trendcard
              key={item.id}
              item = {item}
              ticket={ticket}
               />
            )
          })
          
         }
    
         </div>

   
      
    </div>
  )
}

export default Trending
