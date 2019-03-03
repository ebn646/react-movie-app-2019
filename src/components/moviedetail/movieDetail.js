import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from '../../actions';
import MovieModal from '../modal/movieModal'
import Grid from 'react-bootstrap/Container'

class MovieDetail extends Component{
    componentWillMount(){
        var id = this.props.match.params.id;
        this.props.getMovieDetails(id)
    }

    render(){
        console.log(this.props.movieDetails)
        return (
            <div>
                <Grid> 
                    I AM THE MOVIE DETAIL PAGE AND MY ID IS { this.props.movieDetails.original_title }
                </Grid>
                <MovieModal />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
 return{
     movieDetails: state.movieDetails
 }
}

const mapDispatchToProps = {
    getMovieDetails
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail)