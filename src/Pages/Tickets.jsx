
import React, { useContext, useState } from 'react'
import "./Tickets.css"
import Search from "./Search"
import { Bookmovie } from '../Context';
import BasicModal from '../Modal/BasicModal';




const Tickets = () => {
  const[totalseat,settotalSeat] = useState(0);
  const[totalprice,settotalPrice] = useState(0);
  const {movieticket,setMovieticket} = useContext(Bookmovie);

  const clickHandler = (e)=>{
   
 

    if(e.target.classList.contains('seat') && !e.target.classList.contains("occupied"))
    {
      e.target.classList.toggle("selected");
    }
   if(e.target.classList.contains("selected"))
   {
     const a = +movieticket.map((movie)=>{return(Math.ceil(movie.id/10000))});
     settotalPrice(totalprice + a);
     settotalSeat(totalseat+1);
   }
   else{
    const a = +movieticket.map((movie)=>{return(Math.ceil(movie.id/10000))});
    settotalPrice(totalprice-a);
    settotalSeat(totalseat-1);
   }
  
   
 }
 

 


 
  return (
    <>
          {
            movieticket.length>0
            ?
            <div className='ticketcontainer'>
                        <div style={{fontSize:"20px",marginTop:"10px"}}>Selected Movie</div>
                        <div className='moviename'>{movieticket.map((movie)=>{return(movie.title)})}</div>
                        <div style={{fontSize:"20px"}}>Ticket Price</div>
                        <div className='moviename'>₹{movieticket.map((movie)=>{return(Math.ceil(movie.id/10000))})}</div>
                            <ul className='showcase'>
                            <li>
                              <div className='seat'></div>
                              <small>N/A</small>
                            </li>
                            <li>
                              <div className='seat selected'></div>
                              <small>Selected</small>
                            </li>
                            <li>
                              <div className='seat occupied'></div>
                              <small>Occupied</small>
                            </li>
                          </ul>

                          <div className='screenContainer'>
                            <div className='screen'></div>
                              <div className='row'>
                                <div className='seat'  onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat'onClick={clickHandler}></div>
                                <div className='seat'onClick={clickHandler}></div>
                                <div className='seat'onClick={clickHandler}></div>
                                <div className='seat'onClick={clickHandler}></div>
                              </div>

                              <div className='row'>
                                <div className='seat'onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat occupied'></div>
                                <div className='seat occupied'></div>
                                <div className='seat occupied'></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                              </div>

                              <div className='row'>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat'onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                              </div>

                              <div className='row'>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                              </div>

                              <div className='row'>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat occupied'></div>
                                <div className='seat occupied'></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                              </div>

                              <div className='row'>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat occupied'></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                                <div className='seat' onClick={clickHandler}></div>
                              </div>
                            </div>

                          <p className='text'>
                            You have selected <span>{totalseat}</span>seats<br/>
                            Total Price <span>₹{totalprice}</span>
                          </p>

                          <button className='bookbutton' ><BasicModal seat={totalseat}/></button>
                          <button className='choosemovie' onClick={()=>{setMovieticket(0)}}>Choose Another Movie</button>
                          

                          </div>
                          :
                          <Search ticket="ticket"/>
          }
          
      


      

  </>
  )
}

export default Tickets
