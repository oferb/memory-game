import React, { Component } from 'react';
import './Board.css';
import Card from './Card';
import { IMAGE_NAMES } from './Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CARD_COUNT = 12;

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.getInitialCards(),
            showWinModal: false
        }
        this.shown = [];
        this.disabled = false;
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
        cardNames = cardNames.slice(0, CARD_COUNT / 2);
        cardNames = this.shuffle(cardNames.concat(cardNames));

        cardNames.forEach((image) => {
            cards.push({
                image: image,
                show: false
            });
        });
        return cards;
    }

    onClick(selected) {
        if (this.disabled) {
            return;
        }

        let cards = this.state.cards;
        if (cards[selected].show) {
            return;
        }
        if (this.shown.length) {
            this.startTimer();
            this.disabled = true;
        }
        cards[selected].show = !cards[selected].show;
        this.shown.push(selected);

        this.setState(() => ({
            cards: cards
        }));
        if (this.isGameDone()) {
            this.showWinModal(true);
        }
    }

    startTimer() {
        this.timer = setInterval(() => this.clearShownCards(), 1000);
    }

    isCardsEqual() {
        if (this.shown.length < 2) {
            return false;
        }
        const card1Image = this.state.cards[this.shown[0]].image;
        const card12mage = this.state.cards[this.shown[1]].image;
        return card1Image === card12mage;
    }

    clearShownCards() {
        let cards = this.state.cards;
        if (!this.isCardsEqual()) {
            this.shown.forEach((i) => cards[i].show = false);
        }
        this.shown = [];
        this.setState(() => ({
            cards: cards
        }));
        clearInterval(this.timer);
        this.disabled = false;
    }

    isGameDone() {
        return this.state.cards.every(card => card.show)
    }

    showWinModal(value) {
        this.setState(() => ({
            showWinModal: value
        }));
    }

    handleWinWindowClose() {
        this.showWinModal(false);
        this.reset();
    }

    reset() {
        this.setState(() => ({
            cards: this.getInitialCards()
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
        return <div className="Board-container">

            <div className="Board">{cards}</div>

            <Modal show={this.state.showWinModal} onHide={() => this.handleWinWindowClose()} centered>
                <Modal.Header closeButton>
                    <Modal.Title>You won!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Congratulations! You did a great job! 🎉</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.handleWinWindowClose()}>
                        New game
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>;
    }
}

export default Board;