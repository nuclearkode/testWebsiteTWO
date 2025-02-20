import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div)`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: 20px;
  color: #fff;
  border: 1px solid #00faff;
`;

const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <Card
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 250, 255, 0.5)' }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>
      <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: '#00faff' }}>GitHub</a> |{' '}
      <a href={demo} target="_blank" rel="noopener noreferrer" style={{ color: '#00faff' }}>Demo</a>
    </Card>
  );
};

export default ProjectCard;