import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/register.css'; 

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gradelevel, setGradeLevel] = useState('');

  const handleRegister = async () => {
    const newUser = {
      username,
      password,
      gradelevel,
    };

    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log('Student registered successfully');
        // You can perform additional actions here if needed
        onRegister(newUser);
      } else {
        console.error('Failed to register student');
        // Handle error cases, e.g., display an error message
      }
    } catch (error) {
      console.error('Error registering student:', error);
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <div className="register-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="gradeLevel">Grade Level:</label>
        <input
          type="text"
          id="gradeLevel"
          value={gradelevel}
          onChange={(e) => setGradeLevel(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>

      <p className="back-to-home">
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default Register;

