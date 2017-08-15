import React, { Component } from 'react';
import fetch from 'node-fetch';

class Main extends Component {
    constructor() {
      super();
      this.onChose = this.onChose.bind(this);
      this.getStats = this.getStats.bind(this);
      this.state = {
        leaderboard: []
      };
    }

    onChose(e) {
      fetch('https://bqg54h778e.execute-api.eu-central-1.amazonaws.com/prod/master/'+ this.props.name + '?action=' + e.target.textContent,{method: 'POST'})
        .then((res) => {
          return res.json();
        }).then((json) => {
          console.log(json);
        });
    }

    getStats() {
      fetch('https://bqg54h778e.execute-api.eu-central-1.amazonaws.com/prod/master/leaderboard',{method: 'GET'})
        .then((res) => {
          return res.json();
        }).then((json) => {
          this.setState({leaderboard: json.leaderboard});
        });
    }

    render() {
      var leaderboardArr = []
      for (var i = 0; i < this.state.leaderboard.length; i++) {
        const leader = this.state.leaderboard[i];
        const style = leader.player === this.props.name ?
          {color: 'red'} : {};
        leaderboardArr.push(
         <div key={leader.player} style={style}>
             {leader.player}:{leader.kills}:{leader.rounds}
         </div>
       )
     }
     return (
          <div>
            <h1>Hi {this.props.name}!</h1>
            <button onClick={this.onChose}>Scissors</button>
            <button onClick={this.onChose}>Rock</button>
            <button onClick={this.onChose}>Paper</button>
            <button onClick={this.getStats}>get stats</button>
            <div>
            {leaderboardArr}
            </div>
         </div>)
    }
}

export default Main
