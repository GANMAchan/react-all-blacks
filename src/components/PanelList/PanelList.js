import React, { Component } from 'react';
import Panel from '../Panel/Panel.js';

class PanelList extends Component{

  //propsとして外部に色の情報を渡す関数
  constructor(props){
    super(props);
    //色の状態を保持する変数
    this.state = {panelColors:this.initializePanelColors()}
  }

  //Panelの色を初期化する関数
  initializePanelColors(){
    //Panelの色の状態を保持する空の配列を用意
    var panelColors = []
    //全てのPanelに同じ処理をする
    for(var i=0;i<9;i++){
      //0.0~0.9までのランダムな数字を渡し、0.5なら以上trueを返す
      var isBlack = Math.random() >=0.5;
      panelColors.push(isBlack);
    }
    return panelColors;
  }

  //各PanelにpropsとしてisBlackの値を渡す
  renderPanel(i){
    return <Panel isBlack={this.state.panelColors[i]} />;
  }

  //3*3のパネルリスト作成
  render(){
    return (
      <div className="panel-list">
        <div>
          {this.renderPanel(0)}
          {this.renderPanel(1)}
          {this.renderPanel(2)}
        </div>
        <div>
          {this.renderPanel(3)}
          {this.renderPanel(4)}
          {this.renderPanel(5)}
        </div>
        <div>
          {this.renderPanel(6)}
          {this.renderPanel(7)}
          {this.renderPanel(8)}
        </div>
      </div>
    );
  }

  //Panelの色を反転させる関数
  handleClick = (i) => {
    //state:isPlayingのとき(ゲームプレイ中)のみ実行
    if(this.props.isPlaying){
      //新しく配列を作り、その中に更新後のpanelColorsを入れる
      const panelColors = this.state.panelColors.slice();
      // //panelColorsを現在と違う値にする
      // panelColors[i] = !this.state.panelColors[i];
      if(i==0){
        panelColors[0] = !this.state.panelColors[0];
        panelColors[1] = !this.state.panelColors[1];
        panelColors[3] = !this.state.panelColors[3];
      }else if(i==1){
        panelColors[0] = !this.state.panelColors[0];
        panelColors[1] = !this.state.panelColors[1];
        panelColors[2] = !this.state.panelColors[2];
        panelColors[4] = !this.state.panelColors[4];
      }else if(i==2){
        panelColors[1] = !this.state.panelColors[1];
        panelColors[2] = !this.state.panelColors[2];
        panelColors[5] = !this.state.panelColors[5];
      }else if(i==3){
        panelColors[0] = !this.state.panelColors[0];
        panelColors[3] = !this.state.panelColors[3];
        panelColors[4] = !this.state.panelColors[4];
        panelColors[6] = !this.state.panelColors[6];
      }else if(i==4){
        panelColors[1] = !this.state.panelColors[1];
        panelColors[3] = !this.state.panelColors[3];
        panelColors[4] = !this.state.panelColors[4];
        panelColors[5] = !this.state.panelColors[5];
        panelColors[7] = !this.state.panelColors[7];
      }else if(i==5){
        panelColors[2] = !this.state.panelColors[2];
        panelColors[4] = !this.state.panelColors[4];
        panelColors[5] = !this.state.panelColors[5];
        panelColors[8] = !this.state.panelColors[8];
      }else if(i==6){
        panelColors[3] = !this.state.panelColors[3];
        panelColors[6] = !this.state.panelColors[6];
        panelColors[7] = !this.state.panelColors[7];
      }else if(i==7){
        panelColors[4] = !this.state.panelColors[4];
        panelColors[6] = !this.state.panelColors[6];
        panelColors[7] = !this.state.panelColors[7];
        panelColors[8] = !this.state.panelColors[8];
      }else if(i==8){
        panelColors[5] = !this.state.panelColors[5];
        panelColors[7] = !this.state.panelColors[7];
        panelColors[8] = !this.state.panelColors[8];
      }else{
        return;
      }
      this.setState({panelColors:panelColors});
      //全てのPalelが黒ならendGameを渡す(ゲーム終了)
      if(this.isALLBlack(panelColors)){
        this.props.endGame();
      }
    }
  }

  //handleClickで更新されたisBlackをPanelにpropsとして渡す関数
  renderPanel(i){
    return <Panel
    isBlack={this.state.panelColors[i]}
    handleClick={() => this.handleClick(i)} />;
  }

  //panelColors の全ての要素がtrueであれば、trueを返す関数
  isALLBlack = (panelColors) => {
    return panelColors.every(isBlack => isBlack);
  }

  // props.isPlaying = ture のときに panelColor を初期化
  // 引数で渡された nextProps に変更後の値が入っている
  componentWillReceiveProps(nextProps){
    if(nextProps.isPlaying){
      this.setState({panelColors:this.initializePanelColors() });
    }
  }
}

export default PanelList;
