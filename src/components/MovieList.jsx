import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../Features/Movies/MovieSlice";

const MovieList = () => {
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch()

    const removeMovieHandler = (id) => {
       dispatch(removeMovie(id))
   }
 
    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.name}{" "}
                        <span
                            style={{
                                fontWeight: "bold",
                                borderRadius: "30%",
                                background: "red",
                                padding: "5px",
                                cursor: "pointer",
                            }}
                            onClick={() => removeMovieHandler(movie.id)}
                        >
                            X
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
