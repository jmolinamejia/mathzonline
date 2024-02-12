import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/thirdgrade.css';

const ThirdGradePage = () => {
  
  const [answers, setAnswers] = useState(Array(3).fill(''));

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctAnswers = ['305', '152', '111']; 
    let isCorrect = true;
  
    for (let index = 0; index < answers.length; index++) {
      if (answers[index] !== correctAnswers[index]) {
        isCorrect = false;
        break;
      }
    }
  
    if (isCorrect) {
      alert('Correct! Well done!');
    } else {
      alert('Try again. Your answers are not correct.');
    }
  
    console.log('Submitted Answers:', answers);
  };

  return (
  <div className='thirdgradepage'>
    <h1 className="thirdgrade-title">Welcome to Third Grade Math</h1>
    <p className="thirdgrade-description">
        In third grade, we dive deeper into math concepts and explore more challenging problems!
    </p>
    
    <div className="math-questions">
        <h2>Let's Practice:</h2>
        
        <div className="question-circle">
            <p className="question">What is 216 + 89?</p>
            <input
            type="number"
            placeholder="Your Answer"
            value={answers[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}/>
          <button className="submit-button" onClick={handleSubmit}> Submit </button>
        </div>

        <div className="question-circle">
            <p className="question">What is 250 - 98?</p>
            <input
            type="number"
            placeholder="Your Answer"
            value={answers[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}/>
          <button className="submit-button" onClick={handleSubmit}> Submit </button>
        </div>

        <div className="question-circle">
            <p className="question">What is 159 - 48?</p>
            <input
            type="number"
            placeholder="Your Answer"
            value={answers[2]}
            onChange={(e) => handleInputChange(2, e.target.value)}/>
          <button className="submit-button" onClick={handleSubmit}> Submit </button>
        </div>
      </div>
      <Link to="/"> <button className="home-button">Home</button> </Link>
    </div>
  );
};

export default ThirdGradePage;
