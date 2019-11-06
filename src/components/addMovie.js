import React, { Component } from 'react';


class AddMovie extends Component {
    addNewMovie(e) {
        e.preventDefault();
        var movie =  {
            title: this.title.value,
            year: this.year.value,
            description: this.description.value,
            poster: this.poster.value
        };
        this.props.AddMovie(movie);
        console.log(movie);
    }
    
    render() {
        return(
            <form className="movie-form" onSubmit={(e) => this.addNewMovie(e)}>
                <p>Inserisci un Film</p>
                <input ref={ (input) => this.title = input } type="text" placeholder="Title" />
                <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" />
                <input ref={ ( input ) => this.poster = input } placeholder="Poster" />
                <textarea ref= { ( input ) => this.description = input } placeholder="Description" />
                <button type="submit">Inserisci Film</button>
            </form>
        );
    }
};

export default AddMovie;