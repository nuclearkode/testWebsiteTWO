import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.section`
  padding: 50px;
  text-align: center;
  color: #fff;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const SkillItem = styled(motion.div)`
  background: #1a1a1a;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #00faff;
`;

const Skills = () => {
  const skills = ['React', 'Three.js', 'JavaScript', 'Python', 'AI/ML', 'Web Development'];

  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <SkillList>
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </SkillItem>
        ))}
      </SkillList>
    </SkillsContainer>
  );
};

export default Skills;