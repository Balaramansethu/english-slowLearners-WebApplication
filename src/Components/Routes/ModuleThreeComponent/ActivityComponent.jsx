import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import '../ModuleThreeComponent/ModuleThreeComponent.css';

const ActivityComponent = () => {
  const words = [
    {
      word: "appropriate",
      pronunciation: "",
      usage: ".click on the appropriate 'answer' in the box..",
      meaning: "suitable."
    },
    {
      word: "busy",
      pronunciation: "",
      usage: "A busy bank",
      meaning: "a bank where there is lots of work."
    },
    {
      word: "expressions",
      pronunciation: "",
      usage: "Use some of the expressions in the word cloud to help you.",
      meaning: "groups of words used for a situation."
    }
    // Add more simple words as needed
  ];

  const speakWord = (word) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(word);
    synth.speak(utterance);
  };


  return (
    <div className="container">
      <div className="box">
        <div className="word-info">
          {words.map((item, index) => (
            <div key={index}>
              <h2>{item.word}</h2>
              <p>Pronunciation: {item.pronunciation} <button onClick={() => speakWord(item.word)}>Listen</button></p>
              <p>Usage: {item.usage}</p>
              <p>Meaning: {item.meaning}</p>
              <hr />
            </div>
          ))}
          
        </div>
        <button className='next-btn'><Link to='/ActivityLevel'>Next Page</Link></button>

      </div>
    </div>
    
  );
};

export default ActivityComponent;
