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
  // componentWillMount(){
  //   console.log("component Will Mount");
  // }
  
  state = {}
  // componentDidMount(){
  //   setTimeout(()=> {
  //       this.setState({
  //         greeting : 'Hello'
  //       },)
  //     },1000)
  // }
 
  // fn = () => {
  //   this.setState({
  //     pics: [
  //       {
  //         title : "chang e",
  //         image : "https://fimg4.pann.com/new/download.jsp?FileID=47560779",
  //       },
  //       ...this.state.pics,
  //     ],
  //     greeting:'hello again!'
  //   })
  // }
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({
    //     pics : [
    //       {
    //         title : "chang e",
    //         image : "https://fimg4.pann.com/new/download.jsp?FileID=47560779",
    //       },
    //       {
    //         title : "LEE JI EUN",
    //         image : "https://www.billboard.com/files/styles/article_main_image/public/media/IU-Palatte-vid-2017-billboard-1548.jpg"
    //       },
    //       {
    //         title : "kang ZZANG",
    //         // title : false, // PropTypes.string 체크로 bool은 실패
    //         image : "http://www.topstarnews.net/news/photo/201808/463564_117316_5724.jpg"
    //       },
    //       {
    //         title : "sana",
    //         image : "https://www.twicenest.com/files/attach/images/223355/257/602/003/87d1f40b6bd10be3d2b99ea025bbb0ca.jpg"
    //       }
    //     ]
    //   })
    // }, 500)
    this._getMovies();
  }

  _callMovieAPI = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(res=>res.json())
    .then(json=> json.data.movies)
    .catch(err=>console.log(err))
  }

   _getMovies = async () => {
    const pics = await this._callMovieAPI() 
    this.setState({
      pics
    })
  }

  _renderimage = () => {
    const pictures = this.state.pics.map((pic) => {
    // const pictures = this.state.pics.map((pic, index) => {
      // return( <Picture key={index} title={pic.title} image={pic.large_cover_image}/>)
      return( <Picture key={pic.id} title={pic.title} image={pic.large_cover_image}/>)
    })
    console.log(pictures);
    
    return pictures
  }

  render() {
    return (
      <div className="App">
        {/* <Picture title = {picTitles[0]} img = {picImg[0]}/>
        <Picture title = {picTitles[1]} img = {picImg[1]}/>
        <Picture title = {picTitles[2]} img = {picImg[2]}/>
        <Picture title = {picTitles[3]} img = {picImg[3]}/> */}
        {this.state.pics ? this._renderimage():' Loading '} 
      </div>
    )
  }
}

export default App
