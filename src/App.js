import React, { useEffect, useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import axios from 'axios';

function App() {

  const [movies, setMovies] = useState([]);

  async function getMovies(){
    let response = await axios.get('http://localhost:8080/movies')
    setMovies(response.data);
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <p>P1</p>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
