import React from 'react';

// Define the type for each testimonial
interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jane Doe',
    role: 'CTO',
    company: 'TechCorp',
    review: 'SoftSell helped us recover value from unused tools fast and efficiently.',
  },
  {
    name: 'John Smith',
    role: 'IT Manager',
    company: 'InnoWorks',
    review: 'The service was intuitive and support was stellar. Highly recommend!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">Customer Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
            <p className="italic mb-4">"{t.review}"</p>
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.role}, {t.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
