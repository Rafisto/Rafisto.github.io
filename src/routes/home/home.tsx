import React from 'react'
import './home.css';
import ElectronicsSection from './electronicsSection';
import ProjectsSection from './projectsSection';
import AccomplishmentsSection from './accomplishmentsSection';
import Contact from '../contact/contact';

const Home = () => {
  return (
    <div>
      <ElectronicsSection />
      <AccomplishmentsSection />
      <ProjectsSection />
      <Contact />
    </div>
  )
}

export default Home