import React from 'react';
import { motion } from 'framer-motion';
import { IoMusicalNote, IoFlame, IoStar } from 'react-icons/io5';
import Card from '../ui/Card';

const About: React.FC = () => {
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
      transition: { duration: 0.8 },
    },
  };

  const highlights = [
    {
      icon: IoMusicalNote,
      title: 'Versatile Musician',
      description: 'Master of multiple instruments with diverse musical styles and genres.',
    },
    {
      icon: IoFlame,
      title: 'Production Excellence',
      description: 'Professional audio production with cutting-edge technology and techniques.',
    },
    {
      icon: IoStar,
      title: 'Creative Innovation',
      description: 'Pushing boundaries and creating unique sounds that resonate with audiences.',
    },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center mb-24 md:mb-32"
        >
          {/* Bio Text */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              With over a decade of experience in music production and instrumentation, I've dedicated
              my career to creating powerful, innovative soundscapes that move hearts and inspire minds.
            </p>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              My journey began in classrooms and concert halls, evolving into a passion for studio
              production and collaborative creation. I blend traditional musicianship with modern
              production techniques to deliver authentic, forward-thinking music.
            </p>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              Whether composing original pieces, producing for artists, or performing live, I bring
              meticulous attention to detail and an unwavering commitment to excellence in every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '100+', label: 'Happy Clients' },
              ].map(({ number, label }) => (
                <div key={label} className="text-center space-y-2">
                  <p className="text-3xl md:text-4xl font-light text-gold-600 dark:text-gold-400">{number}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light tracking-wide uppercase">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-[500px] rounded-sm overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center shadow-luxury dark:shadow-luxury-dark">
              <div className="text-center">
                <div className="text-9xl md:text-[120px] mb-6">🎸</div>
                <p className="text-neutral-600 dark:text-neutral-400 font-light">Your photo here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="subtle">
                  <div className="space-y-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-sm flex items-center justify-center shadow-luxury">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-neutral-950 dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
