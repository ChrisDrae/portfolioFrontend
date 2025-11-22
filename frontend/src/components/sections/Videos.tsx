import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import videosData from '../../data/videos.json';

const Videos: React.FC = () => {
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

  return (
    <section
      id="videos"
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
            Videos
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light">
            Watch performances, tutorials, and behind-the-scenes content from my creative journey.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {videosData.videos.map((video) => (
            <motion.div key={video.id} variants={itemVariants}>
              <Card variant="default">
                <div className="space-y-6">
                  {/* Video Placeholder */}
                  <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center group cursor-pointer shadow-luxury dark:shadow-luxury-dark">
                    <div className="text-center">
                      <div className="text-6xl md:text-7xl mb-2">🎬</div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                        Embed or link video here
                      </p>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-950 flex items-center justify-center shadow-luxury">
                        <svg
                          className="w-8 h-8 text-neutral-950 dark:text-white fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-light text-neutral-950 dark:text-white">
                      {video.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2 font-light">
                      {video.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* For actual video integration, replace with: */}
        {/* <iframe
          className="w-full aspect-video rounded-sm"
          src={video.url}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
      </div>
    </section>
  );
};

export default Videos;
