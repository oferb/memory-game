import React, { Component } from 'react';
import './Card.css';
import apple from '../assets/apple.png'
import beans from '../assets/beans.png'
import broccoli from '../assets/broccoli.png'
import cherry from '../assets/cherry.png'
import cob from '../assets/cob.png'
import lime from '../assets/lime.png'
import orange from '../assets/orange.png'
import pineapple from '../assets/pineapple.png'
import tangerine from '../assets/tangerine.png'
import watermelon from '../assets/watermelon.png'

const images = {
    apple: apple,
    beans: beans,
    broccoli: broccoli,
    cherry: cherry,
    cob: cob,
    lime: lime,
    orange: orange,
    pineapple: pineapple,
    tangerine: tangerine,
    watermelon: watermelon,
};

class Card extends Component {
  render() {
    const className = !!this.props.show ? "Card-image show" : "Card-image";
    return <div className="Card" onClick={this.props.clickHandler}>
        <img className={className} src={images[this.props.image]} alt="Pineapple"></img>
    </div>;
  }
}

export default Card;
export const IMAGE_NAMES = Object.keys(images);