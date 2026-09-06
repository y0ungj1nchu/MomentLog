import React from 'react';

export const ResultSection: React.FC = () => {
  return (
    <section id="result" className="pt-12 pb-16 md:pt-20 md:pb-24 bg-[#F8F9FE] relative overflow-hidden">
      {/* 배경 장식 광원 블러 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-200/40 to-purple-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-blue-100/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] p-7 sm:p-10 md:p-14 shadow-xl shadow-blue-900/5 border border-white flex flex-col items-center text-center">
          
          {/* 통통한 참새 형태의 파랑새 그래픽 SVG */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-4 flex items-center justify-center">
            {/* 반짝이는 마법 입자 (환상/이상향) */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <span className="absolute top-4 left-6 text-2xl sparkle-1">✨</span>
              <span className="absolute top-8 right-6 text-xl sparkle-2">💫</span>
              <span className="absolute bottom-6 left-10 text-lg sparkle-3">⭐</span>
            </div>

            {/* 디테일이 살아있는 파랑새 SVG */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 animate-float">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md overflow-visible">
                <defs>
                  <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="birdBody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8fd3f4" />
                    <stop offset="100%" stopColor="#6A85F1" />
                  </linearGradient>
                  <linearGradient id="birdWing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2d6bbd" />
                    <stop offset="100%" stopColor="#1B326B" />
                  </linearGradient>
                </defs>

                <g filter="url(#softGlow)">
                  {/* 참새 다리 1 (왼쪽) */}
                  <path d="M 85 155 L 95 185" stroke="#6b4c41" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M 95 185 L 80 195" stroke="#6b4c41" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M 95 185 L 110 195" stroke="#6b4c41" strokeWidth="4" strokeLinecap="round" fill="none" />

                  {/* 참새 다리 2 (오른쪽) */}
                  <path d="M 120 155 L 135 175" stroke="#6b4c41" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M 135 175 L 120 185" stroke="#6b4c41" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M 135 175 L 150 170" stroke="#6b4c41" strokeWidth="4" strokeLinecap="round" fill="none" />

                  {/* 꼬리깃 (3갈래 둥근 형태) */}
                  <path d="M 35 105 C 20 100, 15 110, 25 115 Z" fill="#2d6bbd" />
                  <path d="M 30 115 C 10 115, 10 130, 25 125 Z" fill="#2d6bbd" />
                  <path d="M 40 125 C 25 135, 30 145, 45 135 Z" fill="#2d6bbd" />
                  <path d="M 45 90 C 10 100, 10 150, 45 140 Z" fill="#2d6bbd" />

                  {/* 통통한 몸통 */}
                  <path
                    d="M 115 12 C 165 12, 185 50, 185 90 C 185 140, 145 165, 105 165 C 65 165, 35 140, 45 100 C 55 60, 75 12, 115 12 Z"
                    fill="url(#birdBody)"
                  />

                  {/* 부리 */}
                  <path d="M 175 46 L 196 50 L 178 62 Z" fill="#E25C47" stroke="#cb4738" strokeWidth="1.5" strokeLinejoin="round" />

                  {/* 눈동자 */}
                  <circle cx="150" cy="50" r="5.5" fill="#1F2937" />
                  <circle cx="152" cy="48" r="1.8" fill="#FFFFFF" />

                  {/* 발그레한 볼터치 */}
                  <circle cx="145" cy="66" r="7.5" fill="#C198F0" opacity="0.65" />

                  {/* 날개 */}
                  <path
                    d="M 125 75 C 145 115, 125 140, 85 140 C 55 140, 50 115, 75 90 C 95 70, 115 65, 125 75 Z"
                    fill="url(#birdWing)"
                  />

                  {/* 날개 안쪽 무늬 */}
                  <path d="M 85 105 C 105 95, 115 90, 125 90" stroke="#8fd3f4" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />
                  <path d="M 75 115 C 95 105, 110 100, 120 100" stroke="#8fd3f4" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />
                  <path d="M 85 125 C 100 115, 110 115, 110 115" stroke="#8fd3f4" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />
                </g>
              </svg>
            </div>
          </div>

          {/* 진단 결과 배지 */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6A85F1] animate-ping" />
            <span className="text-[#6A85F1] font-bold text-xs sm:text-sm tracking-wide">진단 결과</span>
          </div>

          {/* 진단 결과 헤드라인 */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight break-keep">
            내 진짜 인생은 분명 따로 있을 거라 믿는,<br className="hidden sm:block" />
            <span className="gradient-text">'이상향 집착형' 파랑새 증후군</span>입니다.
          </h2>

          {/* 본문 설명 및 타겟 공감 박스 */}
          <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl font-medium break-keep w-full">
            <p>
              더 멋진 기회를 기다리느라 지금의 소중한 순간들이 조금씩 눈에 밟히지 않나요?
            </p>

            {/* 타겟 공감 카드 */}
            <div className="gradient-bg-subtle p-5 sm:p-6 rounded-2xl border border-blue-100 shadow-sm mx-auto my-4 text-center">
              주로 <strong className="text-[#6A85F1] text-lg sm:text-xl font-black px-1">INFJ, INFP, ENFP</strong> 유형에게서
              <br className="sm:hidden" /> 이 특징이 가장 강하게 나타납니다.
            </div>

            <p className="text-gray-500 text-sm sm:text-base">
              현실의 한계보다 머릿속에 그린 이상향과 무한한 가능성을 먼저 바라보기 때문입니다.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
