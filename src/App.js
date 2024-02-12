import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Register from './pages/Register';
import HomePage from './pages/Homepage';
import IntroPage from './pages/Intro';
import KindergartenPage from './pages/Kindergarten';
import FirstGradePage from './pages/Firstgrade';
import SecondGradePage from './pages/Secondgrade';
import ThirdGradePage from './pages/Thirdgrade';
import FourthGradePage from './pages/Fourthgrade';
import FifthGradePage from './pages/Fifthgrade';

const App = () => {
  const handleRegister = (newUser) => {
    console.log('Registered User:', newUser);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onRegister={handleRegister} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/kindergarten" element={<KindergartenPage />} />
        <Route path="/firstgrade" element={<FirstGradePage />} />
        <Route path="/secondgrade" element={<SecondGradePage />} />
        <Route path="/thirdgrade" element={<ThirdGradePage />} />
        <Route path="/fourthgrade" element={<FourthGradePage />} />
        <Route path="/fifthgrade" element={<FifthGradePage />} />
      </Routes>
    </Router>
  );
};

export default App;
