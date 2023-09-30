import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { Link } from "react-router-dom";
import { addToFavorites } from "../Redux/action";
import { removeFavorite } from "../Redux/removeFavorite";
import { useState } from "react";

function Movie({ movie }) {
  // for the button 
  // console.log(movie);'
  const favmov = useSelector((state)=>state.favorites)
  const dispatch = useDispatch()
  const handleFavorite = (e)=>{
    const buttonElement = e.target;
    if (buttonElement.innerHTML === 'Delete')
    {
      dispatch(removeFavorite(movie))
      buttonElement.innerHTML = 'Like it'
      buttonElement.className='btn btn-dark'
      
    }
    else{
    dispatch(addToFavorites(movie))
      buttonElement.innerHTML = 'Delete'
      buttonElement.className='btn btn-danger'
    }
  }
  // console.log(favmov)
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="card-img-top custom-img"
        alt={movie.title}
      />
      <div className="card-body">
      <Link to={`/movie/${movie.id}`}>
  
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">Release Date: {movie.release_date}</p>
        <p className="card-text">Vote Average: {movie.vote_average}</p>
        </Link>
        <button className='btn btn-dark' onClick={handleFavorite}>Like it</button>
        {/* <p className="card-text">{movie.overview}</p> */}
      </div>
    </div>
  );
}

export default Movie;
