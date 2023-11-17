import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import '../ModuleTwoComponent/ModuleTwoComponent.css';
import beeImage from '../ModuleTwoComponent/image/bee_image.webp';
import boarImage from '../ModuleTwoComponent/image/boar.png';
import deerImage from '../ModuleTwoComponent/image/deer.jpg';
import zebraImage from '../ModuleTwoComponent/image/zebra_img.jpg';
import wolfImage from '../ModuleTwoComponent/image/wolf.jpg';
import flamingoImage from '../ModuleTwoComponent/image/flamingo.jpeg';
import elephantImage from '../ModuleTwoComponent/image/elephant.jpg';
import raccoonImage from '../ModuleTwoComponent/image/raccoon.png';
import lionImage from '../ModuleTwoComponent/image/lion.jpg';

const ModuleTwoComponent = () => {
  
  const [userInputBee, setUserInputBee] = useState('');
  const [feedbackBee, setFeedbackBee] = useState('');

  const [userInputBoar, setUserInputBoar] = useState('');
  const [feedbackBoar, setFeedbackBoar] = useState('');

  const [userInputDeer, setUserInputDeer] = useState('');
  const [feedbackDeer, setFeedbackDeer] = useState('');

  const [userInputZebra, setUserInputZebra] = useState('');
  const [feedbackZebra, setFeedbackZebra] = useState('');

  const [userInputWolf, setUserInputWolf] = useState('');
  const [feedbackWolf, setFeedbackWolf] = useState('');

  const [userInputLion, setUserInputLion] = useState('');
  const [feedbackLion, setFeedbackLion] = useState('');

  const [userInputElephant, setUserInputElephant] = useState('');
  const [feedbackElephant, setFeedbackElephant] = useState('');

  const [userInputRaccoon, setUserInputRaccoon] = useState('');
  const [feedbackRaccoon, setFeedbackRaccoon] = useState('');

  const [userInputFlamingo, setUserInputFlamingo] = useState('');
  const [feedbackFlamingo, setFeedbackFlamingo] = useState('');



  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleInputChange = (e, setImage, setFeedback) => {
    setImage(e.target.value.toUpperCase());
    setFeedback('');
  };

  const checkAnswer = (userInput, correctAnswer, setFeedback) => {
    if (userInput === correctAnswer.toUpperCase()) {
      setFeedback('✅');
      speak('Correct answer');
    } else {
      setFeedback('❌');
      speak('Wrong Answer!');
    }
  };


  const handleCheck = (userInput, correctAnswer, setFeedback) => {
    if (userInput.trim() === '') {
      alert('Please enter your answer before checking.');
    } else {
      checkAnswer(userInput, correctAnswer, setFeedback);
    }
  };
  


  return (
    

    
    <div className="container">
      <div className="box">
        <div className='imageimage'>

          <img className='image-container' src={beeImage} alt="Bee" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputBee}
              onChange={(e) => handleInputChange(e, setUserInputBee, setFeedbackBee)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputBee, 'HONEY BEE', setFeedbackBee)}>Check</button>
            {feedbackBee && <span>{feedbackBee}</span>}
        </div>

        
          <img className='image-container' src={deerImage} alt="Deer" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputDeer}
              onChange={(e) => handleInputChange(e, setUserInputDeer, setFeedbackDeer)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputDeer, 'DEER', setFeedbackDeer)}>Check</button>
            {feedbackDeer && <span>{feedbackDeer}</span>}
        </div>
        
        
          <img className='image-container' src={boarImage} alt="Boar" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputBoar}
              onChange={(e) => handleInputChange(e, setUserInputBoar, setFeedbackBoar)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputBoar, 'BOAR', setFeedbackBoar)}>Check</button>
            {feedbackBoar && <span>{feedbackBoar}</span>}
          </div>
          </div>

          <div className='imageimage'>

          <img className='image-container' src={zebraImage} alt="Zebra" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputZebra}
              onChange={(e) => handleInputChange(e, setUserInputZebra, setFeedbackZebra)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputZebra, 'ZEBRA', setFeedbackZebra)}>Check</button>
            {feedbackBoar && <span>{feedbackZebra}</span>}
          </div>

          <img className='image-container' src={wolfImage} alt="Wolf" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputWolf}
              onChange={(e) => handleInputChange(e, setUserInputWolf, setFeedbackWolf)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputWolf, 'WOLF', setFeedbackWolf)}>Check</button>
            {feedbackWolf && <span>{feedbackWolf}</span>}
          </div>

          <img className='image-container' src={lionImage} alt="Lion" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputLion}
              onChange={(e) => handleInputChange(e, setUserInputLion, setFeedbackLion)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputLion, 'Lion', setFeedbackLion)}>Check</button>
            {feedbackLion && <span>{feedbackLion}</span>}
          </div>

          <div className='imageimage'>

          <img className='image-container' src={flamingoImage} alt="Flamingo" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputFlamingo}
              onChange={(e) => handleInputChange(e, setUserInputFlamingo, setFeedbackFlamingo)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputFlamingo, 'FLAMINGO', setFeedbackFlamingo)}>Check</button>
            {feedbackFlamingo && <span>{feedbackFlamingo}</span>}
          </div>

          <img className='image-container' src={elephantImage} alt="elephant" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputElephant}
              onChange={(e) => handleInputChange(e, setUserInputElephant, setFeedbackElephant)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputElephant, 'ELEPHANT', setFeedbackElephant)}>Check</button>
            {feedbackElephant && <span>{feedbackElephant}</span>}
          </div>

          <img className='image-container' src={raccoonImage} alt="Raccoon" />
          <div className='inputs'>
            <p className='fill-ups'>Name of the given image</p>
            <input
              type="text"
              value={userInputRaccoon}
              onChange={(e) => handleInputChange(e, setUserInputRaccoon, setFeedbackRaccoon)}
              placeholder="Enter your answer"
            />
            <br/><br/>
            <button className='btn-check' onClick={() => handleCheck(userInputRaccoon, 'RACCOON', setFeedbackRaccoon)}>Check</button>
            {feedbackRaccoon && <span>{feedbackRaccoon}</span>}
<br></br> <br></br><br></br> 
           <button className='next-btn'><Link to='/IntermediateLevel'>Next Page</Link></button> 
            
         

          </div>

          
          </div>

          </div>

          </div>
          

          
      </div>    
  );
};

export default ModuleTwoComponent;
