import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';
import Styles from './modal.css';
import Card from 'react-bootstrap/Card';
import { getMovieDetails,closeMovieModal } from '../../actions';

const TMDB_IMAGE_BASE_URL = () => `https://image.tmdb.org/t/p/w300`;

class MovieModal extends Component{
    componentDidMount(){
        console.log('props = ',this.props.modal)
    }

    componentDidUpdate(){
        //this.props.getMovieDetails(this.props.modal.movieId)
        console.log('movie detail = ',this.props)
    }

    getImage(){
        return{
            poster_path: `${TMDB_IMAGE_BASE_URL()}${this.props.movieDetails.backdrop_path}`
        }
    }
    
    render(){    
        return (
            <Dialog
                open={this.props.modal.isOpen}
                modal={false}
                onRequestClose={ this.props.closeMovieModal}
            >
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={ this.getImage().poster_path } />
                    <Card.Body>
                        <Card.Title>{this.props.movieDetails.title}</Card.Title>
                        <Card.Text>
                        {this.props.movieDetails.overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Dialog>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        modal: state.modal,
        movies: state.movies,
        movieDetails: state.movieDetails
    }
}

const mapDispatchToProps = {
    getMovieDetails,
    closeMovieModal
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieModal)