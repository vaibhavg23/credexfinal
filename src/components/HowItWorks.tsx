import React from 'react';

interface Step {
  icon: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: '📤', title: 'Upload License', desc: 'Send us your license details securely.' },
  { icon: '📊', title: 'Get Valuation', desc: 'Receive a fair market-based valuation.' },
  { icon: '💸', title: 'Get Paid', desc: 'Get fast, secure payouts directly to your account.' },
];

const HowItWorks = () =>  {
  return (
    <section className="py-20 bg-white text-center dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
