import React, { useEffect, useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import axios from 'axios';
import TopBar from './Components/TopBar/TopBar';

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
      <TopBar />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
