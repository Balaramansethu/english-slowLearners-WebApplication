import React, { useState } from 'react';

const IntermediateComponent = () => {
  const [spokenLetters, setSpokenLetters] = useState(new Set());
  const [twoLetterSpellProgress, setTwoLetterSpellProgress] = useState(0);
  const [threeLetterSpellProgress, setThreeLetterSpellProgress] = useState(0);

  const spellTwoLetters = (word) => {
    if (!spokenLetters.has(word)) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.50; // Set the speech rate
      synth.speak(utterance);

      setSpokenLetters(new Set(spokenLetters).add(word));
      setTwoLetterSpellProgress(prevProgress => prevProgress + 1); // Increment two-letter spell progress
    }
  }

  const spellThreeLetters = (word) => {
    if (!spokenLetters.has(word)) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 1.00; // Set the speech rate
      synth.speak(utterance);

      setSpokenLetters(new Set(spokenLetters).add(word));
      setThreeLetterSpellProgress(prevProgress => prevProgress + 1); // Increment three-letter spell progress
    }
  }

  const allSpellsCompleted = twoLetterSpellProgress === 8
                           && threeLetterSpellProgress === 8;

  return (
    <div className="container">
      <div className="box">
        <div className='vertical-buttons'>

          <button onClick={() => spellTwoLetters('do')} disabled={allSpellsCompleted}>
            do
          </button>
          <button onClick={() => spellTwoLetters('is')} disabled={allSpellsCompleted}>
            is
          </button>
          <button onClick={() => spellTwoLetters('on')} disabled={allSpellsCompleted}>
            on
          </button>
          <button onClick={() => spellTwoLetters('aen')} disabled={allSpellsCompleted}>
            an
          </button>
          <button onClick={() => spellTwoLetters('at')} disabled={allSpellsCompleted}>
            at
          </button>
          <button onClick={() => spellTwoLetters('Of')} disabled={allSpellsCompleted}>
            of
          </button>
          
        </div>

        <div className='vertical-buttons'>

          <button onClick={() => spellTwoLetters('as')} disabled={allSpellsCompleted}>
            as
          </button>
          <button onClick={() => spellTwoLetters('we')} disabled={allSpellsCompleted}>
            we
          </button>
          <button onClick={() => spellTwoLetters('me')} disabled={allSpellsCompleted}>
            me
          </button>
          <button onClick={() => spellTwoLetters('my')} disabled={allSpellsCompleted}>
            my
          </button>

        </div>

        {/* Progress bar for two-letter spells */}
        <div className='progress-bar-container'>
          <span><h3>Two-letter Spells Progress bar :</h3></span>
          <progress value={twoLetterSpellProgress} max={8}></progress>
        </div>
        <div className='vertical-buttons'>
        <button onClick={() => spellThreeLetters('And')} disabled={allSpellsCompleted}>
        And
        </button>
        <button onClick={() => spellThreeLetters('Are')} disabled={allSpellsCompleted}>
        Are
        </button>
        <button onClick={() => spellThreeLetters('Act')} disabled={allSpellsCompleted}>
        Act
        </button>
        <button onClick={() => spellThreeLetters('Ask')} disabled={allSpellsCompleted}>
        Ask
        </button>
        <button onClick={() => spellThreeLetters('For')} disabled={allSpellsCompleted}>
        For
        </button>
        <button onClick={() => spellThreeLetters('God')} disabled={allSpellsCompleted}>
        God
        </button>
        <button onClick={() => spellThreeLetters('Rat')} disabled={allSpellsCompleted}>
        Rat
        </button>
        <button onClick={() => spellThreeLetters('Run')} disabled={allSpellsCompleted}>
        Run
        </button>
        </div>

        {/* Progress bar for three-letter spells */}
        <div className='progress-bar-container'>
          <span><h3>Three-letter Spells Progress bar :</h3></span>
          <progress value={threeLetterSpellProgress} max={8}></progress>
        </div>

        {allSpellsCompleted && (
          <div className='completed-section'>
            <span role="img" aria-label="tick">All spells completed! ✅</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default IntermediateComponent;
