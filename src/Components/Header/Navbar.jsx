import  React , {useEffect, useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {  FavoriteRounded, Loyalty, Search, StarBorderPurple500, StarBorderRounded,  StarRounded,  Whatshot } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function LabelBottomNavigation() {
  const navigate = useNavigate()
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
    
  };
  
  useEffect(()=>{
      if(value === "trending")
      {
          navigate("/")
      }
      else if(value === "favourites")
      {
        navigate("/favourites")
      }
     else if(value === "search")
      {
        navigate("/search")
      }
      else if(value === "rating")
      {
        navigate("/rating")
      }
      else if(value === "booking")
      {
        navigate("/ticket-booking")
      }
  },[navigate,value])
 
  

  return (
    
    <BottomNavigation sx={ {width:"100%" ,height:"30" , bottom: "0" , px:"15" , position:"fixed" , bgcolor: 'rgba(0, 2, 61, 0.8)',backdropFilter:"blur(10px)", zIndex :"1000" , boxShadow: "0px -2px 8px black"}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        sx={{color:"white"}}
        label="Trending"
        value="trending"
        icon={<Whatshot/>}
      />

      <BottomNavigationAction 
      label="Search" 
      value="search"
       sx={{color:"white"}} 
       icon={<Search />} />

      <BottomNavigationAction
      sx={{color:"white"}}
        label="Rating"
        value="rating"
        icon={<StarBorderRounded/>} />

      <BottomNavigationAction
      sx={{color:"white"}}
        label="Favourites"
        value="favourites"
        icon={<FavoriteRounded />} />

      <BottomNavigationAction
      sx={{color:"white"}}
        label="Tickets"
        value="booking"
        icon={<Loyalty/>} />
      
    </BottomNavigation>
  );
}
