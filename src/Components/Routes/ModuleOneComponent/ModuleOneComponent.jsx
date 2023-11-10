import React, { useState } from 'react';
import "../ModuleOneComponent/ModuleOneComponent.css";

const ModuleOneComponent = () => {
  const [progress, setProgress] = useState(0);

  const speak = (letter, speed = 1.0) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.rate = speed; 
    synth.speak(utterance);

    // Update progress when a letter is spoken
    setProgress(prevProgress => prevProgress + 1);
  }

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Check if all letters have been spoken
  const allLettersSpoken = progress === alphabet.length;

  return (
    <div className="container">
      <div className="box">
        <div className='vertical-buttons'>
          {alphabet.split('').map((letter) => (
            <button key={letter} onClick={() => speak(letter, 0.20)} disabled={allLettersSpoken}>
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModuleOneComponent;
