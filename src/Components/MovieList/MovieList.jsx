import MovieCard from "../MovieCard/MovieCard";


const MovieList = (props) => {


    return (
        <ul>
            {props.movies.map((movie) => {
                return (
                    <li>
                        <MovieCard name={movie.name} genre={movie.genre} director={movie.director} imageURL={movie.imageURL}/>
                    </li>
                );
            })}
        </ul>
    );
}

export default MovieList;