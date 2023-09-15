
import './App.css';
import React from 'react'
import Counter from './features/counter/Counter';
import Coin from './features/counter/coin/Coin';
import Theme from './features/theme/Theme';
import {   useSelector } from "react-redux";
function App() {
  const color = useSelector((state) => state.themeColor.value);
  
  return (
    <div style={{backgroundColor: color}} className="App">
      <Counter/>
      <Coin/>
      <Theme/>
    </div>
  );
}

export default App;
