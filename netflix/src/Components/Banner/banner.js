import React, { useState,useEffect } from 'react'
import './banner.css'
import axios from '../axios'
import { apiKey, baseUrl,imageUrl } from '../contants'
function Banner(props) {

  const [movie,setMovie] = useState()
  const[tempIndex,setTempIndex] = useState(0)
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`).then((res)=>{
      setMovie(res.data.results[tempIndex])
  })
},[tempIndex])
  
  useEffect(()=>{
    let flag ='forward'
    const intervalId = setInterval(()=>{
      console.log(flag,'flag',tempIndex,'tempIndex');
      setTempIndex(tempIndex+1)
     
      if(tempIndex>=19) setTempIndex(0);
       
    },10000)
    return () => clearInterval(intervalId);
  },[movie])

  return (
    <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.poster_path : ''})`, }}
    className='container-fluid rounded text-light banner'  >
        <div className='content  container-fluid col-12 w-100  '>
            <div className='container-flex  col-12 '>
            <h1 className='title text text-warning'> {movie?movie.original_title:'' } </h1>
                <div className='container-flex col-12 d-flex '>
                    <button className='button btn' type="button"> Play</button>
                    <button className='button btn' type="button"> My list</button>
                </div>
                <p className='description   text-left' >{movie?movie.overview:'' } </p>
            </div>
            <div className='col-9 container-flex '> 
             
            </div>
    
        </div>
        <div className='fade_bottom col-12'>

        </div>
    </div>
  )
}

export default Banner
