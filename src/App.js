import React, { useState } from 'react';
import './App.css';
import LoginMenu from './components/LoginMenu/LoginMenu';
import Page from './components/Page';

function App() {

  const [activUser, setActivUser] = useState('');

  if (!activUser) {
    return (
      <LoginMenu setActivUser={setActivUser} />
    );
  }

  if (activUser) {
    return (
      <Page activUser={activUser} setActivUser={setActivUser}/>
    );
  }

}

export default App;
