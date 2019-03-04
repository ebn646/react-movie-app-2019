import React,{Component} from 'react';
import { connect } from 'react-redux';
import {openMovieModal,getMovieDetails } from '../../actions';
import { Card, CardTitle, CardMedia } from 'material-ui';
import Styles from './moviecard.css';
import { withRouter } from 'react-router-dom'
  
const TMDB_IMAGE_BASE_URL = () => `https://image.tmdb.org/t/p/w500`;

const styles = {
    cardMedia: {
      maxHeight: 394,
      overflow: 'hidden'
    },
    card: {
      cursor: 'pointer',
      height: 400,
      overflow: 'hidden'
    },
    bgImage: {
      width: '100%'
    }
  };

class MovieCard extends Component{
    getThumbnail(){
        return{
            poster_path: `${TMDB_IMAGE_BASE_URL()}${this.props.movie.poster_path}`
        }
    }

    showModal(){
        console.log(this.props.movie.id)
        this.props.history.push(`/movie/${this.props.movie.id}`)
    }

    render(){
        return (
            <Card
                style={styles.card}
                onClick= {() => this.showModal()}
            >
                <CardMedia 
                    style={styles.cardMedia}
                    overlay={
                        <CardTitle
                          title={this.props.movie.title} 
                        />
                    }
                >
                <img className="d-block img-fluid" src={ this.getThumbnail().poster_path }/>
                <CardTitle
                    title={this.props.movie.title} 
                    />
                </CardMedia>
          </Card>
        )
    }
}

const mapDisptachToProps = {
    openMovieModal,
    getMovieDetails
}

export default withRouter(connect(null, mapDisptachToProps)(MovieCard))