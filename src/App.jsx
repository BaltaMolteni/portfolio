import React from 'react';
import Header from './components/Header';
import Contenedor from './components/Contenedor';
import SkillsSection from './components/SkillsSection';
import ProyectsSection from './components/ProyectsSection';
import Footer from './components/Footer';

function App() {

  return (
    <div className="bg-black min-h-screen flex justify-center courier">
      <div>
        <Header/>
        <SkillsSection/>
        <ProyectsSection/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
