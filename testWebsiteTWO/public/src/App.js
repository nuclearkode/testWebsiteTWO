import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import projects from './data/projects.json';

const AppContainer = styled.div`
  background: #0a0a0a;
  min-height: 100vh;
`;

const ProjectsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;

const App = () => {
  return (
    <AppContainer>
      <Hero />
      <ProjectsSection>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </ProjectsSection>
      <Skills />
      <About />
      <Contact />
    </AppContainer>
  );
};

export default App;