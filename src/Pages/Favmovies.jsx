import { FavoriteRounded } from '@mui/icons-material'
import React, { useContext } from 'react'
import Trendcard from '../Components/Trendcard/Trendcard'
import { Favourite } from '../Context'
import "./Commonstyle.css"


const Favmovies = () => {

  const {favmovie} = useContext(Favourite)
 
return (
    
    <div>
      <div className='maintitle'>
       <span><FavoriteRounded/></span> Your Favourites <span><FavoriteRounded/></span>
        </div>
         
         <div className='mainbody'>
         {
           favmovie.length>=1
           ?
            favmovie && favmovie.map((item)=>{
              return(
               <Trendcard
                key={item.id}
                item = {item}
                
                 />
              )
            })
            :
            <div className='favdefault'>You dont have any favourites😢</div>
          }
         </div>
    </div>
  )
}

export default Favmovies
