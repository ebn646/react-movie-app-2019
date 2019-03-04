import React, {Component} from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Grid from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Styles from './moviebar.css'
import { fetchMovies } from '../../actions';

class MovieBar extends Component {
    getMovies(id){
        this.props.fetchMovies(id);
    }
    render(){
        return(
            <Row className="navbar-container">
                <Container>
                    <Row className="bar">
                        <Navbar>
                            <Navbar.Brand href="/">Home</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link href={`/movies/top_rated`}>Top Rated</Nav.Link>
                            <Nav.Link href={`/movies/now_playing`}>Now Playing</Nav.Link>
                            <Nav.Link href={`/movies/popular`}>Popular</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Row>
                </Container>
            </Row>
            
        )
    }
}

const mapDispatchToProps = {
    fetchMovies 
}

export default connect(null,mapDispatchToProps)(MovieBar)