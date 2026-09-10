import React, { useState } from 'react';
import { MoodOption } from '../types';

interface LandingStepProps {
  onStart?: () => void;
  onSelectMood?: (option: MoodOption) => void;
}

export const LandingStep: React.FC<LandingStepProps> = ({ onStart, onSelectMood }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleStart = () => {
    setIsPressed(true);

    // 부드러운 탭 피드백 후 질문 1단계(q1)로 이동
    setTimeout(() => {
      if (onStart) {
        onStart();
      } else if (onSelectMood) {
        onSelectMood({ id: 'A', name: '시작' });
      }
    }, 250);
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center bg-[#F8F9FE] px-2 py-3 sm:px-4 sm:py-6 fade-enter overflow-y-auto relative">
      {/* 배경 은은한 무드 블러 광원 효과 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-gradient-to-br from-blue-200/35 via-purple-200/30 to-pink-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* 스마트폰 프레임 형태의 메인 랜딩 포스터 카드 */}
      <div className="relative h-[92dvh] max-h-[880px] w-auto max-w-[94vw] aspect-[473/1024] rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden shadow-2xl border-[3px] sm:border-4 border-white bg-white select-none my-auto transition-transform">
        
        {/* 모먼트로그 공식 랜딩 그래픽 포스터 */}
        <img
          src="/landing_poster.png"
          alt="모먼트로그 - 나도 몰랐던 내 마음, AI는 알아볼까?"
          className="w-full h-full object-cover block pointer-events-none"
        />

        {/* '지금, 내 마음 확인하기 →' 인터랙티브 시작 버튼 터치/클릭 영역 */}
        <button
          type="button"
          onClick={handleStart}
          aria-label="지금, 내 마음 확인하기 시작"
          className={`absolute cursor-pointer rounded-full focus:outline-none transition-all duration-200 group ${
            isPressed
              ? 'scale-95 ring-4 ring-[#6A85F1] shadow-[0_0_24px_rgba(106,133,241,0.9)]'
              : 'hover:scale-[1.02] hover:shadow-[0_0_22px_rgba(193,152,240,0.7)]'
          }`}
          style={{
            left: '18.5%',
            top: '82.2%',
            width: '63%',
            height: '7.4%',
          }}
        >
          {/* 호버 시 은은한 반짝임 오버레이 */}
          <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/15 active:bg-white/25 transition-colors pointer-events-none" />
          
          {/* 시작 유도용 부드러운 펄스 글로우 테두리 */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none animate-pulse" />
        </button>
      </div>
    </section>
  );
};
