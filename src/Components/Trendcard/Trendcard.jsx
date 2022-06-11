import React, { useContext} from 'react'
import "./Trendcard.css"
import { Badge, IconButton } from '@mui/material'
import { FavoriteRounded, Loyalty} from '@mui/icons-material'
import { Bookmovie, Favourite } from '../../Context'



const Trendcard = ({item,ticket}) => {

  const {favmovie,setFavmovie} = useContext(Favourite)
  const {movieticket,setMovieticket} = useContext(Bookmovie)
  


  const IMG_URL = "https://image.tmdb.org/t/p/w500" ;
  const NoIMG_url = "https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/c64ba65313143652.jpg"



 return (
               <>
              
               <div className='card'>

                 
               {
                 ticket
                 ?
                 <IconButton className='fav' onClick={()=>{setMovieticket([item])}}>
                   <Loyalty sx={{color:"white",}}/>
                 </IconButton>
                 :
                
                 (favmovie.includes(item))
                 ?
                 <IconButton className='fav' onClick={()=> setFavmovie(favmovie.filter((f) => f.id !== item.id))}>
                 <FavoriteRounded className='red '/>
               </IconButton>
                 :
                 <IconButton onClick={()=>{setFavmovie([...favmovie,item])}} className='fav'>
                    <FavoriteRounded className='gray '/>
                 </IconButton>
                 
               
               }
                <Badge badgeContent={item.vote_average} color={item.vote_average > 7 ? "success" : "secondary"} />
                    <img src = {item.poster_path ? IMG_URL + item.poster_path : NoIMG_url} alt={item.title}/>
                    <div className='cardtitle'>{item.title}</div>
                    <span className='carddate '>{item.release_date}</span>
                    <span className='overview'>{item.overview ? item.overview : <span className='nooverview'>No Overview Available,Sorry!</span>}</span>
                    
                </div>
        </>
      
  
  )
}

export default Trendcard
