import { useState, useEffect } from 'react';
import Cat from './Cat';
import '../styles/DancingCat.css';

const DancingCat = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        toggleAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isAnimating]);

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <Cat />
      </div>
      <button
        className="control-button"
        onClick={toggleAnimation}
        aria-label={isAnimating ? 'Stop cat dancing animation' : 'Start cat dancing animation'}
      >
        {isAnimating ? 'Stop Dancing' : 'Start Dancing'}
      </button>
      <p className="hint-text">Press SPACE to toggle</p>
    </div>
  );
};

export default DancingCat;
