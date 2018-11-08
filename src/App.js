import React, { Component } from 'react';
import PanelList from './components/PanelList/PanelList.js';
import './App.css';

class App extends Component {

  //ゲームをリスタートする関数
  startGame = () =>{
    this.setState({isPlaying:true});
  }

  render() {
    return (
      <div className="App">
        <header className="header">
        {/* isPlayingの状態によって表示する文言を変える*/}
        {this.state.isPlaying ?
          <h1>ALL BLACKS</h1> : <h1>Game Clear!!</h1>
        }
        <button onClick={() =>this.startGame()}>開始</button>
        </header>
        {/* endGameをpropsとして渡す*/}
        <PanelList
          endGame={this.endGame}
          isPlaying={this.state.isPlaying}/>
        </div>
    );
  }

  //ゲーム状況を関する関数
  constructor(props) {
    super(props);
    this.state = { isPlaying: true }
  }

  //endGameとなった場合ゲームクリア
  endGame = () => {
    this.setState({ isPlaying: false });
  }
}

export default App;
