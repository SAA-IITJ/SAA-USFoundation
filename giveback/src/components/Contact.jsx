import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

interface ContactInfo {
  address: string[];
  email: string;
  phone: string;
}

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const contactInfo: ContactInfo = {
    address: [
      'IIT Kanpur Foundation',
      '3790 El Camino Real, #1038',
      'Palo Alto, CA 94306'
    ],
    email: 'cfo@iitkfoundation.org',
    phone: '+16505078719'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, subject, message });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">CONTACT US</h1>
      <div className="h-1 w-16 bg-teal-500 mx-auto mb-12"></div>
      
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-2">Our Address</h2>
            {contactInfo.address.map((line, index) => (
              <p key={index} className="text-center">{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <div className="bg-white shadow-md rounded-lg p-6">
                <Mail className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-center mb-2">Email Us</h2>
                <p className="text-center">{contactInfo.email}</p>
              </div>
            </div>
            <div className="w-1/2 px-2">
              <div className="bg-white shadow-md rounded-lg p-6">
                <Phone className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-center mb-2">Call Us</h2>
                <p className="text-center">{contactInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 px-4">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border rounded"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full p-2 border rounded"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;