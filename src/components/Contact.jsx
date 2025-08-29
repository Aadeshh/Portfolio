// Install EmailJS: npm install @emailjs/browser

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT } from '../constants';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'service_wd6bifn',     
        'template_x4w4wns',    
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: 'Aadesh',
        },
        'Xlmgtc9_t32xop8VO'      
      );

      console.log('SUCCESS!', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log('FAILED...', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id= 'Contact' className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">Get in Touch</h3>
            
            <div className="space-y-6">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center group">
                <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 group-hover:from-cyan-500/20 group-hover:to-purple-600/20 transition-all duration-300">
                  <FiMail className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="ml-4 text-gray-300 group-hover:text-cyan-400 transition-colors">{CONTACT.email}</span>
              </a>
              
              <div className="flex items-center group">
                <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
                  <FiPhone className="w-6 h-6 text-purple-400" />
                </div>
                <span className="ml-4 text-gray-300">{CONTACT.phoneNo}</span>
              </div>

              <div className="flex gap-4 mt-8">
                <a 
                  href={`https://${CONTACT.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 hover:from-cyan-500/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  <FiLinkedin className="w-6 h-6 text-cyan-400" />
                </a>
                <a 
                  href={`https://${CONTACT.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 hover:from-cyan-500/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  <FiGithub className="w-6 h-6 text-purple-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                required
              />
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400">Failed to send message. Please try again or email me directly.</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:opacity-90 transform hover:scale-[1.01]'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;