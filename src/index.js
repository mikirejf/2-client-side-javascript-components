import React from 'react';
import ReactDOM from 'react-dom';

import BreakfastStudio from './components/BreakfastStudio';
import { GlobalStateProvider } from './GlobalStateProvider';

import './App.css';

function App() {
  return (
    <GlobalStateProvider>
      <BreakfastStudio />
    </GlobalStateProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
