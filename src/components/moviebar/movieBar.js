import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Styles from './moviebar.css';

class MovieBar extends Component {
    render(){
        return(
            <Container >
                <Row className="bar">
                    <p className="pl-3">This is the moviebar</p>
                </Row>
            </Container>
        )
    }
}

export default MovieBar