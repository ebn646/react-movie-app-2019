import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as movieHelpers from '../helpers';
import { getCast } from "../../actions";

const TMDB_IMAGE_BASE_URL = () => `https://image.tmdb.org/t/p/w500`;

class Cast extends Component {
constructor(props) {
    super(props);
}
    
  getThumbnail(str){
    return{
        poster_path: `${TMDB_IMAGE_BASE_URL()}${str}`
    }
  }
  componentDidUpdate(nextProps) {
    if (nextProps.movieDetails.id != this.props.movieDetails.id && this.props.movieDetails.id != null)
    this.props.getCast(this.props.movieDetails.id);
  }
  renderList() {
    if(this.props.credits.cast)
    return this.props.credits.cast.map((character,index) => {
      if(index < 6)
      return (
        <Col xs="2" key={index}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={this.getThumbnail(character.profile_path).poster_path} />
            <Card.Body>
              <p>{character.character}</p>
              <p>{character.name}</p>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
  render() {

    return <Row>{this.renderList()}</Row>;
  }
}

const mapStateToProps = state => {
  return {
    credits: state.credits,
    movieDetails: state.movieDetails
  };
};
const mapDispatchToProps = {
  getCast
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cast);
