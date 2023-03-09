import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar';
import ConsultingPage from '../pages/consultingPage';
import HomePage from '../pages/homePage';
import SolutionsPage from '../pages/solutionsPage';
import AboutPage from '../pages/aboutPage';
import CareerPage from '../pages/careerPage';
import TechnologyPage from '../pages/technologyPage';
import GetInTouchPage from '../pages/contactPage';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/consulting" element={<ConsultingPage />} />
          <Route exact path="/solutions" element={<SolutionsPage />} />
          <Route exact path="/technology" element={<TechnologyPage />} />
          <Route exact path="/career" element={<CareerPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<GetInTouchPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
