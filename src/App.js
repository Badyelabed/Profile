import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profilphoto from './Page/Profilphoto'
import Fullname from './Page/Fullname'
import Myaddress from './Page/Address'


function App() {
  return (
    <div className="App">
      <Profilphoto />
      < Fullname />
      < Myaddress />

    </div>
  );
}

export default App;
