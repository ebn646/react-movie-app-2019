import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Styles from './moviecard.css';

const TMDB_IMAGE_BASE_URL = () => `https://image.tmdb.org/t/p/w300`;

class MovieCard extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    getThumbnail(){
        return{
            poster_path: `${TMDB_IMAGE_BASE_URL()}${this.props.movie.poster_path}`
        }
    }

    render(){
        return (
            <Col md={2} className="b1 flex-column">
                <img className="d-block img-fluid" src={ this.getThumbnail().poster_path }/>
                {this.props.movie.title}
            </Col>
        )
    }
}

export default MovieCard