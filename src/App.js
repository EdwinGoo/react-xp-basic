import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

// const movieTitles = [
//   "LEE JI EUN",
//   "The Wolf of wallstreet",
//   "baby driver",
// ]

// const movieImg = [
//   "https://www.billboard.com/files/styles/article_main_image/public/media/IU-Palatte-vid-2017-billboard-1548.jpg",
//   "https://img.ilfoglio.it/resizer/-1/-1/true/redazione/articoli/old/21/2014/01/87577/wallstreet.jpg--.jpg",
//   "http://www.extrafeatures.ca/wp-content/uploads/2017/10/Baby-Driver.jpg",
// ]

const movies = [
  {
    title : "LEE JI EUN",
    poster : "https://www.billboard.com/files/styles/article_main_image/public/media/IU-Palatte-vid-2017-billboard-1548.jpg"
  },
  {
    title : "The Wolf of wallstreet",
    // title : false, // PropTypes.string 체크로 bool은 실패
    poster : "https://img.ilfoglio.it/resizer/-1/-1/true/redazione/articoli/old/21/2014/01/87577/wallstreet.jpg--.jpg"
  },
  {
    title : "baby driver",
    poster : "http://www.extrafeatures.ca/wp-content/uploads/2017/10/Baby-Driver.jpg"
  }
]
export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Movie title = {movieTitles[0]} img = {movieImg[0]}/>
        <Movie title = {movieTitles[1]} img = {movieImg[1]}/>
        <Movie title = {movieTitles[2]} img = {movieImg[2]}/>
        <Movie title = {movieTitles[3]} img = {movieImg[3]}/> */}
        {movies.map((movie, index) => {
          return( <Movie key={index} title={movie.title} poster={movie.poster}/>)
        })} 
      </div>
    )
  }
}

export default App
