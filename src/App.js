import React, { Component } from 'react'
import './App.css'
import MovieBrowser from './components/moviebrowser/movieBrowser'
import MovieList from './components/movielist/movieList'
import MovieDetail from './components/moviedetail/movieDetail'
import MovieBar from './components/moviebar/movieBar'
import SearchBar from './components/searchbar/searchbar'

import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
         <MovieBar />
         <SearchBar />
          <Route path="/" exact component={MovieBrowser} />
          <Route path="/movies/:id" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetail} />
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
