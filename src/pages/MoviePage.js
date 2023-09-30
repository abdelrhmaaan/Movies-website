import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import "../components/Movie.css";
import axios from "axios";

function MoviePage() {
  const id = useParams();
  console.log(id);
  const [movie, setMovies] = useState([]);

  const apikey = "6b3ddbbb250ae4d4df8d85abbd29add2";
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id.id}?api_key=${apikey}`)
      .then((res) => {
        setMovies(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(movies[id].id);

  // console.log(movie.id);

  return (
    <>
      <h5 className="text-danger">This is the Movie Page</h5>

      {movie && <Movie movie={movie} />}
    </>
  );
}

export default MoviePage;
