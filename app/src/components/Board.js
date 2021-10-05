import React, { Component } from 'react';
import './Board.css';
import Card from './Card';
import {IMAGE_NAMES} from './Card';

class Board extends Component {
  render() {
    let cards=[];
    IMAGE_NAMES.forEach((image, i)=>{
      cards.push(<Card show image={image} key={i}></Card>)
    })

    return <div className="Board">{cards}</div>;
  }
}

export default Board;