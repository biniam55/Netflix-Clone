import React,{useState,useEffect} from 'react'
import axios from './axios'
import "./Row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
const baseURL =  "https://image.tmdb.org/t/p/original/"
function Row({Title,fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          // console.log(request)
          setMovies(request.data.results);
          // console.log(request.data.results)
          return request;
        }
        fetchData();
      }, [fetchUrl]);
      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        }
      }
      // console.log(movies)
      const handleClick = (movie) => {
        if(trailerUrl){
          setTrailerUrl('')
        }else {
          movieTrailer(movie?.title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'))
          })
          .catch((error) => console.log(error))
        }
      }
  return (
    <div className='row'>
      <div><h2>{Title}</h2></div>
      <div className="row__posters">
      {movies.map((movie) => (
        <img
          onClick={() => handleClick(movie)}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${baseURL}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
        ))}
      </div>
      <div style={{ padding: "40px"}}>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}

export default Row