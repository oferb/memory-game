import React, { Component } from 'react';
import './Card.css';
import pineapple from '../assets/pineapple.png'

class Card extends Component {
  render() {
    const className = !!this.props.show ? "Card-image show" : "Card-image";
    return <div className="Card"><img className={className} src={pineapple} alt="Pineapple"></img></div>;
  }
}

export default Card;