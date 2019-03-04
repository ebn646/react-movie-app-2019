import React,{ Component } from 'react'
import Grid from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

class MovieBrowser extends Component{
    render(){
        return(
            <div>
               <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x200"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x200"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x200"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            </div>
        )
    }
}

export default MovieBrowser