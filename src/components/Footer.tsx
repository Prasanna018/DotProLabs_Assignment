import { Coins } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#0f1923] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coins className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Moonex</span>
            </div>
            <p className="text-gray-400">
              The next generation of decentralized trading
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#roadmap" className="hover:text-yellow-400">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faqs" className="hover:text-yellow-400">FAQs</a></li>
              <li><a href="#docs" className="hover:text-yellow-400">Documentation</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1a2634] px-4 py-2 rounded-lg flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Moonex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}