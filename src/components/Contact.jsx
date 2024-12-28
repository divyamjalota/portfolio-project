import React from 'react';
    import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
    import { motion } from 'framer-motion';

    function Contact() {
      return (
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact Me</h2>
          <div className="contact-icons">
            <motion.a
              href="mailto:divyam.jalota@uconn.edu"
              whileHover={{ scale: 1.1 }}
            >
              <FaEnvelope />
              <span>divyam.jalota@uconn.edu</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/divyam-jalota-87316b162/"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin />
              <span>linkedin.com/in/divyam-jalota-87316b162</span>
            </motion.a>
             <motion.a
              href="tel:+19592481697"
              whileHover={{ scale: 1.1 }}
            >
              <FaPhone />
              <span>+1(959)-248-1697</span>
            </motion.a>
          </div>
        </motion.section>
      );
    }

    export default Contact;
