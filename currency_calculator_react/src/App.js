import './App.css';
import React from 'react';
import Currency_Calculator from './Currency_Calculator';

class App extends React.Component {
  render() { 
    return (
      <div className='App'> 
      <br/><br/><br/>
      <h1>WELCOME TO THE CURRENCY CALCULATOR</h1>
      <br/>
      <h2>Please enter a value to convert:</h2>
      <br/><br/><br/>
      <Currency_Calculator></Currency_Calculator>
      </div>
    );
  }
}

export default App;
