import React, { Component } from 'react';
import './Board.css';
import Card from './Card';
import { IMAGE_NAMES } from './Card';

const CARD_COUNT = 12;

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.getInitialCards()
        }
    }

    shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    getInitialCards() {
        let cards = [];
        let cardNames = this.shuffle(IMAGE_NAMES);
        cardNames = cardNames.slice(0, CARD_COUNT/2);
        cardNames = this.shuffle(cardNames.concat(cardNames));

        cardNames.forEach((image) => {
            cards.push({
                image: image,
                show: true
            });
        });
        return cards;
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