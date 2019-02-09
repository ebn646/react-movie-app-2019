import React,{ Component } from 'react';
import MovieBar from '../moviebar/movieBar';
import MovieListComponent from '../movielist/movieList';

class MovieBrowser extends Component{
    render(){
        return(
            <div>
                <MovieBar />
                <MovieListComponent />
            </div>
        )
    }
}

export default MovieBrowser