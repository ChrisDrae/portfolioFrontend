import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import galleryData from '../../data/gallery.json';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="gallery"
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
            Photo Gallery
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light">
            Moments captured during performances, studio sessions, and creative collaborations.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryData.images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(index)}
              className="cursor-pointer group"
            >
              <div className="relative h-72 sm:h-80 rounded-sm overflow-hidden shadow-luxury dark:shadow-luxury-dark hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Placeholder fallback */}
                <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center absolute inset-0 group-hover:hidden">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl mb-2">📸</div>
                    <p className="text-neutral-600 dark:text-neutral-400 font-light">{image.title}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white dark:bg-dark-surface rounded-full p-3 shadow-luxury">
                      <svg
                        className="w-6 h-6 text-neutral-950 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-light text-neutral-950 dark:text-white">
                  {image.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 font-light mt-2">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <Modal
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
        >
          {selectedImage !== null && (
            <div className="p-8 max-w-4xl">
              <div className="space-y-6">
                {/* Image */}
                <img
                  src={galleryData.images[selectedImage].src}
                  alt={galleryData.images[selectedImage].title}
                  className="w-full rounded-sm shadow-luxury dark:shadow-luxury-dark object-cover max-h-96"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Placeholder fallback */}
                <div
                  className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-sm p-12 text-center min-h-96 flex flex-col items-center justify-center shadow-luxury dark:shadow-luxury-dark"
                  style={{ display: galleryData.images[selectedImage].src && !galleryData.images[selectedImage].src.includes('/images/') ? 'flex' : 'none' }}
                >
                  <div className="text-8xl mb-6">📸</div>
                  <h3 className="text-2xl md:text-3xl font-light text-neutral-950 dark:text-white mb-4">
                    {galleryData.images[selectedImage].title}
                  </h3>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-neutral-950 dark:text-white mb-4">
                    {galleryData.images[selectedImage].title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-light">
                    {galleryData.images[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;
