import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './rowPost.css'
import axios from '../axios';
import { apiKey,imageUrl } from '../contants';

function RowPost(props) {
    const [movies,setMovies] = useState([]);
    const[movieid,setMovieId] = useState();
    const [myClass,setmyClass] = useState()
    console.log(props.link,'props');
    useEffect(()=>{
    axios.get(`${props.link}`).then((res)=>{
        setMovies(res.data.results)
        console.log(res.data.results);
        if(props.preview=='large'){
            setmyClass('poster container-flex m-1 col-3')
        }
        else if (props.preview=='medium'){
            setmyClass('poster container-flex m-1 col-2')
        }
        else if (props.preview=='small'){
            setmyClass('poster container-flex m-1 col-1')
        }
    }

    )    
    },[])
    const handleMovie =(movieId)=>{
        console.log(movieId,'movieId');
        axios.get(`/movie/${movieId}/videos?api_key=${apiKey}`).then(res=>{
            setMovieId(res.data.results?res.data.results[0].key:'');
            console.log(res.data.results,'movieidmovieid')
        })

        
    }
    const opts = {
        height: '200px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

return  (
    <div className='col-12 h-100' >
             <div className='container-flex d-flex col-12 posters '  > 
                
            {movies.map((obj) => (
                <div onClick={()=>{
                    handleMovie(obj?.id)
                }} key={obj?.id} className={myClass} style={{ backgroundPosition:'center',backgroundSize:'cover' , backgroundImage: `url(${imageUrl}${obj.backdrop_path})` }}>
                        <h5 className='bottom-0 start-0 text-light' > {obj.title}</h5> {/* Assuming the title property exists in your movie objects */}
                 </div> 
                // Make sure to return JSX elements within the map function
        ))}
        </div>
        {console.log(movieid ?movieid:false,'')}
        {movieid ? <YouTube opts={opts} videoId={movieid} />:'' }  
    </div>

  )
}

export default RowPost
