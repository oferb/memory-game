import React, { Component } from 'react';
import './Board.css';
import Card from './Card';
import { IMAGE_NAMES } from './Card';

class Board extends Component {
    constructor(props) {
        super(props);
        let cards = [];
        IMAGE_NAMES.forEach((image) => {
            cards.push({
                image: image,
                show: true
            });
        });
        this.state = {
            cards: cards,
        };
    }

    onClick(i) {
        let cards = this.state.cards;
        cards[i].show = !cards[i].show;
        this.setState(() => ({
            cards: cards
          }));
    }

    render() {
        let cards = [];
        this.state.cards.forEach((card, i) => {
            cards.push(<Card
                show={card.show}
                clickHandler={() => this.onClick(i)}
                image={card.image}
                key={i}>
            </Card>)
        });
        return <div className="Board">{cards}</div>;
    }
}

export default Board;