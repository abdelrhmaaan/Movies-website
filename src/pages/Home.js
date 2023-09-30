import { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
import Movie from "../components/Movie";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import MoviePage from "./MoviePage";

function Home() {
  const [movies, setMovies] = useState([]);
  const lang = useSelector((state)=>state.lang)
  console.log(lang)
  const apikey = "6b3ddbbb250ae4d4df8d85abbd29add2";
  useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=${lang}`)
    .then((res) => {
      setMovies(res.data.results);
    })
    .catch((err) => {
      // console.log(err);
    });
  }, [lang]);
  //   console.log(movies[0]);
  return (
    <>
      <h1 className="text-danger">Hello from the Home Page</h1>

      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Movie movie={movie} />
          </div>
        ))}
      </div>
      {/* {movies && <MoviePage movies={movies} />} */}
    </>
  );
}

export default Home;
