import React, { useState } from 'react';

function Pdfaudio() {
  const [text, setText] = useState('');

  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Your browser does not support speech synthesis.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Text to Speech</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Enter text here"
      />
      <br />
      <button onClick={speak} style={{ marginTop: '10px' }}>Speak</button>
    </div>
  );
}

export default Pdfaudio;
