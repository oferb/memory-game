import React, { Component } from 'react';
import './Card.css';
import pineapple from '../assets/pineapple.png'

class Card extends Component {
  render() {
    return <div className="Card"><img src={pineapple} alt="Pineapple"></img></div>
  }
}

export default Card;