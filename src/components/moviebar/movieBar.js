import React, {Component} from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Grid from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Styles from './moviebar.css'
import { fetchMovies } from '../../actions';

class MovieBar extends Component {
    getMovies(id){
        this.props.fetchMovies(id);
    }
    render(){
        return(
            <Container >
                <Row className="bar">
                    <ButtonToolbar>
                        <Link to={`/movies/top_rated`}>Top Rated</Link>
                        <Link to={`/movies/now_playing`}>Now Playing</Link>
                        <Link to={`/movies/popular`}>Popular</Link>
                    </ButtonToolbar>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = {
    fetchMovies 
}

export default connect(null,mapDispatchToProps)(MovieBar)