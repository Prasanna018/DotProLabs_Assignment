import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { FaqItem } from './components/FaqItem';
import { Footer } from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2634] via-[#1d2a3a] to-[#1a2634] text-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Trusted Multi-Chain
              <span className="block text-yellow-400">DEX Platform</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold"
              >
                Connect Wallet
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold"
              >
                Trade Crypto
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Moonex</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the future of decentralized trading with our cutting-edge platform
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Find answers to common questions about Moonex</p>
          </motion.div>

          <div className="space-y-4">
            <FaqItem
              question="What is Moonex?"
              answer="Moonex is a decentralized exchange platform that enables users to trade, earn, and own cryptocurrency across multiple blockchain networks."
            />
            <FaqItem
              question="How do I start trading?"
              answer="To start trading, connect your wallet and deposit your preferred cryptocurrency. You can then start trading immediately."
            />
            <FaqItem
              question="Which chains are supported?"
              answer="We currently support major chains including Ethereum, Binance Smart Chain, and Polygon, with more chains coming soon."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;