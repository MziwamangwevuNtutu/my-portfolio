import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // 1. Use FormData as recommended by Web3Forms
      const form = new FormData(e.target);
      
      // 2. Append your specific Access Key
      form.append("access_key", "8bc33c95-a965-4e6a-82ca-8bf40e4c6e93");
      
      // 3. Optional: Add a custom subject line for your emails
      form.append("subject", "New Portfolio Message from " + formData.name);
      form.append("from_name", "Portfolio Contact Form");

      // 4. Send the request
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear React state
        e.target.reset(); // Clear the actual HTML form fields
      } else {
        setStatus('error');
        console.error('Form submission failed:', data);
      }
    } catch (error) {
      setStatus('error');
      console.error('Network error:', error);
    }
    
    // Reset status after 4 seconds so the user can submit again later
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have a question or want to work together? Fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Error Message UI */}
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center text-sm">
              Oops! Something went wrong. Please try again or email me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 ${
              status === 'success' 
                ? 'bg-green-600 text-white cursor-default' 
                : status === 'submitting'
                ? 'bg-indigo-400 text-white cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            {status === 'submitting' 
              ? 'Sending...' 
              : status === 'success' 
              ? '✓ Message Sent!' 
              : status === 'error'
              ? 'Try Again'
              : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;