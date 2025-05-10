// softsell/components/ContactForm.tsx
'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  license: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', license: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thanks for your message! We will get back to you.');
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
          <input name="name" required placeholder="Name" onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="email" name="email" required placeholder="Email" onChange={handleChange} className="w-full p-3 border rounded" />
          <input name="company" placeholder="Company" onChange={handleChange} className="w-full p-3 border rounded" />
          <select name="license" required onChange={handleChange} className="w-full p-3 border rounded">
            <option value="">Select License Type</option>
            <option value="antivirus">Antivirus</option>
            <option value="design">Design Software</option>
            <option value="office">Office Suite</option>
          </select>
          <textarea name="message" required placeholder="Message" onChange={handleChange} className="w-full p-3 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </section>
  );
}
