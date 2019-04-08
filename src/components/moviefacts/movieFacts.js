import React, { Component } from "react";
import { Col } from "react-bootstrap";

class MovieFacts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col xs="2">
        <p>Facts</p>
        <p>
          <span>Status</span>
          <span>{this.props.status}</span>
        </p>
        <div>
          <p>Release Information</p>
        </div>
        <div>
          <p>Original Language</p>
          <p>English</p>
        </div>
        <div>
          <p>Runtime</p>
          <p>{this.props.runtime}</p>
        </div>
        <div>
          <p>Budget</p>
          <p>{this.props.budget}</p>
        </div>
        <div>
          <p>Revenue</p>
          <p>{this.props.revenue}</p>
        </div>
        <div>
          <p>Genres</p>
        </div>
      </Col>
    );
  }
}
export default MovieFacts;
