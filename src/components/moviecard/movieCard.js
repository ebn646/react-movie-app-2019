import React,{Component} from 'react';
import { connect } from 'react-redux';
import {openMovieModal } from '../../actions';
import Col from 'react-bootstrap/Col';
import Styles from './moviecard.css';

const TMDB_IMAGE_BASE_URL = () => `https://image.tmdb.org/t/p/w300`;

class MovieCard extends Component{
    constructor(props) {
        super(props);
    }

    getThumbnail(){
        return{
            poster_path: `${TMDB_IMAGE_BASE_URL()}${this.props.movie.poster_path}`
        }
    }

    showModal(){
        console.log(this.props.movie.id)
        this.props.openMovieModal(this.props.movie.id)
    }

    render(){
        return (
            <Col md={2} 
                className="b1 flex-column movie-card"
                onClick={() => this.showModal()}>
                <img className="d-block img-fluid" src={ this.getThumbnail().poster_path }/>
                {this.props.movie.title}
            </Col>
        )
    }
}

export default connect(null, { openMovieModal })(MovieCard)