import React, { Component } from 'react';
import './App.css';
import Pic from './Pic'

// const picTitles = [
//   "LEE JI EUN",
//   "The Wolf of wallstreet",
//   "baby driver",
// ]

// const picImg = [
//   "https://www.billboard.com/files/styles/article_main_image/public/media/IU-Palatte-vid-2017-billboard-1548.jpg",
//   "https://img.ilfoglio.it/resizer/-1/-1/true/redazione/articoli/old/21/2014/01/87577/wallstreet.jpg--.jpg",
//   "http://www.extrafeatures.ca/wp-content/uploads/2017/10/Baby-Driver.jpg",
// ]

const pics = [
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
  componentWillMount(){
    console.log("component Will Mount");
    
  }

  render() {
    return (
      <div className="App">
        {/* <Pic title = {picTitles[0]} img = {picImg[0]}/>
        <Pic title = {picTitles[1]} img = {picImg[1]}/>
        <Pic title = {picTitles[2]} img = {picImg[2]}/>
        <Pic title = {picTitles[3]} img = {picImg[3]}/> */}
        {pics.map((pic, index) => {
          return( <Pic key={index} title={pic.title} poster={pic.poster}/>)
        })} 
      </div>
    )
  }

  componentDidMount(){
    console.log("component Did Mount");
  }

}

export default App
