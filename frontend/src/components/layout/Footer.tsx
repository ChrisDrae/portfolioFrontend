import React from 'react';
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: IoLogoGithub, label: 'GitHub', href: '#' },
    { icon: IoLogoInstagram, label: 'Instagram', href: '#' },
    { icon: IoLogoTwitter, label: 'Twitter', href: '#' },
    { icon: IoLogoYoutube, label: 'YouTube', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-neutral-50 dark:bg-dark-surface border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-neutral-950 dark:text-white">el3usis</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Musician, Instrumentalist & Producer. Crafting timeless music with passion and precision.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-neutral-950 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Gallery', 'Videos', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-neutral-950 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:eleusisoff@gmail.com"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                >
                  eleusisoff@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 my-8" />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Eleusisoff. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ opacity: 0.6 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
