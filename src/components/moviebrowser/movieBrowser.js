import React,{ Component } from 'react'
import Grid from 'react-bootstrap/Container'
import MovieListComponent from '../movielist/movieList'
import MovieModal from '../modal/movieModal'

class MovieBrowser extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <MovieListComponent />
                </Grid>
                <MovieModal />
            </div>
        )
    }
}

export default MovieBrowser