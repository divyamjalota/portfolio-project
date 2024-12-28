import React from 'react';
    import Header from './components/Header';
    import About from './components/About';
    import Skills from './components/Skills';
    import Experience from './components/Experience';
    import Projects from './components/Projects';
    import Contact from './components/Contact';
    import Education from './components/Education';
    import { motion } from 'framer-motion';

    function App() {
      return (
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </motion.div>
      );
    }

    export default App;
