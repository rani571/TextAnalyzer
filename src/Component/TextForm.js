import React from 'react'
import { useState } from 'react'

export default function TextForm({textArea, mode, showAlert}) {

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra Spaces Removed!", "success");
  }

  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("Copied to Clipboard!", "success");
  }

  const handleClearText = () => {
    let newText = '';
    setText(newText);
    showAlert("Text Cleared!", "success");
  }

  const handleUpClick = () => {
    //console.log("The Button is clicked successfully");
    let newText = Text.toUpperCase();
    setText(newText);
    showAlert("Converted to UpperCase!", "success");
  }

  const handleLoClick = () => {
    //console.log("The Button is clicked successfully");
    let newText = Text.toLowerCase();
    setText(newText);
    showAlert("Converted to LowerCase", "success");
  }

  const handleOnChange = (event) => {
    //console.log("Onchange");
    setText(event.target.value);
  }

  const [Text, setText] = useState("")
  //Text = "Change the Text Here"; // This is the wrong way
  //setText("Change the Text Here"); // This is the correct way
  return (
    <>
    <div className='container' style={{ color: mode === "dark" ? "white" : "#042743" }}>
      <h1>{textArea}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={Text} onChange={handleOnChange} style={{
              backgroundColor: mode === "dark" ? "#13466e" : "white",
              color: mode === "dark" ? "white" : "#042743",
            }} rows="8"></textarea>
      </div>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{ color: mode === "dark" ? "white" : "#042743" }}>
      <h2>Your text Summary</h2>
      <p>{Text.split(" ").filter(word => word.trim() !== "").length} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").filter(word => word.trim() !== "").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{Text.length>0 ? Text : "Enter something in the textbox to preview it"}</p>
    </div>
    </>
  )
}

