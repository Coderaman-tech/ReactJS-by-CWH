import React,{useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}
 
export default App;
