import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactInfo {
  address: string[];
  email: string;
  phone: string;
}

const sendEmail = (event,templateParams) => {
  event.preventDefault();
  emailjs
    .send(
      'service_zf903fl',
      'template_lqbnx49',
      templateParams,
      '2-JjtipQ6rzIfl6W3'
    )
    .then(
      (response) => {
        console.log("SUCCESS!",response.status,response.text);
        alert('Message sent!');
      }
      ,(err)=>{
        console.log("FAILED...",err);
        alert('An error occured!');
      }
    );
}

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const contactInfo: ContactInfo = {
    address: [
      'IIT Jodhpur North America Foundation',
      '7901 4th St N',
      '#22486',
      'St. Petersburg, FL, USA 33702'
    ],
    email: [
      'secretary@iitjfoundation.org', 
      'donate@iitjfoundation.org', 
      'dora@iitjfoundation.org'
    ],
    phone: '+1 786-396-0746'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, subject, message });

    const template_params = {
      to_email: contactInfo.email[0],
      reply_to: email,
      client_email: email,
      cc_email: contactInfo.email[2],
      bcc_email: '',
      to_name: 'Secretary , IITJ-Foundation',
      from_name: name,
      subject: subject,
      message: message,
    }

    sendEmail(e,template_params);
    
  };

  return (
    <div className="container mx-auto px-4 py-8 font-suse">
      <h1 className="text-4xl font-bold text-center mb-8">CONTACT US</h1>
      <div className="h-1 w-16 bg-[#ff8c00] mx-auto mb-12"></div>
      
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-2">Our Address</h2>
            {contactInfo.address.map((line, index) => (
              <p key={index} className="text-center">{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <div className="bg-white shadow-md rounded-lg p-6">
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-center mb-2">Email Us</h2>
                {contactInfo.email.map((line) => {
                  return <p className="text-center">{line}</p>
                })}
              </div>
            </div>
            <div className="w-1/2 px-2 min-h-full">
              <div className="bg-white shadow-md rounded-lg p-6 min-h-full">
                <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-center mb-2">Call Us</h2>
                <p className="text-center">{contactInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 px-4 min-h-full">
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
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-[#000080] transition duration-300"
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