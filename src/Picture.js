import React, {Component} from 'react'
import './Picture.css'
import PropTypes from 'prop-types'

class Picture extends Component{
    static propTypes = {
        title : PropTypes.string.isRequired,
        image : PropTypes.string.isRequired,
    }
    render() {
        return (
            <div className='picture'>
                <PicturePoster images = {this.props.image}/>
                <h2> {this.props.title} </h2>
            </div>
        )
    }
}

class PicturePoster extends Component {
    render() {
    //   console.log(this.props);
      return (
        <img src={this.props.images} alt=""/>   
        )
    }
}
  
export default Picture

