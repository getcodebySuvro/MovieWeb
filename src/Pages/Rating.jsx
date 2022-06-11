import { StarRounded } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Trendcard from '../Components/Trendcard/Trendcard';
import Trending from './Trending';
import './Commonstyle.css'

const Rating = () => {
  
  const [searchitem,setsearchItem] = useState("")
  const [content,setContent] = useState([])
  
const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';  
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&"+ API_KEY;



const inputHandler = (e)=>{
  const searchvalue = e.target.value;
  setsearchItem(searchvalue)
}


useEffect(()=>{
  fetchSearchresult();
},[searchitem])

const fetchSearchresult = async ()=>{
  const {data} = await axios.get(API_URL);
  setContent(data.results);
  
}



  return (
    <div>
     
      <div className='maintitle'>
         <span><StarRounded /></span>   Search By Rating  <span><StarRounded/></span>
      </div>
      <form  >
        <input type='input' className='search' placeholder='Rating' value={searchitem} onChange={inputHandler}/>
      </form>
      <div className='mainbody'>
        
          {
            searchitem 
            ?
             searchitem < 9
             ?
              content && content.map((item)=>{
              
                if(item.vote_average>=searchitem)
                return(

                
                    <Trendcard
                  key={item.id} 
                  item={item} />
       )
               
               
              })
              :
              <div className='favdefault' >No Movies Found Sorry!😢</div>
              
               :
            <Trending/>
          }
      </div>
      
      
      
    </div>
  )
}

export default Rating
