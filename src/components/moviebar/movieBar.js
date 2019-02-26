import React, {Component} from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Styles from './moviebar.css'

class MovieBar extends Component {
    getMovies(id){
        this.props.fetchMovies(id);
    }
    render(){
        return(
            <Container >
                <Row className="bar">
                    <ButtonToolbar>
                        <Button variant="primary" onClick={() => this.getMovies('top_rated')}>Top Rated</Button>
                        <Button variant="primary" onClick={() => this.getMovies('now_playing')}>Now Playing</Button>
                        <Button variant="primary" onClick={() => this.getMovies('popular')}>Popular</Button>
                    </ButtonToolbar>;
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieCategory: state.movieCategory
    }
}

export default connect()(MovieBar)