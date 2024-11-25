import { motion } from 'framer-motion';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}