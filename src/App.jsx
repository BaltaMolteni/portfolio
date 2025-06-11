import React from 'react';
import Header from './components/Header';
import Contenedor from './components/Contenedor';
import SkillsSection from './components/SkillsSection';

function App() {

  return (
    <div className="bg-black min-h-screen flex justify-center text-white courier">
      <div>
        <Header/>
        <SkillsSection/>
      </div>
    </div>
  )
}

export default App
