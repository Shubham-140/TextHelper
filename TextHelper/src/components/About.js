import React from 'react'

export default function About(props) {
  return (
    <div className='container my-5 mx-5' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? '#212529' : 'white' }}>
      <h1>About TextHelper</h1>
      <p className='my-4'>
        TextHelper is a versatile text utility application designed to simplify text manipulation tasks. Built using React, TextHelper offers a range of features to enhance your text editing experience: Case Conversion - Effortlessly convert text to uppercase or lowercase with a single click. Word and Character Count - Instantly obtain word and character counts to keep track of your text’s length. Text Preview - Get a real-time preview of your formatted text to ensure it meets your requirements. Copy Text - Easily copy your formatted text to the clipboard for seamless use in other applications. With TextHelper, managing your text has never been easier. Whether you're preparing a document, writing a blog post, or simply editing text, TextHelper provides the tools you need to get the job done quickly and efficiently.
    </p>
    </div>
  )
}
