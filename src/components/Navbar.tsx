import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <a href="#result" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="모먼트로그 로고"
            className="w-9 h-9 rounded-xl object-contain shadow-sm shadow-blue-100 group-hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-bold tracking-tight gradient-text">모먼트로그</span>
        </a>
      </div>
    </nav>
  );
};
