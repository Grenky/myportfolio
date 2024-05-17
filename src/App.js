import React from 'react';
import './App.scss';
import FrontPage from './components/FrontPage';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<FrontPage />} />
      <Route path='Resume' element={<Resume />} />
      <Route path='Projects' element={<Projects />} />
      <Route path='Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
