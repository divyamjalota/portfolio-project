import React from 'react';
    import { motion } from 'framer-motion';
    import { FaUniversity } from 'react-icons/fa';

    function Education() {
      return (
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Education</h2>
          <div className="education-item">
            <h3>
              <FaUniversity /> University of Connecticut-Hartford, CT
            </h3>
            <p>MS in Business Analytics and Project Management (May 2025)</p>
          </div>
          <div className="education-item">
            <h3>
              <FaUniversity /> SRM Institute of Science and Technology-Kattankulathur, Tamil Nadu (India)
            </h3>
            <p>Bachelor of Technology in Information Technology (May 2020)</p>
          </div>
        </motion.section>
      );
    }

    export default Education;
