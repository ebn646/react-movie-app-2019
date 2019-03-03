import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../moviecard/movieCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Grid from 'react-bootstrap/Container'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { fetchMovies } from '../../actions';

const styles = {
    movieColumn: {
      marginBottom: 20
    }
}

class MovieList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        var id = this.props.match.params.id || 'now_playing';
        this.props.fetchMovies(id)
    }
    componentDidUpdate (prevProps) {
        //let { match: { id } } = this.props
        if (prevProps.match.params.id === this.props.match.params.id) {
            return;
        }else{
            this.getMovies(this.props.match.params.id)
        }
      }
    
    renderList(){
        return this.props.movies.map(movie => {
            return(
                <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
                    <MovieCard movie={movie} />
                </Col>
            )
        })
    }
    getMovies(id){
        this.props.fetchMovies(id);
    }
    render(){
        return(
            <Grid>
                <Row>
                    { this.renderList() }
                </Row>
            </Grid>
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

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);