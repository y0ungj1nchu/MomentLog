import React from 'react';

interface FooterProps {
  onReset?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReset }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        {/* 모먼트로그 클릭 시 처음 화면으로 복귀 (부차적 안내 문구 없음) */}
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none transition-transform active:scale-95"
        >
          <img
            src="/logo.png"
            alt="모먼트로그 로고"
            className="w-6 h-6 rounded-lg object-contain shadow-sm shadow-blue-100 group-hover:scale-105 transition-transform"
          />
          <span className="text-lg font-bold text-gray-800 group-hover:text-[#6A85F1] transition-colors">
            모먼트로그 (MomentLog)
          </span>
        </button>

        <p className="text-xs text-gray-400">
          © 2026 MomentLog. 청년들의 마음을 보듬는 맞춤형 멘탈 케어. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
