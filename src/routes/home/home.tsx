import React from 'react'
import './home.css';
import ElectronicsSection from './electronicsSection';
import ProjectsSection from './projectsSection';
import AccomplishmentsSection from './accomplishmentsSection';
import Contact from '../contact/contact';
import Gallery from './gallery';

const Home = () => {
  return (
    <div>
      <ElectronicsSection />
      <AccomplishmentsSection />
      <ProjectsSection />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home