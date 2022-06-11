import React, { useState } from 'react'
import { createContext } from 'react'

 export const Favourite = createContext()
 export const Bookmovie = createContext()

const Context = ({children}) => {
    const [favmovie,setFavmovie] = useState([])
    const [movieticket,setMovieticket] = useState([])
  return (
    <Favourite.Provider value={{favmovie,setFavmovie}}>
      <Bookmovie.Provider value={{movieticket,setMovieticket}}>
        {children}
      </Bookmovie.Provider>
    </Favourite.Provider>
  )
}

export default Context
