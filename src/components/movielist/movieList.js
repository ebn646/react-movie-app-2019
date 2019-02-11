import React, { Component } from 'react';
import { connect } from 'react-redux';import MovieCard from '../moviecard/movieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class MovieListComponent extends Component {
    renderList(){
        return this.props.movies.map((movie) => {
            return(
                <MovieCard key={movie.title} movie={movie} />
            )
        })
    }

    render(){
        return(
            <Container>
                <Row>
                   { this.renderList() }
                </Row>
            </Container>
        )
    }
}

// show the state (data) from our store 
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps)(MovieListComponent);