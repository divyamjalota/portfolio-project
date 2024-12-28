import React from 'react';
    import { motion } from 'framer-motion';
    import { FaCodeBranch } from 'react-icons/fa';

    function Projects() {
      return (
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Academic Projects</h2>
          <motion.div
            className="project-item"
            whileHover={{ scale: 1.02 }}
          >
            <h3>
              <FaCodeBranch /> Capstone - Enhancing Ananda Platform using LLMs and deep data analytics (Fall 2024)
            </h3>
            <ul>
              <li>Two-part project aiming to implement chatbot using LLMs (Large Language Model) for the Ananda platform (crypto trading) for improved customer interaction.</li>
              <li>Second part aiming at predicting market signals for cryptocurrency like BTC and ETH using deep data analytics to create model for actionable intelligence to provide customers with informed trading decisions.</li>
            </ul>
          </motion.div>
          <motion.div
            className="project-item"
            whileHover={{ scale: 1.02 }}
          >
            <h3>
              <FaCodeBranch /> Reinforcing Bank Marketing Strategies using Python (Spring 2024)
            </h3>
            <ul>
              <li>Analyzed a banking marketing campaign dataset to predict term deposit subscriptions using machine learning models like Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, SVM, KNN, neural network and XGBoost models. Identified key demographics influencing subscription rates. Targeted financial products and educational initiatives, optimized call duration for better engagement. Enhanced marketing strategy effectiveness and campaign outcomes.</li>
              <li>Performed data preprocessing with SMOTE and Exploratory Data Analysis (EDA) to derive pre modelling insights.</li>
            </ul>
          </motion.div>
          <motion.div
            className="project-item"
            whileHover={{ scale: 1.02 }}
          >
            <h3>
              <FaCodeBranch /> Fraud Job Identification using SAS enterprise miner (Spring 2024)
            </h3>
            <ul>
              <li>Using log and entropy text filter, achieved accuracy of 86% to correctly identify if a job posting on a portal is a fraud job or not based on the text used.</li>
            </ul>
          </motion.div>
          <motion.div
            className="project-item"
            whileHover={{ scale: 1.02 }}
          >
            <h3>
              <FaCodeBranch /> TMDB Exploring the Trend using JMP (Fall 2023)
            </h3>
            <ul>
              <li>Developed and implemented predictive models using Boosted Tree and Neural Network algorithms to forecast movie revenue, achieving decent accuracy of 66.6% in validation and test sets.</li>
              <li>Conducted comprehensive data analysis, cleaning, and visualization on a large dataset (945,123 rows and 23 columns) from The Movie Database (TMDb) to identify key factors influencing box office success.</li>
            </ul>
          </motion.div>
           <motion.div
            className="project-item"
            whileHover={{ scale: 1.02 }}
          >
            <h3>
              <FaCodeBranch /> Automatic Resume Filter (Summer 2021)
            </h3>
            <ul>
              <li>Independently developed a webapp to filter out a bunch of resume files of set format based on technologies selected by the user; the technologies used were Python, Flask, NLP</li>
            </ul>
          </motion.div>
          <motion.div
            className="project-item"
            whileHover={{ scale: 1.02 }}
          >
            <h3>
              <FaCodeBranch /> Embedded Lab Asset Management Tool (April 2021)
            </h3>
            <ul>
              <li>In a team of 4 members, we developed a console app to manage and track assets of the embedded lab for keeping tabs on who is using it at present.</li>
               <li>The individual role was to develop the Data access layer and business layer partially; the system was developed using C# (.NET framework) and SQL server.</li>
            </ul>
          </motion.div>
          <motion.div
            className="project-item"
            whileHover={{ scale: 1.02 }}
          >
            <h3>
              <FaCodeBranch /> Personality Trait Detection using Machine Learning (Winter 2020)
            </h3>
            <ul>
              <li>Part of a 4-member team that developed a website with python as the backend and implemented an RNN model with high accuracy of 92% to predict the personality type of a person using a questionnaire system.</li>
              <li>Worked on developing the front end and SGD logistic regression model; the backend was developed using Jupyter Notebook, Python, and libraries such as TensorFlow, NumPy, pandas, and Sklearn.</li>
            </ul>
          </motion.div>
        </motion.section>
      );
    }

    export default Projects;
