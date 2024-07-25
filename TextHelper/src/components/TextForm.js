import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextFrom(props) {
  const [text, setText] = useState('');

  const handleUppClick = () => {
    let str = text.toUpperCase();
    setText(str);
  }
  const handleLowClick = () => {
    let str = text.toLowerCase();
    setText(str);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleClearClick = () => {
    setText("");
  }
  const handleCopyClick = () => {
    let getText = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(getText.value);
  }

  let wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  let whiteSpaceCount = (text.match(/\s/g) || []).length;

  return (
    <>
      <div className="container mb-3 my-4" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? '#212529' : 'white' }} >
        <h1>{props.formHeading}</h1>
        <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? '#212529' : 'white' }}
          id="exampleFormControlTextarea1" rows="10" placeholder='Start Typing...' onChange={handleOnChange}></textarea>

        <button className='btn btn-primary my-3' onClick={handleUppClick}>Convert to UpperCase</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleCopyClick}>Copy Text</button>
      </div>

      <div className="container my-5}"
        style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? '#212529' : 'white' }} >
        <h1>Text Info</h1>
        <p>{wordCount} words and {text.length - whiteSpaceCount} characters</p>
      </div>

      <div className="container my-5"
        style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? '#212529' : 'white' }} >
        <h1>Text Preview</h1>
        <p>{text.length>0?text:"Please enter text for preview"}</p>
      </div>
    </>
  )
}
