
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForms from './components/TextForms.js';
import React, { useState } from 'react';
import loading from '../src/loading.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [mode, setmode] = useState('light');

  const enableMode = () => {
    document.querySelector(".loading_status").style.display = 'flex'
    setTimeout(() => {
      document.querySelector(".loading_status").style.display = 'none'
      if (mode === 'light') {
        setmode('dark');
        document.body.style.backgroundColor = '#09243f'
        // document.body.style.color = 'white'
      } else {
        setmode('light');
        document.body.style.backgroundColor = 'white'
        // document.body.style.color = '#09243f'
      }
    }, 2000);

  }


  return (
    <>
      <Router>
      <Navbar title="EDITOR" about="About" mode={mode} enableMode={enableMode} />

      <div className="loading_status" style={{ display: 'none' }}>
        <img className="loading" src={loading} alt="" />
      </div>


      {/* <div className="container" >
        <About />
      </div> */}
      <div className="container my-3">
      <Routes>
        <Route exact path='/about' element={< About mode={mode} />}></Route>
        <Route exact path='/' element={ <TextForms heading='Enter the text below :' mode={mode} />}></Route>
      </Routes>
      </div>
      </Router>
    </>

  );
}

export default App;
