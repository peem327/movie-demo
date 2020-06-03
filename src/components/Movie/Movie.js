import React, { Component } from 'react';
import {API_URL, API_KEY} from '../../constants/config';
import Navigation from '../elements/Navigation';
import MovieInfo from '../elements/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar';

import './Movie.css';

class Movie extends Component {
  state = {
    movie: null,
    directors: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=th`;
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      if (result.status_code) {
        this.setState({ loading: false });
      } else {
        this.setState({ movie: result }, () => {

          const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
          fetch(endpoint)
          .then(result => result.json())
          .then(result => {
            const directors = result.crew.filter( (member) => member.job === "Director");

            this.setState({
              directors,
              loading: false
            })
          })
        })
      }
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div className="rmdb-movie">
        {this.state.movie ?
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo movie={this.state.movie} directors={this.state.directors} />
            <MovieInfoBar time={this.state.movie.runtime}  />
          </div>
        : null }
      </div>
    )
  }
}

export default Movie;
