import React from 'react';
    import { motion } from 'framer-motion';
    import profilePhoto from '../assets/profile.jpg';

    function About() {
      return (
        <motion.section
          id="about"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={profilePhoto} alt="Divyam Jalota" className="profile-photo" />
          <h1>Divyam Jalota</h1>
          <p>
            Hello! I'm a passionate software developer with a strong background in data analysis and project management. I enjoy creating innovative solutions and tackling challenging problems.
          </p>
        </motion.section>
      );
    }

    export default About;
