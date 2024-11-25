import { motion } from 'framer-motion';
import { Coins, Menu, X } from 'lucide-react';
import React from 'react';
import { MobileNavLink } from './MobileNavLink';
import { NavLink } from './NavLink';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  return (
    <>
      <nav className="fixed w-full z-50 bg-opacity-90 bg-[#1a2634] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Coins className="h-8 w-8 text-yellow-400" />
                <span className="text-xl font-bold">Moonex</span>
              </motion.div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About Us</NavLink>
                <NavLink href="#roadmap">Roadmap</NavLink>
                <NavLink href="#faqs">FAQs</NavLink>
                <NavLink href="#contact">Contact Us</NavLink>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold"
            >
              Connect Wallet
            </motion.button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 z-40 bg-[#1a2634] pt-16"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#about">About Us</MobileNavLink>
            <MobileNavLink href="#roadmap">Roadmap</MobileNavLink>
            <MobileNavLink href="#faqs">FAQs</MobileNavLink>
            <MobileNavLink href="#contact">Contact Us</MobileNavLink>
          </div>
        </motion.div>
      )}
    </>
  );
}