
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

      if (!serviceId || !templateId || !publicKey) {
        setMessage('✗ Email service is not configured.');
        return;
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);

      setMessage('✓ Message sent successfully!');
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      setMessage('✗ Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-6">
      <div className="max-w-2xl mx-auto glass p-8 sm:p-12 md:p-20 rounded-[3rem] border border-blue-500/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
        
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-6 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-center text-base sm:text-lg">
            Feel free to contact me for Project Works and internships.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">Your Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full bg-slate-900/50 border border-blue-500/50 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">Your Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full bg-slate-900/50 border border-blue-500/50 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">Your Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-slate-900/50 border border-blue-500/50 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              placeholder="Your Message..."
            ></textarea>
          </div>

          {/* Status Message */}
          {message && (
            <div className={`p-4 rounded-xl text-center font-medium ${
              message.includes('✓') 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              {message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-slate-950 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-sm sm:text-lg hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-indigo-500/20"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
