import React,{ Component } from 'react'
import Container from 'react-bootstrap/Container'
import MovieBar from '../moviebar/movieBar'
import MovieListComponent from '../movielist/movieList'
import MovieModal from '../modal/movieModal'

class MovieBrowser extends Component{
    render(){
        return(
            <div>
                <Container>
                    <MovieBar />
                    <MovieListComponent />
                </Container>
                <MovieModal />
            </div>
        )
    }
}

export default MovieBrowser