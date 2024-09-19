import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Companies2 from '../Companies/Companies2';
import Course_Offers from './Course_Offers';
import WhatHM from './WhyInternship';
import HireTestimonial from './Testimonials';
import QuestionForm from './QuestionForm';
import { useLocation } from 'react-router-dom';
import OurFeatures from '../OurFeatures/OurFeatures';

const InternshipProgram = () => {
  const questionFormRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToQuestionForm) {
      // Scroll to the QuestionForm section
      questionFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <Header />
      <Companies2 />
      <Course_Offers />
      <OurFeatures />
      <WhatHM />
      <HireTestimonial />
      {/* Ref added to QuestionForm for smooth scrolling */}
      <div ref={questionFormRef}>
        <QuestionForm />
      </div>
    </div>
  );
};

export default InternshipProgram;
