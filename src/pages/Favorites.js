import { useSelector } from "react-redux";
import Movie from "../components/Movie";

function Favorites() {
  const favMovies = useSelector((state)=>state.favorites)
  // console.log(favMovies)

  return (
    <>
      <h1 className="text-danger">Favorite Page</h1>

      <div className="row">
        {favMovies.map((movie) => (
          <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Movie movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorites;
