// import React, {Component} from 'react'
import React from 'react'
import './Picture.css'
import PropTypes from 'prop-types'

// class Picture extends Component{
//     static propTypes = {
//         title : PropTypes.string.isRequired,
//         image : PropTypes.string.isRequired,
//     }
//     render() {
//         return (
//             <div className='picture'>
//                 <PictureImage images = {this.props.image}/>
//                 <h2> {this.props.title} </h2>
//             </div>
//         )
//     }
// }

Picture.propTypes = {
    title : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
}

function Picture ({title, image}) {
    return (
        <div className='picture'>
            <PictureImage images = {image}/>
            <h2> {title} </h2>
        </div>
    )
}

// class PictureImage extends Component {
//     render() {
//     //   console.log(this.props);
//       return (
//         <img src={this.props.images} alt=""/>   
//         )
//     }
// }

PictureImage.propTypes = {
    images : PropTypes.string.isRequired
}
  
function PictureImage({images}){
    return (
        <img src={images} alt="yeah"/>   
    )
}

export default Picture
