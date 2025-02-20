import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  padding: 50px;
  text-align: center;
  color: #fff;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ContactLink = styled(motion.a)`
  color: #00faff;
  text-decoration: none;
  font-size: 1.2rem;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      <ContactLinks>
        <ContactLink
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          GitHub
        </ContactLink>
        <ContactLink
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.1 }}
        >
          Email
        </ContactLink>
        <ContactLink
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          Twitter
        </ContactLink>
      </ContactLinks>
    </ContactContainer>
  );
};

export default Contact;