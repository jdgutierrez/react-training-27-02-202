import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer, { ExtraFooter } from './footer';
import ExtraContent from './extraContent';
import Content from './content';

function App() {
  const [name, setName] = useState(undefined);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input name='name' value="hi" onChange={(evt) => setName(evt.currentTarget.value)} />
        <div>
          {name}
        </div>
      </header>
    </div>
  );
}

export default App;
