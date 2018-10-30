import React, {Component} from 'react'
import './Movie.css'

class Movie extends Component{
    render() {
        return (
            <div className='movie'>
                <MoviePoster/>
                <h1>The Wolf of wallstreet</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
      return (
        <img src = 'https://img.ilfoglio.it/resizer/-1/-1/true/redazione/articoli/old/21/2014/01/87577/wallstreet.jpg--.jpg'/>
      )
    }
  }
  

export default Movie