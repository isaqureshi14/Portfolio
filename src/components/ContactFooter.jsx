import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paperclip, ArrowRight, Check, Send } from 'lucide-react';
import Magnetic from './Magnetic';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, // Load key from environment variables
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Isa Portfolio"
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('idle');
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert('Network error. Please check your internet connection and try again.');
    }
  };

  return (
    <section 
      id="contact-footer" 
      className="py-24 lg:py-32 bg-bg-light border-t border-bg-light/20 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          
          {/* Left Column: Let's Talk */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-text-muted text-xs font-semibold tracking-widest uppercase mb-4">
              &mdash; Get In Touch
            </span>
            <h2 className="text-white text-3.5xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-none">
              Got a Project?<br/>Let's Talk.
            </h2>
            <p className="text-text-body text-sm sm:text-base leading-relaxed mb-8 font-light">
              Whether it's an internship, a freelance gig, or just a good idea &mdash; I'd love to hear about it. Fill out the form, or email me directly.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=isatanvirqureshi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-primary hover:text-white font-semibold text-sm tracking-wide transition-colors group custom-hover"
            >
              isatanvirqureshi@gmail.com 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>

          {/* Right Column: Underlined Form */}
          <div className="lg:col-span-6 lg:col-start-7 bg-bg-dark/20 p-8 rounded-2xl border border-text-body/5 relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="w-16 h-16 bg-brand-primary/10 border border-brand-primary/30 rounded-full flex items-center justify-center text-brand-primary mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-text-body text-sm font-light">
                    Thanks for reaching out, Isa will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name field */}
                  <div className="relative group w-full">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="What's your name?" 
                      className="w-full bg-transparent border-b border-text-body/20 py-3 text-white placeholder-text-body/40 focus:outline-none text-sm transition-colors focus:border-transparent" 
                    />
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-brand-primary -translate-x-1/2 transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  {/* Email field */}
                  <div className="relative group w-full">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email" 
                      className="w-full bg-transparent border-b border-text-body/20 py-3 text-white placeholder-text-body/40 focus:outline-none text-sm transition-colors focus:border-transparent" 
                    />
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-brand-primary -translate-x-1/2 transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  {/* Message field */}
                  <div className="relative group w-full">
                    <textarea 
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project" 
                      className="w-full bg-transparent border-b border-text-body/20 py-3 text-white placeholder-text-body/40 focus:outline-none text-sm transition-colors focus:border-transparent resize-none" 
                    />
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-brand-primary -translate-x-1/2 transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-between items-center pt-2">
                    <button 
                      type="button"
                      className="flex items-center gap-2 text-text-muted hover:text-white transition-colors text-xs font-mono tracking-wide custom-hover"
                      onClick={() => alert("File attachment simulated! (Placeholder)")}
                    >
                      <Paperclip className="w-4 h-4 text-brand-primary" />
                      Attach file
                    </button>

                    <Magnetic range={40} strength={0.4}>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`w-12 h-12 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-bg-dark flex items-center justify-center transition-all duration-300 shadow-lg shadow-brand-primary/10 disabled:opacity-50 disabled:cursor-not-allowed custom-hover`}
                        aria-label="Send Message"
                      >
                        {status === 'sending' ? (
                          <div className="w-5 h-5 border-2 border-bg-dark border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Send className="w-5 h-5 translate-x-[1px] -translate-y-[1px]" />
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Area */}
        <div className="border-t border-text-body/10 pt-16 flex flex-col items-center text-center gap-8">
          
          {/* Logo Mark (Gentle bobbing idle animation) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 100 100" className="w-12 h-12 fill-brand-primary">
              <path d="M30 65 C30 80, 50 90, 65 90 C80 90, 90 75, 90 60 C90 40, 70 20, 50 10 C45 8, 40 12, 42 17 C48 30, 50 40, 45 50 C40 60, 30 55, 30 65 Z" />
            </svg>
          </motion.div>

          {/* Sign-off phrase */}
          <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
            Thanks for scrolling &mdash; let's build something.
          </h3>

          {/* Repeated Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/isaqureshi14"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-text-body/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark hover:border-brand-primary transition-all duration-300 text-white custom-hover"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/isa-qureshi-90088b38a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-text-body/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark hover:border-brand-primary transition-all duration-300 text-white custom-hover"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=isatanvirqureshi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-text-body/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark hover:border-brand-primary transition-all duration-300 text-white custom-hover"
              aria-label="Email Me"
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>


          {/* Credits */}
          <span className="text-[10px] text-text-muted font-mono tracking-wider uppercase mt-4">
            &copy; {new Date().getFullYear()} Isa Qureshi &bull; Designed & Built with Love
          </span>

        </div>

      </div>
    </section>
  );
}
