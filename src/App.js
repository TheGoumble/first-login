import { useState } from 'react';
import Login from './componets/Login';
import SecretStuff from './componets/SecretStuff';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState()

  return (
    <>
    <header>
      <h1>My first login</h1>
    </header>
    {
      isLoggedIn? <SecretStuff/>: <Login setIsLoggedIn={setIsLoggedIn}/>
    }
    </>
  );
}

export default App;
