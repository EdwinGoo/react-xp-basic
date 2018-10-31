import React, {Component} from 'react'
import './Pic.css'
import PropTypes from 'prop-types'

class Pic extends Component{
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired,
    }
    render() {
        return (
            <div className='Pic'>
                <PicPoster poster = {this.props.poster}/>
                <h2> {this.props.title} </h2>
            </div>
        )
    }
}

class PicPoster extends Component {
    static propTypes = {
        poster : PropTypes.string.isRequired
    }
    render() {
    //   console.log(this.props);
      return (
        <img src={this.props.poster}/>   
        )
    }
}
  

export default Pic

