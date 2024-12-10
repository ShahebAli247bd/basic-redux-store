import { useSelector, useDispatch } from 'react-redux'
import { addMovie } from '../Features/Movies/MovieSlice';
import { useState } from 'react';

const MovieInput = () => {
  const [input, setInput] = useState();
  const movies = useSelector(state => state.movies.movies)
  console.log(movies)
  const dispatch = useDispatch()
  const onClickHandler = () => {

    dispatch(addMovie(input));
    setInput("");
  }
  return (
      <div>
          <input onChange={(e) => setInput(e.target.value)} />
          <button onClick={() => onClickHandler()}>Add Movie</button>
      </div>
  );
}

export default MovieInput
