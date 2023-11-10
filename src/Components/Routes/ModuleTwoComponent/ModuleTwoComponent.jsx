import React from 'react';
import '../ModuleTwoComponent/ModuleTwoComponent.css'
const ModuleTwoComponent = () => {
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }
  return (
    <div className="container">
      <div className="box">
      <div>
      <button onClick={() => speak('HELLO')}>HELLO</button>
      <button onClick={() => speak('MY NAME IS')}>MY NAME IS</button>
    </div>
      </div>
    </div>
  );
};

export default ModuleTwoComponent;


