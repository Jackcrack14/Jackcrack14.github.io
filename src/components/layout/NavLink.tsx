import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export default function NavLink({ href, children, mobile = false }: NavLinkProps) {
  const baseClasses = "transition-colors duration-300";
  const mobileClasses = "block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md";
  const desktopClasses = "text-gray-300 hover:text-white";

  return (
    <a 
      href={href} 
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </a>
  );
}