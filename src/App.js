import React, { Component } from 'react'
import './App.css'
import MovieList from './components/movielist/movieList'
import MovieDetail from './components/moviedetail/movieDetail'
import MovieBar from './components/moviebar/movieBar'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
         <MovieBar />
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/:id" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetail} />
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
