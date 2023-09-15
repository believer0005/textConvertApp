import React, { useState } from 'react';

export default function TextFrom(props) {

  const handleUpClick = ()=>{
    console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase()
    setText(newText);
  }

  const handleDownClick = ()=>{
    console.log('Uppercase was clicked' + text);
    let newText = text.toLowerCase()
    setText(newText);
  }
  
  const handleOnChange = (event)=>{
    console.log('on change');
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control my-5 bg-dark text-light" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
    <button className="btn btn-info" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-info" onClick={handleDownClick}>Convert to LowerCase</button>
  </div>
  )
}
