import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/kindergarten.css';

const KindergartenPage = () => {
  //  store  answers
  const [answers, setAnswers] = useState(Array(3).fill(''));

  // input change
  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };
  // logic of answers
  const handleSubmit = () => {
    const correctAnswers = ['5', '6', '7']; 
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
  <div className='kinderpage'>
    <h1 className="kindergarten-title">Welcome to Kindergarten Math</h1>
    <p className="kindergarten-description">
        In kindergarten, we start counting the basics of addition and subtraction!.
    </p>
    
    <div className="math-questions">
        <h2>Let's Practice:</h2>
        
        <div className="question-circle">
            <p className="question">What is 2 + 3?</p>
            <input
            type="number"
            placeholder="Your Answer"
            value={answers[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}/>
            
            <button className="submit-button" onClick={handleSubmit}> Submit </button>
        </div>

        <div className="question-circle">
            <p className="question">What is 5 + 1?</p>
            <input
            type="number"
            placeholder="Your Answer"
            value={answers[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}/>
            <button className="submit-button" onClick={handleSubmit}> Submit </button>
        </div>

        <div className="question-circle">
            <p className="question">What is 4 + 3?</p>
            <input
            type="number"
            placeholder="Your Answer"
            value={answers[2]}
            onChange={(e) => handleInputChange(2, e.target.value)}/>
            <button className="submit-button" onClick={handleSubmit}> Submit </button>
        </div>
      </div>
      <Link to="/"> <button className="home-button">Home</button></Link>
    </div>
  );
};

export default KindergartenPage;




