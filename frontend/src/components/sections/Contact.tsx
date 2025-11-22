import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { sendContactEmail } from '../../services/api';
import type { ContactFormData } from '../../services/api';
import { IoMail, IoCheckmarkDone, IoAlert } from 'react-icons/io5';

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle');
      await sendContactEmail(data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send email. Please try again.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-40 bg-white dark:bg-dark-bg transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-neutral-950 dark:text-white mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-8" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card variant="subtle">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-sm flex items-center justify-center shadow-luxury">
                    <IoMail size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-light text-neutral-950 dark:text-white mb-2 text-lg">Email</h3>
                    <a
                      href="mailto:eleusisoff@gmail.com"
                      className="text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors duration-300 font-light"
                    >
                      eleusisoff@gmail.com
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-6 bg-gold-50 dark:bg-gold-900/10 border border-gold-200 dark:border-gold-800/30 rounded-sm">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 font-light">
                    <strong className="font-medium">Response Time:</strong> I typically respond to inquiries within 24-48 hours.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="font-light text-neutral-950 dark:text-white text-lg">Other Ways to Connect</h3>
                  <ul className="space-y-3 text-sm font-light">
                    <li>
                      <a href="#" className="text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors duration-300">
                        Follow on Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors duration-300">
                        Subscribe on YouTube
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors duration-300">
                        Connect on LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card variant="subtle">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-gold-50 dark:bg-gold-900/10 border border-gold-200 dark:border-gold-800/30 rounded-sm flex items-center gap-4"
                  >
                    <IoCheckmarkDone className="text-gold-600 dark:text-gold-400 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-light text-gold-900 dark:text-gold-200">Email Sent!</p>
                      <p className="text-sm text-gold-800 dark:text-gold-300 font-light">Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-sm flex items-center gap-4"
                  >
                    <IoAlert className="text-red-500 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-light text-red-800 dark:text-red-300">Error</p>
                      <p className="text-sm text-red-700 dark:text-red-400 font-light">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                {/* Name Field */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-5 py-3 rounded-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 font-light"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 font-light">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-5 py-3 rounded-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 font-light"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 font-light">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project inquiry"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-5 py-3 rounded-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 font-light"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 font-light">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-3">
                  <label className="block text-sm font-light text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                    className="w-full px-5 py-3 rounded-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 resize-none font-light"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 font-light">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
