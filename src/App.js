import React, { useState } from 'react';
import './App.css';
import LoginMenu from './components/LoginMenu/LoginMenu';
import Page from './components/Page';

function App() {

  const [activUser, setActivUser] = useState('');
  const element = activUser ?
    <Page activUser={activUser} setActivUser={setActivUser} />
    :
    <LoginMenu setActivUser={setActivUser} />

  return ( element );

}

export default App;
