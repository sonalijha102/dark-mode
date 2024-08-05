

import './App.css';
// import Aboutus from './component/Aboutus';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react';




function App() {

  const[Mode , setMode] = useState('light');
  const toggleMode = () =>{

    if(Mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor ='gray'
    }
    else{
      setMode ('light');
       document.body.style.backgroundColor ='white'
    }
    
    }

  

  return (
    
   
   <>
     <Navbar title="Navbar" addabout="Aboutus" mode={Mode} toggleMode={toggleMode} />
     <Textform heading="Enter your about" mode={Mode}/>

     {/* <Aboutus/> */}
   </>



  );
}

export default App;
