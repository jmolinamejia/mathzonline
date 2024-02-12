import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/home.css'

const HomePage = () => {
  return (
  <div>
    <header className="home-header">
      <h1 className="home-title">Mathz Onlinz</h1>
    </header>

    <section className="home-introduction">
      <p className="home-description"> Welcome to Mathz Onlinz, where we make math easy and simple! </p>
    </section>
    
    <section className="home-buttons">
      <h2>Be a master in:</h2>
      <div className="button-container">
        <Link to="/intro"><button>Introduction</button></Link>
        <Link to="/kindergarten"><button>Kindergarten</button></Link>
        <Link to="/firstgrade"><button>First Grade</button></Link>
        <Link to="/secondgrade"><button>Second Grade</button></Link>
        <Link to="/thirdgrade"><button>Third Grade</button></Link>
        <Link to="/fourthgrade"><button>Fourth Grade</button></Link>
        <Link to="/fifthgrade"><button>Fifth Grade</button></Link>
      </div>
    </section>
      <div className="register-button-container">
        <Link to="/register"> <button className="register-button"> Register </button> </Link>
      </div>
  </div>
  );
};

export default HomePage;
