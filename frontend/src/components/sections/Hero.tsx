import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-dark-bg transition-colors duration-300 overflow-hidden py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-12 md:space-y-16"
        >
          {/* Profile Image Placeholder */}
          <motion.div variants={itemVariants} className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="w-full h-full rounded-sm bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 p-1 shadow-luxury dark:shadow-luxury-dark">
              
                <img src='./_DSC3206.jpg'></img>
              
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-light text-neutral-950 dark:text-white leading-tight tracking-tighter">
              el3usis
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light tracking-widest uppercase">
              Musician · Instrumentalist · Producer
            </p>
          </motion.div>

          {/* Gold Accent Line */}
          <motion.div
            variants={itemVariants}
            className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
          />

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light"
          >
            Crafting timeless music with passion, precision, and innovation. Explore my journey through original compositions, collaborations, and creative endeavors that push artistic boundaries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Button
              variant="primary"
              size="lg"
              onClick={handleContactClick}
              className="w-full sm:w-auto"
            >
              Get in Touch
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('portfolio');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto"
            >
              Listen to My Work
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="pt-16 md:pt-20"
          >
            <p className="text-xs text-neutral-500 dark:text-neutral-600 mb-3 tracking-widest uppercase font-light">Scroll to explore</p>
            <svg
              className="w-5 h-5 mx-auto text-neutral-400 dark:text-neutral-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
