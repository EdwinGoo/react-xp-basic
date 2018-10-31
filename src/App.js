import React, { Component } from 'react';
import './App.css';
import Picture from './Picture'

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


export class App extends Component {
  componentWillMount(){
    console.log("component Will Mount");
    
  }
  
  state = {
    greeting : "hello",
    pics : [
      {
        title : "LEE JI EUN",
        image : "https://www.billboard.com/files/styles/article_main_image/public/media/IU-Palatte-vid-2017-billboard-1548.jpg"
      },
      {
        title : "The Wolf of wallstreet",
        // title : false, // PropTypes.string 체크로 bool은 실패
        image : "https://img.ilfoglio.it/resizer/-1/-1/true/redazione/articoli/old/21/2014/01/87577/wallstreet.jpg--.jpg"
      },
      {
        title : "baby driver",
        image : "http://www.extrafeatures.ca/wp-content/uploads/2017/10/Baby-Driver.jpg"
      }
    ]
  }
  // componentDidMount(){
  //   setTimeout(()=> {
  //       this.setState({
  //         greeting : 'Hello'
  //       },)
  //     },1000)
  // }
 
  fn = () => {
    this.setState({
      pics: [
        ...this.state.pics,{
          title : "baby driver",
          image : "http://www.extrafeatures.ca/wp-content/uploads/2017/10/Baby-Driver.jpg",
        }
      ],
      greeting:'hello again!'
    })
  }

  componentDidMount(){
    setTimeout(this.fn, 1000)
  }

  render() {
    return (
      <div className="App">
        {/* <Picture title = {picTitles[0]} img = {picImg[0]}/>
        <Picture title = {picTitles[1]} img = {picImg[1]}/>
        <Picture title = {picTitles[2]} img = {picImg[2]}/>
        <Picture title = {picTitles[3]} img = {picImg[3]}/> */}
        {this.state.greeting}
        {this.state.pics.map((pic, index) => {
          return( <Picture key={index} title={pic.title} image={pic.image}/>)
        })} 
      </div>
    )
  }
}

export default App
