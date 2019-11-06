import React from 'react';
import {Component} from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movie';
import {additionalMovies} from '../movie';
import AddMovie from './addMovie';


class App extends Component {
  constructor() {
    super();

    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
    this.addMovieToGallery = this.addMovieToGallery.bind(this);

  this.state = {
    movies: initialMovies
    };
  }

  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );

    this.setState({ movies: newMovies });
  }

  addMovieToGallery( movie ) {
    var ts = Date.now();
    var newMovie = {};
    newMovie[ 'movie' + ts ] = movie;
    var currentMovies = {...this.state.movies};
    var newMovies = Object.assign( currentMovies, newMovie );
    this.setState({ movies: newMovies });
    console.log( 'ciao bambina', movie );
  }

  render() {
  return (
    <div className="App">
        <Header text="Egle's Movie Mojo App!" />
        <div className="movies">
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={this.state.movies[key]} />)
          } 
        </div>
        <div className="add-movies">
          <button onClick={this.loadAdditionalMovies}>Carica...</button>
        </div>
        <div className="movie-form">
          <AddMovie AddMovie={this.addMovieToGallery} />
        </div>
    </div>
  );
}
}

export default App;
