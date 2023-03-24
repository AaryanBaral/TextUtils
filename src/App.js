import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("black");
  const [alert, setAlert] = useState(null);
  const [style, setStyle] = useState({
    color:"black",
    backgroundColor:"white"
  })

  const ShowAlert = (message,condition)=>{
    setAlert({
      message:message,
      condition:condition
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const ChangeColorOnClick = (event)=>{
    setColor(event.target.value)
  }
  const ToggleMode = ()=>{
    console.log(mode)
    if(mode === "light"){
      document.body.style.backgroundColor=`${color}`;
      setMode(`dark`);
      setStyle({
        color:"white",
        backgroundColor:`${color}`
      })
    }
    else{
      document.body.style.backgroundColor="white";
      setMode("light");
      setStyle({
        color:"black",
        backgroundColor:"white"
      })
    }
  }
  return (
    <>
      <BrowserRouter>
          <Navbar mode={mode} toggle={ToggleMode} style = {style} handelOnClick = {ChangeColorOnClick} color ={color} />
          <Alert alert = {alert}/>
         <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your text here to analyze" mode ={mode} toggle={ToggleMode} ShowAlert={ShowAlert} style = {style}/>} />
          <Route exact path="/about" element={<About style = {style} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
