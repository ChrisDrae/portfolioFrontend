import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { IoMenu, IoClose, IoMoon, IoSunny } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Gallery', 'Videos', 'Portfolio', 'Contact'];

  const handleNavClick = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-dark-surface border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ opacity: 0.7 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-neutral-950 dark:bg-white rounded-sm flex items-center justify-center">
              <span className="text-white dark:text-neutral-950 font-serif font-bold text-sm">E</span>
            </div>
            <span className="font-serif font-bold text-lg hidden sm:inline text-neutral-950 dark:text-white">el3usis</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ opacity: 0.7 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <IoSunny size={20} className="text-neutral-400" />
              ) : (
                <IoMoon size={20} className="text-neutral-600" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose size={24} />
              ) : (
                <IoMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-left px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
