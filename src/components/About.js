import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 50px;
  text-align: center;
  color: #fff;
`;

const AboutText = styled(motion.p)`
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <AboutText
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I'm a passionate developer inspired by innovation and technology. I love building projects that push boundaries and explore the future, much like the visionaries at SpaceX and Tesla.
      </AboutText>
    </AboutContainer>
  );
};

export default About;