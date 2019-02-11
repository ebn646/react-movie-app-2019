import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container';
import MovieBar from '../moviebar/movieBar';
import MovieListComponent from '../movielist/movieList';

class MovieBrowser extends Component{
    render(){
        return(
            <Container>
                <MovieBar />
                <MovieListComponent />
            </Container>
        )
    }
}

export default MovieBrowser