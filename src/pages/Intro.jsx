import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/intro.css';

const IntroPage = () => {
    return (
    <div className='introx'>
        <h1 className="intro-title">Welcome to Mathz Onlinz Introduction</h1>
        <p className="intro-description">
        Mathz is an exciting journey where we explore the nice world of mathing!
        Let's hop right into it and get ready for easy mathzs!
        </p>
        
        <div className="grade-blocks">
            <div className="grade-block">
                <h2>Kindergarten</h2>
                <p>Discover the basics of counting.</p>
            </div>
            
            <div className="grade-block">
                <h2>First Grade</h2>
                <p>Build a solid foundation in addition, subtraction.</p>
            </div>

            <div className="grade-block">
                <h2>Second Grade</h2>
                <p>Take your math skills to the next level with multiplication, division.</p>
            </div>

            <div className="grade-block">
                <h2>Third Grade</h2>
                <p>Delve into other exciting topics that will broaden your understanding of math.</p>
            </div>

            <div className="grade-block">
                <h2>Fourth Grade</h2>
                <p>Explore mathing challenging problems.</p>
            </div>

            <div className="grade-block">
                <h2>Fifth Grade</h2>
                <p>Master advanced math and become a math wizard!.</p>
            </div>
      </div>
      <Link to="/"> <button className="home-button"> Home </button> </Link> </div>
  );
};

export default IntroPage;
