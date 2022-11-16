import Card from 'react-bootstrap/Card';

const MovieCard = (props) => {
    return ( 

        <Card>
            <Card.Img variant='top' src={props.imageURL}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>Directed by {props.director}</Card.Subtitle>
            </Card.Body>
        </Card>

    );
}

export default MovieCard;