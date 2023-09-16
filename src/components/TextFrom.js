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
    <>
      <div className="container-fluid p-0 from-box">

        <div className="mb-3">
          <h1 className='text-light'>{props.heading}</h1>
          <textarea className="form-control my-5 bg-dark text-light " id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>

        <div className="col">
          <h1 className='text-light'>Your text summary</h1>
          <h4 className='text-light'>{text.split(" ").length} words <br/>{text.length} characters</h4>
          <h4 className='text-light'>{0.008 * text.split(" ").length} minutes to read</h4>
        </div>

      </div>

      <div className='button'>

        <button className="btn btn-info" onClick={handleUpClick}>Convert to Uppercase</button>

        <button className="btn btn-info" onClick={handleDownClick}>Convert to LowerCase</button>
        
      </div>

      <div className='preview'>
        <h1 className='text-light'>Preview</h1>
        <p className='text-light'>{text}</p>
      </div>

    </>
  )
}
