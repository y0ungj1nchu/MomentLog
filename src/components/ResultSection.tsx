import React from 'react';
import { mbtiDataMap } from '../data/mbtiData';

interface ResultSectionProps {
  mbti?: string;
}

export const ResultSection: React.FC<ResultSectionProps> = ({ mbti = 'ENFP' }) => {
  const normalizedMbti = mbti.toUpperCase();
  const data = mbtiDataMap[normalizedMbti] || mbtiDataMap['ENFP'];

  return (
    <section id="result" className="pt-10 pb-16 md:pt-16 md:pb-24 bg-[#F8F9FE] relative overflow-hidden">
      {/* 배경 장식 광원 블러 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-200/40 to-purple-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-blue-100/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-12 shadow-2xl shadow-blue-900/5 border border-white flex flex-col items-center text-center">
          
          {/* 통통한 참새 형태의 파랑새 그래픽 SVG */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-2 flex items-center justify-center">
            {/* 반짝이는 마법 입자 (환상/이상향) */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <span className="absolute top-4 left-6 text-2xl sparkle-1">✨</span>
              <span className="absolute top-8 right-6 text-xl sparkle-2">💫</span>
              <span className="absolute bottom-6 left-10 text-lg sparkle-3">⭐</span>
            </div>

            {/* 디테일이 살아있는 파랑새 SVG */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 animate-float">
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

          {/* 상단 라벨 배지 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#6A85F1] animate-ping" />
            <span className="text-[#6A85F1] font-bold text-xs tracking-wider">
              파랑새 증후군 심리테스트 결과
            </span>
          </div>

          {/* MBTI 글자 초대형 강조 하이라이트 */}
          <div className="flex flex-col items-center mb-6 w-full">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1">
              <span className="text-3xl sm:text-4xl">{data.emoji}</span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-[#6A85F1] via-[#8B6BF7] to-[#C198F0] bg-clip-text text-transparent">
                {data.mbti}
              </h1>
            </div>

            {/* 유형 별칭 */}
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mt-1 mb-3">
              {data.nickname}
            </div>

            {/* 당신의 파랑새는 '새로운 가능성'입니다 */}
            <div className="inline-block px-4 py-2 rounded-xl bg-blue-50/90 border border-blue-100 text-gray-800 text-sm sm:text-base font-medium mb-3">
              당신의 파랑새는 <strong className="text-[#6A85F1] font-black">{data.bluebird}</strong>입니다.
            </div>

            {/* 내면의 독백 따옴표 */}
            <p className="text-gray-600 italic font-medium text-base sm:text-lg break-keep px-2">
              {data.quote}
            </p>
          </div>

          {/* 세로 1열 카드 섹션 (요청사항: 수직 방향으로 나란히 정렬) */}
          <div className="w-full space-y-4 text-left">
            
            {/* 블록 1: 이런 모습이 자주 보여요 */}
            <div className="bg-gradient-to-b from-blue-50/50 to-slate-50/30 border border-blue-100/90 rounded-2xl p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-gray-900 text-base sm:text-lg mb-3.5">
                <span className="w-7 h-7 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center text-sm">
                  🌟
                </span>
                <span>이런 모습이 자주 보여요</span>
              </div>
              <ul className="space-y-2.5">
                {data.traits.map((trait, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-200/80 text-blue-700 flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <span className="font-medium text-gray-800 break-keep">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 블록 2: ⚠️ 파랑새 위험신호 */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-base sm:text-lg mb-2.5">
                <span className="w-7 h-7 rounded-xl bg-amber-200/70 text-amber-800 flex items-center justify-center text-sm">
                  ⚠️
                </span>
                <span>파랑새 위험신호</span>
              </div>
              <p className="text-amber-950 font-medium text-sm sm:text-base leading-relaxed break-keep pl-1">
                {data.warning}
              </p>
            </div>

            {/* 블록 3: 💊 필요한 처방 */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-base sm:text-lg mb-2.5">
                <span className="w-7 h-7 rounded-xl bg-emerald-200/70 text-emerald-800 flex items-center justify-center text-sm">
                  💊
                </span>
                <span>필요한 처방</span>
              </div>
              <p className="text-emerald-950 font-semibold text-sm sm:text-base leading-relaxed break-keep pl-1">
                {data.prescription}
              </p>
            </div>

            {/* 블록 4: 💬 한마디 */}
            <div className="bg-gradient-to-r from-purple-50/90 via-blue-50/70 to-indigo-50/90 border border-purple-100 rounded-2xl p-5 sm:p-6 text-center shadow-xs">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 mb-2 px-2.5 py-0.5 rounded-full bg-white/80 border border-purple-100 shadow-xs">
                <span>💬</span>
                <span>한마디</span>
              </div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base leading-relaxed break-keep">
                {data.comment}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
