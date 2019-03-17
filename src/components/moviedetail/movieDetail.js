import React,{Component} from 'react'
import { connect } from 'react-redux'
import { getMovieDetails } from '../../actions'
import { getVideos } from '../../actions'
//import MovieModal from '../modal/movieModal'
import { Card } from 'react-bootstrap'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ModalVideo from 'react-modal-video'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Styles from './moviedetail.css'
import ModalStyles from './modal-video.min.css'
const TMDB_IMAGE_BASE_URL = () => `https://image.tmdb.org/t/p/w300`

const styles = {
    dialogContent: (backgroundUrl) => ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/w1400_and_h450_face/${backgroundUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100%',
      minHeight: 400,
      color: 'white',
      padding: 10
    })
  }
  
class MovieDetail extends Component{
    constructor(props) {
        super(props);
        // Track if the mouse hovering over the movie card
        this.state = {
          isMouseOver: false,
          isOpen: false,
          videoId:'L61p2uyiMSo'
        }
        this.openModal = this.openModal.bind(this)
    }
    componentWillMount(){
        var id = this.props.match.params.id;
        this.props.getMovieDetails(id)
        this.props.getVideos(id)
    }

    getThumbnail(){
        return{
            poster_path: `${TMDB_IMAGE_BASE_URL()}${this.props.movieDetails.poster_path}`
        }
    }

    getBgImage(){
        return{
            backdrop_path: `${TMDB_IMAGE_BASE_URL()}${this.props.movieDetails.backdrop_path}`
        }
    }

    openModal () {
        this.setState({videoId: this.props.videos[0].key})
        this.setState({isOpen: true})
    }    

    render(){
        const videos = this.props.videos; 
        return (
        <div className="details">
            <Row style={styles.dialogContent(this.props.movieDetails.backdrop_path)}>
                <Container>
                    <Row>
                        <Col xs="4" className="modalImage"
                        onMouseOver={() => this.setState({isMouseOver: true})}
                        onMouseLeave={() => this.setState({isMouseOver: false})}>
                            <img className="d-block img-fluid" src={ this.getThumbnail().poster_path }/>
                            <div className={ this.state.isMouseOver.toString() +' olay'}><p>Expand</p></div>
                        </Col>
                        <Col xs="8">
                        <Row>
                            <Col xs="12"><h2>{ this.props.movieDetails.title }</h2></Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                            User score: 
                                <CircularProgressbar
                                    percentage={this.props.movieDetails.vote_average*10}
                                    text={`${this.props.movieDetails.vote_average*10}%`}
                                />
                            </Col>
                        </Row>
                        <Row>
                            {videos.length > 0 &&
                            <Col xs="12">
                                <Button 
                                    onClick= {() => this.openModal()}
                                    variant="secondary">Play Trailer
                                </Button>
                            </Col>
                            }
                        </Row>
                        <Row>
                            <Col xs="12">
                            <p>Overview</p>
                            <p>{ this.props.movieDetails.overview }</p>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
            </Row>

            <Row className="navbar-container">
                <Container>
                    <Navbar>
                        <Nav className="mr-auto">
                            <Nav.Link href="javascript:void(0)">Reviews</Nav.Link>
                            <Nav.Link href="javascript:void(0)">Videos</Nav.Link>
                            <Nav.Link href="javascript:void(0)">Images</Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </Row>

            <Row>
                <Container className="mt-3">
                <Row>
                <h3>Top Billed Cast</h3>
                </Row>
                    <Row>
                        <Col xs="12">
                            <Row>
                                <Col xs="2">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src="https://via.placeholder.com/138x175" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs="2">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src="https://via.placeholder.com/138x175" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs="2">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src="https://via.placeholder.com/138x175" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs="2">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src="https://via.placeholder.com/138x175" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs="2">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src="https://via.placeholder.com/138x175" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs="2">
                                    <p>Facts</p>
                                    <p>
                                        <span>Status</span>
                                        <span>Released</span>
                                    </p>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
                </Container>
            </Row>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
 return{
     movieDetails: state.movieDetails,
     videos: state.videos
 }
}

const mapDispatchToProps = {
    getMovieDetails,
    getVideos
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail)