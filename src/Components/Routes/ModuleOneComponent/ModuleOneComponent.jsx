import React, { useState } from 'react';
import "../ModuleOneComponent/ModuleOneComponent.css";

const ModuleOneComponent = () => {
  const [progress, setProgress] = useState(0);
  const [spokenLetters, setSpokenLetters] = useState(new Set());
  const [vowelsShortProgress, setVowelsShortProgress] = useState(0);
  const [vowelsLongProgress, setVowelsLongProgress] = useState(0)
  const [vowelsProgress, setVowelsProgress] = useState(0);

  const speak = (letter, speed = 0.5, isShortVowel = false) => {
    if (!spokenLetters.has(letter)) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(letter);
      utterance.rate = speed; 
      synth.speak(utterance);
  
      if (isShortVowel) {
        setVowelsShortProgress(prevProgress => prevProgress + 1);
      } else {
        setProgress(prevProgress => prevProgress + 1);
        setSpokenLetters(new Set(spokenLetters).add(letter));
      }
  
      setVowelsProgress(prevProgress => prevProgress + 1);
    }
  }

  const speaks = (letter, speed = 0.5, isLongVowel = false) => {
    if (!spokenLetters.has(letter)) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(letter);
      utterance.rate = speed; 
      synth.speak(utterance);
  
      if (isLongVowel) {
        setVowelsLongProgress(prevProgress => prevProgress + 1);
      } else {
        setProgress(prevProgress => prevProgress + 1);
        setSpokenLetters(new Set(spokenLetters).add(letter));
      }
  
      setVowelsProgress(prevProgress => prevProgress + 1);
    }
  }
  

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  
  const allLettersSpoken = progress === alphabet.length;

  
  const allShortVowelsSpoken = vowelsShortProgress === 5; 

  const allLongVowelsSpoken = vowelsLongProgress === 5;
  
  // const allVowelsSpoken = vowelsProgress === 5; 

  return (
    <div className="container">
      <div className="box">
        <div className='vertical-buttons'>
          {alphabet.split('').map((letter) => (
            <button key={letter} onClick={() => speak(letter, 0.5)} disabled={allLettersSpoken}>
              {letter}
            </button>
          ))}
        </div>
        {allLettersSpoken ? (
          <div className='completed-section'>
            <span role="img" aria-label="tick">Alphabets Progress completed! ✅</span>
          </div>
        ) : (
          <div className='progress-bar-container'>
            <span><h3>Progress bar :</h3></span>
            <progress value={progress} max={alphabet.length}></progress>
          </div>
        )}
        <div className='vowels-short'>
          <h3 className='vowels-heading'>Vowels</h3>
          <h3 className='vowels-heading'>Short vowels</h3>
          <span className='vowel-container'><span className='vowels-example'> <b>"a" as in cat</b></span><button onClick={() => speak('cat', 0.5, true)}>Cat</button></span>
          <span className='vowel-container'><span className='vowels-example'> <b>"e" as in wet</b></span><button onClick={() => speak('wet', 0.5, true)}>Wet</button></span>
          <span className='vowel-container'><span className='vowels-example'> <b>"i" as in big</b></span><button onClick={() => speak('big', 0.5, true)}>Big</button></span>
          <span className='vowel-container'><span className='vowels-example'> <b>"o" as in clock</b></span><button onClick={() => speak('clock', 0.5, true)}>Clock</button></span>
          <span className='vowel-container'><span className='vowels-example'> <b>"u" as in but</b></span><button onClick={() => speak('but', 0.5, true)}>But</button></span>

          {allShortVowelsSpoken ? (
            <div className='completed-section'>
              <span role="image" aria-label="tick"> Short vowels completed! ✅</span>
            </div>
          ) : (
            <div className='progress-bar-container'>
              <span><h3>Short vowels Progress bar :</h3></span>
              <progress value={vowelsShortProgress} max={5}></progress>
            </div>
          )}
        </div>
        <div>
          <h3 className='vowels-heading'>Long vowels</h3>
          <span className='vowel-container'><span className='vowels-example'> <b>"a" as in cake</b></span><button onClick={() => speaks('cake', 0.5, true)}>Cake</button></span>
          <span className='vowel-container'><span className='vowels-example'> <b>"e" as in street</b></span><button onClick={() => speaks('street', 0.5, true)}>Street</button></span>
          <span className='vowel-container'><span className='vowels-example'> <b>"i" as in like</b></span><button onClick={() => speaks('like', 0.5, true)}>Like</button></span>
          <span className='vowel-container'><span className='vowels-example'> <b>"o" as in phone</b></span><button onClick={() => speaks('phone', 0.5, true)}>Phone</button></span>
          <span className='vowel-container'><span className='vowels-example'> <b>"u" as in use</b></span><button onClick={() => speaks('use', 0.5, true)}>Use</button></span>

            {allLongVowelsSpoken ? (
                <div className='completed-section'>
                  <span role='image' aria-label='tick'>Long vowels completed! ✅</span>
                </div>
            ) : (
              <div className='progress-bar-container'>
                <span><h3>Long vowels Progress bar :</h3></span>
                <progress value={vowelsLongProgress} max={5}></progress>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default ModuleOneComponent;
