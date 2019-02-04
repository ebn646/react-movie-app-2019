import React,{ Component } from 'react';
import MovieBar from './movieBar';
import MovieListComponent from './movieList';

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