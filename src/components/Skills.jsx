import React from 'react';
    import { motion } from 'framer-motion';
    import { FaCheck, FaCode, FaTools, FaLanguage, FaCertificate } from 'react-icons/fa';

    function Skills() {
      return (
        <motion.section
          id="skills"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Technical Skills</h2>
          <h3>
            <FaCheck /> Skills
          </h3>
          <ul>
            <li><FaCheck /> <span>Data Analysis</span></li>
            <li><FaCheck /> <span>Software Development</span></li>
            <li><FaCheck /> <span>Project Management</span></li>
            <li><FaCheck /> <span>Machine Learning</span></li>
            <li><FaCheck /> <span>Cloud Computing</span></li>
            <li><FaCheck /> <span>Documentation and Collaboration</span></li>
            <li><FaCheck /> <span>Agile Methodologies</span></li>
            <li><FaCheck /> <span>Kanban</span></li>
            <li><FaCheck /> <span>Product Management</span></li>
            <li><FaCheck /> <span>.NET frameworks(ASP.NET, MVC, .NET Core)</span></li>
            <li><FaCheck /> <span>LLMOps(MLOps)</span></li>
          </ul>
          <h3>
            <FaLanguage /> Languages
          </h3>
          <ul>
            <li><FaLanguage /> <span>SQL</span></li>
            <li><FaLanguage /> <span>C#</span></li>
            <li><FaLanguage /> <span>Python</span></li>
            <li><FaLanguage /> <span>Java</span></li>
            <li><FaLanguage /> <span>R</span></li>
            <li><FaLanguage /> <span>PySpark</span></li>
            <li><FaLanguage /> <span>HTML</span></li>
          </ul>
          <h3>
            <FaTools /> Tools
          </h3>
          <ul className="tools-grid">
            <li><FaTools /> <span>Jira</span></li>
            <li><FaTools /> <span>Trello</span></li>
            <li><FaTools /> <span>Confluence</span></li>
            <li><FaTools /> <span>Azure Service Bus</span></li>
            <li><FaTools /> <span>Azure Functions</span></li>
            <li><FaTools /> <span>Microsoft Project</span></li>
            <li><FaTools /> <span>Microsoft Excel</span></li>
            <li><FaTools /> <span>Microsoft Power Point</span></li>
            <li><FaTools /> <span>Microsoft Word</span></li>
            <li><FaTools /> <span>Microsoft Sharepoint</span></li>
            <li><FaTools /> <span>Outlook</span></li>
            <li><FaTools /> <span>JMP</span></li>
            <li><FaTools /> <span>SAS</span></li>
            <li><FaTools /> <span>Power BI</span></li>
            <li><FaTools /> <span>Github</span></li>
            <li><FaTools /> <span>IIS</span></li>
            <li><FaTools /> <span>SSMS</span></li>
            <li><FaTools /> <span>Visual Studio</span></li>
            <li><FaTools /> <span>Dify</span></li>
            <li><FaTools /> <span>Docker</span></li>
          </ul>
          <h3>
            <FaCertificate /> Certifications
          </h3>
          <ul>
            <li><FaCertificate /> <span>Datacamp introduction to python and intermediate python</span></li>
            <li><FaCertificate /> <span>Becoming a product manager: A complete guide by International Institute of Business Analysis</span></li>
            <li><FaCertificate /> <span>Jira fundamentals by Atlassian(Agile principles and frameworks)</span></li>
            <li><FaCertificate /> <span>Skywise Developer Certificate by Airbus</span></li>
            <li><FaCertificate /> <span>SQL Intermediate Certificate by Hackerrank</span></li>
            <li><FaCertificate /> <span>C# Basic Certificate by Hackerrank</span></li>
            <li><FaCertificate /> <span>Big Data Integration and Processing by UC San Diego</span></li>
            <li><FaCertificate /> <span>Introduction to Big Data by UC San Diego</span></li>
          </ul>
        </motion.section>
      );
    }

    export default Skills;
