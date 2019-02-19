import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../moviecard/movieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { fetchMovies } from '../../actions';

class MovieListComponent extends Component {
    componentWillMount(){
        this.props.fetchMovies();
    }
    renderList(){
        return this.props.movies.map(movie => {
            return(
                <MovieCard key={movie.id} movie={movie} />
            )
        })
    }

    render(){
        console.log(this.props.movies)
        return(
            <Container>
                <Row>
                 { this.renderList() }
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        movies: state.movies
    }
}

const mapDispatchToProps = {
    fetchMovies: fetchMovies 
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieListComponent);