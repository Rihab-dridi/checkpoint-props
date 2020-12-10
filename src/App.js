import React, {components} from 'react';
import Profile from './profile/Profile';
import navBarParent from './NavBar/navBarParent'

import './App.css';
import NavBarParent from './NavBar/navBarParent';

function App() {
  const handleName = (fullName) => alert(` Hello there it's ${fullName}`);

  return (
    <div className="App">
      <NavBarParent/>
      <Profile 
        fullName="DRIDI RIHAB"
        profession="Web Developper"
        bio="How can I help you"
        handleName={handleName} > 
             <img className="img" src="./rhb.jpg" alt="img"/>
      </Profile>
    </div>
  );
}

export default App;
