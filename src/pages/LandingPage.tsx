import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import DarkModeToggle from '../components/DarkModeToggle';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <DarkModeToggle />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
  );
};

export default LandingPage;
