import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class App extends Component {


  state = {
    input: 'Hello'
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submit = () => {
    console.log(this.text.value)
    }
    
  

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Welcome text="Welcome to React JS"></Welcome>
        </p>
        <input type="text" onChang={this.updateInput} value={this.state.input}/>
        <input type="text" ref={(input) => this.text = input} />
       
        <button onClick={this.submit}>Show Value</button>
       
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
