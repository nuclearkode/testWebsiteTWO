import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '4rem', zIndex: 1 }}
      >
        [Your Name]
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: '1.5rem', zIndex: 1 }}
      >
        Building the Future, One Project at a Time
      </motion.p>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1, 32, 32]} position={[0, 0, -5]}>
          <meshStandardMaterial attach="material" color="#00faff" wireframe />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </HeroContainer>
  );
};

export default Hero;