import React from 'react';

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
}