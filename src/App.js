import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import ProjectsContainer from './Components/Project/Project';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <Landing />
        <ProjectsContainer />
      </div>
    </>
  );
}

export default App;
