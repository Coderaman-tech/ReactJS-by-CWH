import React,{useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import {
  Routes,Route
} from "react-router-dom";
 

function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const [modeText, setModeText] = useState('dark');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setModeText('light');
      document.body.style.backgroundColor='#042743';
    }
    else{
    setMode('light');
    setModeText('dark');
    document.body.style.backgroundColor='light';

  }
  }
  
  return (
    <>
    
    <Navbar title="TextUtils" aboutText="About" mode={mode} modeText={modeText} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <Routes>
    {/* use of exact in path
      users-->Component1
      /users/home -->Component2 */}
          <Route exact path="/about" element={<About/>}/>   
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}
          />
          
      </Routes>
      </div>
    
    </>
  );
}
 
export default App;
