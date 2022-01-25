import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class App extends Component {

  state = {
    toggle: true
  } 
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
    
  }

    render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Welcome text="Welcome to React JS"></Welcome>Edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.toggle && 
        <p>This should show and Hide</p>
        } 
        <button onClick={this.toggle}>Show / Hide</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}


class Welcome extends Component {

  render() {
    const { text } = this.props;
    return (
      <h1 className='App-title'>{text}</h1>
    )
  }
}
export default App;
