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

    // 부드러운 탭 피드백 후 1단계 질문(q1)으로 전환
    setTimeout(() => {
      if (onStart) {
        onStart();
      } else if (onSelectMood) {
        onSelectMood({ id: 'A', name: '시작' });
      }
    }, 240);
  };

  return (
    <section className="min-h-[100dvh] w-full flex flex-col justify-start sm:justify-center items-center bg-[#F4F5FB] px-2 py-2 sm:px-4 sm:py-6 fade-enter overflow-y-auto overflow-x-hidden relative">
      {/* 배경 장식 은은한 파스텔 광원 블러 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-gradient-to-br from-blue-200/35 via-purple-200/30 to-pink-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* 스마트폰 목업 형태의 메인 랜딩 포스터 카드 (반응형 비율 최적화) */}
      <div className="landing-card relative min-h-[90dvh] sm:min-h-0 sm:h-[95dvh] max-h-none sm:max-h-[920px] w-full max-w-[425px] rounded-[2rem] sm:rounded-[3rem] p-3.5 min-[380px]:p-5 sm:p-6 shadow-2xl border-[3px] sm:border-4 border-white bg-gradient-to-b from-[#FAF8FF] via-[#FDF9FF] to-[#FFF5FA] flex flex-col justify-between overflow-hidden select-none my-auto">
        
        {/* 좌측 하단 장식용 리본 루프 라인 SVG */}
        <svg
          className="absolute -bottom-4 -left-6 w-28 h-28 pointer-events-none opacity-50 overflow-visible"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M 10 90 C 20 60, 45 40, 35 25 C 25 10, 5 35, 20 55 C 35 75, 75 80, 95 65"
            stroke="#C4B5FD"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* 1. 상단 브랜딩 & 로고 영역 */}
        <div className="flex flex-col items-center text-center pt-1 sm:pt-2 relative z-10">
          
          {/* 모먼트로그 공식 심볼 마크 SVG */}
          <div className="landing-brand-logo relative w-11 h-11 min-[380px]:w-12 min-[380px]:h-12 sm:w-14 sm:h-14 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="logoSymbolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5575F5" />
                  <stop offset="50%" stopColor="#936DF7" />
                  <stop offset="100%" stopColor="#ED62A8" />
                </linearGradient>
              </defs>

              {/* 우측 상단 반짝이는 별빛 */}
              <g transform="translate(68, 12)">
                <path
                  d="M 6 0 Q 6 6 12 6 Q 6 6 6 12 Q 6 6 0 6 Q 6 6 6 0 Z"
                  fill="#ED62A8"
                />
                <circle cx="15" cy="2" r="1.5" fill="#ED62A8" />
              </g>

              {/* 시계/말풍선 외곽 라인 */}
              <path
                d="M 28 72 C 16 60 18 36 30 24 C 42 14 58 14 70 24 C 82 36 84 60 72 72"
                stroke="url(#logoSymbolGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />

              {/* 하단 펼쳐진 책 라인 */}
              <path
                d="M 25 76 C 35 68 44 70 50 75 C 56 70 65 68 75 76"
                stroke="url(#logoSymbolGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 27 82 C 36 74 44 76 50 81 C 56 76 64 74 73 82"
                stroke="url(#logoSymbolGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* 시계 바늘 (L자 10:10 각도) */}
              <path
                d="M 48 34 L 48 48 L 59 44"
                stroke="#8B5CF6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* 시계 내부 우측 3개의 도트 */}
              <circle cx="68" cy="42" r="2.2" fill="#A855F7" />
              <circle cx="67" cy="54" r="2.2" fill="#C084FC" />
              <circle cx="58" cy="62" r="2.2" fill="#E879F9" />
            </svg>
          </div>

          {/* 브랜드 타이포그래피 */}
          <h2 className="landing-brand-title text-xl min-[380px]:text-2xl sm:text-[1.65rem] font-black text-[#1E293B] tracking-tight mt-0.5 sm:mt-1">
            모먼트로그
          </h2>
          <span className="text-[9px] min-[380px]:text-[10px] font-bold text-gray-400 tracking-[0.28em] uppercase -mt-0.5">
            M O M E N T L O G
          </span>
          <p className="text-[10px] min-[380px]:text-[11px] sm:text-xs font-medium text-gray-500 tracking-tight mt-0.5">
            순간을 기록하고, 나를 이해하는 시간
          </p>
        </div>

        {/* 2. 메인 헤드라인 카피 */}
        <div className="text-center my-1 sm:my-2 relative z-10 flex flex-col items-center">
          <h3 className="landing-headline-sub text-lg min-[360px]:text-xl sm:text-2xl md:text-[1.7rem] font-extrabold text-[#1E293B] tracking-tight">
            나도 몰랐던 내 마음,
          </h3>

          <div className="relative inline-block mt-0.5">
            <h1 className="landing-headline-main text-2xl min-[360px]:text-3xl min-[400px]:text-[2.25rem] sm:text-4xl md:text-[2.6rem] font-black tracking-tight">
              <span className="bg-gradient-to-r from-[#4F75FF] via-[#7C4DFF] to-[#F43F9E] bg-clip-text text-transparent">
                AI는 알아볼까?
              </span>
            </h1>

            {/* AI는 알아볼까? 하단 손그림 물결 언더라인 SVG */}
            <svg
              className="w-full h-2.5 sm:h-3 -mt-0.5 sm:-mt-1 overflow-visible"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M 5 6 Q 50 1 100 6 T 195 6"
                stroke="url(#underlineGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="50%" stopColor="#C084FC" />
                  <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* 3. 중앙 비주얼: 스마트폰 + 귀여운 캐릭터 + 6대 감정 플로팅 캡슐 */}
        <div className="landing-phone-visual relative w-full flex-1 flex items-center justify-center my-0.5 sm:my-1 min-h-[255px] min-[360px]:min-h-[285px] sm:min-h-[360px]">
          
          {/* 스마트폰 및 말풍선 통합 래퍼 (말풍선들이 사각형 경계에 자연스럽게 걸치도록 기준 컨테이너 역할) */}
          <div className="landing-phone-box relative w-[180px] min-[360px]:w-[198px] min-[400px]:w-[218px] sm:w-[230px] h-[280px] min-[360px]:h-[315px] min-[400px]:h-[340px] sm:h-[375px]">

            {/* 중앙 스마트폰 디바이스 프레임 (세로로 긴 슬림 비율) */}
            <div className="w-full h-full rounded-[2rem] sm:rounded-[2.7rem] border-[4px] sm:border-[6px] border-white shadow-xl shadow-purple-900/10 bg-gradient-to-b from-white via-[#FAF5FF]/80 to-[#EFF6FF]/70 backdrop-blur-md flex flex-col items-center pt-3 sm:pt-4 overflow-hidden relative z-10">
              
              {/* 폰 상단 미니 로고 & 인사말 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 opacity-85">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M 28 72 C 16 60 18 36 30 24 C 42 14 58 14 70 24 C 82 36 84 60 72 72"
                      stroke="#936DF7"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 25 76 C 35 68 44 70 50 75 C 56 70 65 68 75 76"
                      stroke="#936DF7"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 48 34 L 48 48 L 59 44"
                      stroke="#936DF7"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <p className="text-[9px] min-[360px]:text-[10px] sm:text-[11px] text-gray-400 font-medium mt-0.5 leading-tight">
                  오늘도<br />수고했어요 :)
                </p>
              </div>

              {/* 폰 하단에서 고개를 빼꼼 내민 귀여운 3D 젤리 캐릭터 */}
              <div className="absolute -bottom-2 inset-x-0 flex justify-center items-end">
                <div className="relative w-32 min-[360px]:w-36 sm:w-44 h-26 min-[360px]:h-28 sm:h-34">
                  <svg viewBox="0 0 160 120" className="w-full h-full overflow-visible">
                    <defs>
                      {/* 캐릭터 3D 볼륨감 그라데이션 */}
                      <linearGradient id="blobBodyGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="35%" stopColor="#F5EDFF" />
                        <stop offset="70%" stopColor="#E9D8FD" />
                        <stop offset="100%" stopColor="#D6BCFA" />
                      </linearGradient>
                      <radialGradient id="blushGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#F472B6" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#F472B6" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* 머리 위 즐거운 반짝임 방사선 3개 */}
                    <line x1="62" y1="22" x2="55" y2="12" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
                    <line x1="80" y1="17" x2="80" y2="6" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="98" y1="22" x2="105" y2="12" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />

                    {/* 통통하고 둥근 젤리 몸통 */}
                    <path
                      d="M 25 105 C 25 38, 135 38, 135 105 Z"
                      fill="url(#blobBodyGrad)"
                      filter="drop-shadow(0 4px 10px rgba(168, 85, 247, 0.15))"
                    />

                    {/* 반짝이는 두 눈 (세로 타원형 캡슐 눈) */}
                    <rect x="52" y="60" width="8.5" height="18" rx="4.25" fill="#1E293B" />
                    <rect x="99.5" y="60" width="8.5" height="18" rx="4.25" fill="#1E293B" />

                    {/* 눈동자 상단 하이라이트 빛망울 */}
                    <circle cx="55" cy="64" r="2.2" fill="#FFFFFF" />
                    <circle cx="102.5" cy="64" r="2.2" fill="#FFFFFF" />

                    {/* 발그레한 볼터치 */}
                    <circle cx="43" cy="74" r="8" fill="url(#blushGlow)" />
                    <circle cx="117" cy="74" r="8" fill="url(#blushGlow)" />

                    {/* 책상 위에 얹은 양 손(앞발) */}
                    <ellipse cx="44" cy="98" rx="13" ry="8" fill="#FFFFFF" stroke="#EDE9FE" strokeWidth="2.5" />
                    <ellipse cx="116" cy="98" rx="13" ry="8" fill="#FFFFFF" stroke="#EDE9FE" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>

              {/* 하단 화이트 책상/포그라운드 선반 */}
              <div className="absolute -bottom-1 inset-x-0 h-5 sm:h-6 bg-white/95 border-t border-purple-50 shadow-sm" />
            </div>

            {/* 좌측 3대 감정 플로팅 캡슐 (사각형 좌측 경계선에 걸치도록 배치) */}
            {/* 1. 행복한 ☺️ */}
            <div className="absolute left-0 -translate-x-[46%] top-[12%] sm:top-[13%] z-20 pointer-events-none">
              <div className="anim-capsule-1 pointer-events-auto">
                <div className="bg-white/95 backdrop-blur-md px-2 min-[360px]:px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md border border-purple-100/90 text-gray-700 text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span>행복한</span>
                  <span className="text-xs sm:text-sm">☺️</span>
                </div>
              </div>
            </div>

            {/* 2. 지친... 😔 */}
            <div className="absolute left-0 -translate-x-[50%] top-[42%] sm:top-[43%] z-20 pointer-events-none">
              <div className="anim-capsule-2 pointer-events-auto">
                <div className="bg-white/95 backdrop-blur-md px-2 min-[360px]:px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md border border-blue-100/90 text-gray-600 text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span>지친...</span>
                  <span className="text-xs sm:text-sm">😔</span>
                </div>
              </div>
            </div>

            {/* 3. 설레는 💖 */}
            <div className="absolute left-0 -translate-x-[42%] top-[70%] sm:top-[71%] z-20 pointer-events-none">
              <div className="anim-capsule-3 pointer-events-auto">
                <div className="bg-white/95 backdrop-blur-md px-2 min-[360px]:px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md border border-pink-100/90 text-gray-700 text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span>설레는</span>
                  <span className="text-xs sm:text-sm">💖</span>
                </div>
              </div>
            </div>

            {/* 우측 3대 감정 플로팅 캡슐 (사각형 우측 경계선에 걸치도록 배치) */}
            {/* 4. 복잡한 🌀 */}
            <div className="absolute right-0 translate-x-[46%] top-[18%] sm:top-[19%] z-20 pointer-events-none">
              <div className="anim-capsule-4 pointer-events-auto">
                <div className="bg-white/95 backdrop-blur-md px-2 min-[360px]:px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md border border-purple-100/90 text-gray-700 text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span>복잡한</span>
                  <span className="text-xs sm:text-sm">🌀</span>
                </div>
              </div>
            </div>

            {/* 5. 괜찮은 것 같아 🍃 */}
            <div className="absolute right-0 translate-x-[48%] top-[46%] sm:top-[47%] z-20 pointer-events-none">
              <div className="anim-capsule-5 pointer-events-auto">
                <div className="bg-white/95 backdrop-blur-md px-2 min-[360px]:px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md border border-emerald-100/90 text-gray-700 text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span>괜찮은 것 같아</span>
                  <span className="text-xs sm:text-sm">🍃</span>
                </div>
              </div>
            </div>

            {/* 6. 조금 불안해 ☁️ */}
            <div className="absolute right-0 translate-x-[44%] top-[72%] sm:top-[73%] z-20 pointer-events-none">
              <div className="anim-capsule-6 pointer-events-auto">
                <div className="bg-white/95 backdrop-blur-md px-2 min-[360px]:px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md border border-slate-100/90 text-gray-600 text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span>조금 불안해</span>
                  <span className="text-xs sm:text-sm">☁️</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4. 하단 액션 & 시작 버튼 영역 */}
        <div className="w-full flex flex-col items-center pt-1 sm:pt-2 pb-1 sm:pb-0 relative z-20">
          
          {/* 지금, 여기서 잠깐 나를 돌아보는 시간 (버튼 위 1열 배치) */}
          <div className="text-center mb-1.5 sm:mb-2.5 text-[11px] min-[360px]:text-xs sm:text-[13px] font-semibold text-[#64748B] tracking-tight flex items-center justify-center gap-1 select-none">
            <span>지금 여기서 잠깐 나를 돌아보는 시간</span>
            <span className="text-[#A855F7]">♥</span>
          </div>

          {/* 대형 시작 버튼 '지금, 내 마음 확인하기 →' */}
          <button
            type="button"
            onClick={handleStart}
            aria-label="지금, 내 마음 확인하기 시작"
            className={`landing-btn w-full max-w-[360px] py-3 min-[360px]:py-3.5 sm:py-4 px-4 sm:px-6 rounded-full bg-gradient-to-r from-[#5B7BF7] via-[#8F65F6] to-[#EE59AB] text-white font-extrabold text-sm min-[360px]:text-base sm:text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group ${
              isPressed ? 'scale-95 ring-4 ring-[#8B5CF6]/50' : ''
            }`}
          >
            <span>지금, 내 마음 확인하기</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* 개발 중 안내 문구 및 방사형 스파크 */}
          <div className="text-center mt-2 sm:mt-2.5 text-[10px] min-[360px]:text-[11px] sm:text-xs text-gray-600 leading-snug">
            <div className="flex items-center justify-center gap-1 font-medium">
              <span className="text-[#818CF8] text-xs">✨</span>
              <span>현재 개발 중인 서비스입니다.</span>
            </div>
            <div className="font-bold text-gray-800 mt-0.5">
              여러분의 솔직한 의견이 필요해요!
            </div>
          </div>

          {/* 스마트폰 홈 바 인디케이터 라인 */}
          <div className="w-24 sm:w-28 h-1 bg-gray-300/80 rounded-full mx-auto mt-1.5 sm:mt-2.5 opacity-80" />
        </div>

      </div>
    </section>
  );
};

