import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {

  constructor(props) {
    super(props)

    this.board = React.createRef()
  }

  onNewGame() {
    this.board.current.reset();
  }

  render() {
    return <div className='App'>
      <div className='App-header'>
        <div className='App-title'>Memory Game</div>
        <button onClick={() => this.onNewGame()}>New game</button>
      </div>
      
      <Board ref={this.board}></Board>
    </div>;
  }
}

export default App;
