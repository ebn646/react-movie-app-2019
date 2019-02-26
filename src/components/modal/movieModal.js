import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from './modal.css';
import MovieCard from '../moviecard/movieCard';

class MovieModal extends Component{
    constructor(props) {
        super(props);
    }

    renderList(){
        return this.props.movies.map(movie => {
            return(
                <MovieCard key={movie.id} movie={movie} />
            )
        })
    }
    
    render(){
        var isOpen = this.props.modal.isOpen ? 'open' : '';
    
        return (
            <div id="modal" className={ isOpen }>
                <div>
                    <div>MOVID ID = {this.props.modal.movieId}</div>                 
                    <div>
                        { this.renderList() }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        modal: state.modal,
        movies: state.movies
    }
}

export default connect(mapStateToProps,null)(MovieModal)