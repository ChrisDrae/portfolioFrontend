import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import portfolioData from '../../data/portfolio.json';
import { IoMusicalNotes } from 'react-icons/io5';

const Portfolio: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<number>(0);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="portfolio"
      className="py-28 md:py-40 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
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
            My Music
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light">
            Listen to my latest tracks, albums, and collaborations on your favorite streaming platform.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Main Track Display */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 md:mb-32"
        >
          <Card variant="default">
            <div className="space-y-8">
              {/* Featured Track Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-sm flex items-center justify-center shadow-luxury">
                      <IoMusicalNotes size={40} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-light text-neutral-950 dark:text-white">
                      {portfolioData.tracks[selectedTrack].title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-light">
                      Released: {new Date(portfolioData.tracks[selectedTrack].releaseDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                  {portfolioData.tracks[selectedTrack].description}
                </p>
              </div>

              {portfolioData.tracks[selectedTrack].spotifyUrl.includes('YOUR_SPOTIFY_TRACK_ID_HERE') ? (
                <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-sm p-10 md:p-12 flex items-center justify-center min-h-96 shadow-luxury dark:shadow-luxury-dark">
                  <div className="text-center space-y-4">
                    <div className="text-7xl md:text-8xl">🎵</div>
                    <div className="space-y-3">
                      <p className="text-lg font-light text-neutral-950 dark:text-white">
                        Spotify Embed Needed
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                        Update portfolio.json with your Spotify embed URL:
                      </p>
                      <code className="inline-block bg-neutral-200 dark:bg-neutral-800 px-4 py-2 rounded-sm text-xs break-all font-mono">
                        https://open.spotify.com/embed/track/[TRACK_ID]?utm_source=generator
                      </code>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: "12px" }}
                  src={portfolioData.tracks[selectedTrack].spotifyUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              )}

              {/* Streaming Links */}
              <div className="flex flex-wrap gap-4 justify-start pt-4">
                <a
                  href={portfolioData.tracks[selectedTrack].spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300 shadow-luxury"
                >
                  <span>🎵</span> Listen on Spotify
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tracks List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {portfolioData.tracks.map((track, index) => (
            <motion.div
              key={track.id}
              variants={itemVariants}
              onClick={() => setSelectedTrack(index)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedTrack === index ? 'ring-2 ring-gold-500' : ''
              }`}
            >
              <Card
                hoverable={true}
                variant={selectedTrack === index ? 'subtle' : 'default'}
                className={selectedTrack === index ? 'bg-gold-50/50 dark:bg-gold-900/10' : ''}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-sm flex items-center justify-center transition-all ${
                        selectedTrack === index
                          ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-luxury'
                          : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
                      }`}
                    >
                      <IoMusicalNotes size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-light text-neutral-950 dark:text-white truncate">
                        {track.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light">
                        {new Date(track.releaseDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 font-light">
                    {track.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-8 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-sm text-center"
        >
          <p className="text-sm text-neutral-700 dark:text-neutral-300 font-light">
            💡 <strong className="font-medium">Pro Tip:</strong> To embed Spotify players, replace the placeholders with your actual Spotify embed links.
            Get embed codes from Spotify by right-clicking on any track and selecting "Share" → "Copy Spotify URI".
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
