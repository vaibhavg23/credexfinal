import React from 'react';

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: '⚡', title: 'Fast Payments', desc: 'Money in your account within 24 hours.' },
  { icon: '🔒', title: 'Secure Process', desc: 'Fully encrypted and compliant transactions.' },
  { icon: '📈', title: 'Top Valuations', desc: 'We offer best-in-class market pricing.' },
  { icon: '🤝', title: 'Reliable Support', desc: 'Dedicated team to assist you anytime.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-700 shadow rounded">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
