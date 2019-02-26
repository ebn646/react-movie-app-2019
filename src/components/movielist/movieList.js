import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../moviecard/movieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { fetchMovies } from '../../actions';

class MovieListComponent extends Component {
    componentWillMount(){
        this.props.fetchMovies('top_rated')
    }
    renderList(){
        return this.props.movies.map(movie => {
            return(
                <MovieCard key={movie.id} movie={movie} />
            )
        })
    }
    getMovies(id){
        this.props.fetchMovies(id);
    }
    render(){
        console.log('render was called!! ',this.props.movies)
        return(
            <Container>
                <Row>
                    <ButtonToolbar>
                        <Button variant="primary" onClick={() => this.getMovies('top_rated')}>Top Rated</Button>
                        <Button variant="primary" onClick={() => this.getMovies('now_playing')}>Now Playing</Button>
                        <Button variant="primary" onClick={() => this.getMovies('popular')}>Popular</Button>
                    </ButtonToolbar>;
                </Row>
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