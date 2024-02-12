import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/fifthgrade.css';

const FifthGradePage = () => {

  const [answers, setAnswers] = useState(Array(3).fill(''));

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctAnswers = ['9', '0.6', '2835']; 
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
  <div className='fifthgradepage'>
    <h1 className="fifthgrade-title">Welcome to Fifth Grade Mathz</h1>
    <p className="fifthgrade-description">
        In fifth grade, we take on harder types of multiplication and division! Be ready for hard mathz.
    </p>
    
    <div className="math-questions">
        <h2>Let's Practice:</h2>
        
        <div className="question-circle">
            <p className="question">What is the square root of 81?</p>
            <input
            type="number"
            placeholder="Your Answer"
            value={answers[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}/>
            <button className="submit-button" onClick={handleSubmit}> Submit </button>
        </div>

        <div className="question-circle">
            <p className="question">What is 3/5 as a decimal?</p>
            <input
            type="number"
            placeholder="Your Answer"
            value={answers[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}/>
            <button className="submit-button" onClick={handleSubmit}> Submit </button>
        </div>

        <div className="question-circle">
            <p className="question">What is 63 x 45?</p>
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

export default FifthGradePage;
