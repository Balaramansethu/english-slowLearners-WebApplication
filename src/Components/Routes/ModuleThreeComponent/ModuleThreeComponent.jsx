import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import '../ModuleThreeComponent/ModuleThreeComponent.css';

const ModuleThreeComponent = () => {
  const words = [
    {
      word: "Happy",
      pronunciation: "/ˈhæpi/",
      usage: "She felt happy after receiving the gift.",
      meaning: "Feeling or showing pleasure or contentment."
    },
    {
      word: "Sunshine",
      pronunciation: "/ˈsʌnʃaɪn/",
      usage: "The sunshine brightened up the day.",
      meaning: "Direct sunlight unbroken by cloud, especially over a comparatively large area."
    },
    {
      word: "Friend",
      pronunciation: "/frɛnd/",
      usage: "She is my best friend.",
      meaning: "A person with whom one has a bond of mutual affection."
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

export default ModuleThreeComponent;
