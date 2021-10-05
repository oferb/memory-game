import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guessCount: 0,
      elapsedSeconds: 0
    }
    this.board = React.createRef()
  }

  componentDidMount() {
    this.startTimer();  
  }

  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.updateTimer(), 1000);
  }

  onNewGame() {
    this.board.current.reset();
    this.startTimer();
  }

  onGuess(guessCount) {
    this.setState(() => ({
      guessCount: guessCount
    }));
    console.log(guessCount);
  }

  onGameReset() {
    this.setState(() => ({
      guessCount: 0,
      elapsedSeconds: 0
    }));
    this.startTimer();
  }

  onGameWon() {
    clearInterval(this.timer);
  }

  updateTimer() {
    this.setState((prevState) => ({
      elapsedSeconds: prevState.elapsedSeconds + 1
    }));
  }

  render() {
    return <div className='App'>
      <div className='App-header'>
        <div className='App-title'>Memory Game</div>
        <div className='App-menu'>
          <button onClick={() => this.onNewGame()}>New game</button>
          <div className='App-guesses'>Guesses:  {this.state.guessCount}</div>
          <div className='App-timer'>Time: {this.state.elapsedSeconds}</div>
        </div>
      </div>

      <Board
        onGuess={(count) => this.onGuess(count)}
        onGameReset={() => this.onGameReset()}
        onGameWon={() => this.onGameWon()}
        ref={this.board}></Board>
    </div>;
  }
}

export default App;
