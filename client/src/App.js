import React from 'react';

import Header from './sections/header/Header'
import Body from './sections/body/Body'
import './App.scss';

function App() {
  return (
    <div className="app__wrapper center">
      <Header />
      <Body />
    </div>
  );
}

export default App;
