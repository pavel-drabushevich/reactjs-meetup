import React, { Component } from 'react';
import Main from './Main';

class App extends Component {
    constructor() {
      super();
      this.onLogin = this.onLogin.bind(this);
      this.onUsernamaChange = this.onUsernamaChange.bind(this);
      this.renderLogin = this.renderLogin.bind(this);
      this.state = {
        username: null,
        isLogin: false
      };
    }

    onUsernamaChange(e) {
      this.setState({username: e.target.value});
    }

    onLogin() {
      this.setState({isLogin: true});
    }

    renderLogin() {
      return (
        <div>
          <input type="text" onChange={this.onUsernamaChange}/>
          <button onClick={this.onLogin}>Login</button>
       </div>);
    }

    render() {
        if (this.state.isLogin) {
          return (<Main name={this.state.username}/>);
        }
        return this.renderLogin();
    }
}

export default App
