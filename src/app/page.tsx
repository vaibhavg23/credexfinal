// softsell/app/page.tsx
'use client';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import DarkModeToggle from '../components/DarkModeToggle';
import '../styles/themes.css';



export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <DarkModeToggle />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
      <footer className="text-center p-6 text-sm bg-gray-100 dark:bg-gray-800">
        &copy; 2025 SoftSell. All rights reserved
      </footer>
    </main>
  );
}
