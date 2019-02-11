import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Styles from './moviecard.css';

class MovieCard extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render(){
        return (
            <Col md={2} className="b1 flex-column">
                <img className="d-block img-fluid" src="https://via.placeholder.com/500x400"/>
                {this.props.movie.title}
            </Col>
        )
    }
}

export default MovieCard