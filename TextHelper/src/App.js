import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');

  const handleClickToggle=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
    <Router>

    <Navbar title="TextHelper" home="Go to Home" about="About TextHelper" mode={mode} toggleMode={handleClickToggle}/>
    
      <Switch>
          <Route exact path="/">
            <div className="container">
              <TextForm formHeading="Enter the text below to analyze" mode={mode}/>
            </div>
          </Route>

          <Route exact path="/about">
            <div className="container">
              <About mode={mode}/>
            </div>
          </Route>
      </Switch>

    </Router>
    </>
  );
}

export default App;