import React, { Component } from 'react';
import MovieCard from './movieCard';

class MovieListComponent extends Component {
    render(){
        return(
            <div className="container">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        )
    }
}

export default MovieListComponent