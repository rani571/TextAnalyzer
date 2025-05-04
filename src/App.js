import './App.css';
import React, { useState } from 'react';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm textArea="Enter the Text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
