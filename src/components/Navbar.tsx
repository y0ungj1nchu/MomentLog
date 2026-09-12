import React from 'react';

interface NavbarProps {
  onReset?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReset }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 py-3.5 flex justify-between items-center">
        {/* Logo: 클릭 시 첫 화면으로 이동 */}
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none transition-transform active:scale-95"
          aria-label="첫 화면으로 돌아가기"
          title="첫 화면으로 이동"
        >
          <img
            src="/logo.png"
            alt="모먼트로그 로고"
            className="w-9 h-9 rounded-xl object-contain shadow-sm shadow-blue-100 group-hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-bold tracking-tight gradient-text">모먼트로그</span>
        </button>
      </div>
    </nav>
  );
};

