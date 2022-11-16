import MovieCard from "../MovieCard/MovieCard";
import "../MovieList/MovieList.css"

const MovieList = (props) => {


    return (
        <ul className="cards-ordered">
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