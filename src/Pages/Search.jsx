import { SearchRounded } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Trendcard from '../Components/Trendcard/Trendcard';
import './Search.css'
import './Commonstyle.css'
import Trending from './Trending';




const Search = ({ticket}) => {
  const [searchitem,setsearchItem] = useState('')
  const [content,setContent] = useState([])
  


  
const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';  
const BASE_URL = 'https://api.themoviedb.org/3';
const SRCH_URL = BASE_URL + "/search/movie?" + API_KEY;

const inputHandler = (e)=>{
  const searchvalue = e.target.value;
  setsearchItem(searchvalue)
}


useEffect(()=>{
  fetchSearchresult();
},[searchitem])

const fetchSearchresult = async ()=>{
  const {data} = await axios.get(SRCH_URL + `&query=${searchitem}` );
  setContent(data.results);

  
}



  return (
    <div>
     
      <div className='maintitle'>
         <span><SearchRounded /></span>   Search Your Favourite Movie   <span><SearchRounded/></span>
      </div>
      <form  >
        <input type='input' className='search' placeholder='Movie name here' value={searchitem} onChange={inputHandler}/>
      </form>
      <div className='mainbody'>
        
          {
            searchitem 
            ?
            content.length>0
            ?
              content && content.map((item)=>{
              
                return(
                
                    <Trendcard
                  key={item.id} 
                  item={item}
                  ticket={ticket}
                   />
              )
              })
              :
              <div className='favdefault' >No Movies Found Sorry!<br/>😢</div>
            
            :
            <Trending ticket={ticket}/>
          }
      </div>
      
      
      
    </div>
  )
}

export default Search
