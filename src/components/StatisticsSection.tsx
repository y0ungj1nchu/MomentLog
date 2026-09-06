import React, { useState } from 'react';

interface TooltipState {
  visible: boolean;
  text: string;
  x: number;
  y: number;
}

export const StatisticsSection: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    text: '',
    x: 0,
    y: 0,
  });

  const handlePointHover = (e: React.MouseEvent<SVGGElement>, text: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const container = e.currentTarget.closest('#chart-area-container')?.getBoundingClientRect();
    if (container) {
      setTooltip({
        visible: true,
        text,
        x: rect.left - container.left + rect.width / 2,
        y: rect.top - container.top - 38,
      });
    }
  };

  const handlePointLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section className="py-16 md:py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 text-[#1B326B] font-bold text-xs sm:text-sm mb-3.5 border border-blue-100 shadow-sm">
            <span className="flex items-center justify-center w-5 h-5 rounded-full gradient-bg text-white shadow-sm">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            <span>🌿 "나만 힘든 걸까?" 고민했던 당신에게</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight break-keep">
            당신만 그런 것이 아닙니다.<br className="sm:hidden" />
            <span className="text-[#1B326B]"> 데이터로 보는 청년들의 심리 상태</span>
          </h3>
          <p className="text-gray-500 text-xs sm:text-base mt-2.5 break-keep max-w-xl mx-auto font-medium">
            지친 일상 속에서 방황하는 청년들의 진짜 목소리를 숫자로 확인해보세요
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* 차트 1: 직장인 퇴사증후군 픽토그램 */}
          <div className="bg-[#F8F9FE] rounded-[2.5rem] p-7 sm:p-10 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              
              {/* 사람 픽토그램 영역 (10명 중 6명 진남색 #1B326B, 모바일 5명씩 2줄) */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-5">
                  {/* 1~6번: 진남색 (#1B326B) */}
                  {[1, 2, 3, 4, 5, 6].map((idx) => (
                    <div
                      key={idx}
                      className="w-9 h-20 sm:w-11 sm:h-24 text-[#1B326B] hover:-translate-y-1.5 transition-transform duration-300 cursor-pointer"
                    >
                      <svg viewBox="0 0 100 200" fill="currentColor" className="w-full h-full drop-shadow">
                        <circle cx="50" cy="22" r="16" />
                        <path d="M 14 55 C 14 43, 28 43, 28 55 L 28 115 C 28 125, 14 125, 14 115 Z" />
                        <path d="M 72 55 C 72 43, 86 43, 86 55 L 86 115 C 86 125, 72 125, 72 115 Z" />
                        <path d="M 32 55 C 32 43, 68 43, 68 55 L 68 175 C 68 185, 54 185, 54 175 L 54 120 L 46 120 L 46 175 C 46 185, 32 185, 32 175 Z" />
                      </svg>
                    </div>
                  ))}

                  {/* 7~10번: 연그레이 (#D1D5DB) */}
                  {[7, 8, 9, 10].map((idx) => (
                    <div
                      key={idx}
                      className="w-9 h-20 sm:w-11 sm:h-24 text-gray-300 hover:-translate-y-1.5 transition-transform duration-300 cursor-pointer"
                    >
                      <svg viewBox="0 0 100 200" fill="currentColor" className="w-full h-full">
                        <circle cx="50" cy="22" r="16" />
                        <path d="M 14 55 C 14 43, 28 43, 28 55 L 28 115 C 28 125, 14 125, 14 115 Z" />
                        <path d="M 72 55 C 72 43, 86 43, 86 55 L 86 115 C 86 125, 72 125, 72 115 Z" />
                        <path d="M 32 55 C 32 43, 68 43, 68 55 L 68 175 C 68 185, 54 185, 54 175 L 54 120 L 46 120 L 46 175 C 46 185, 32 185, 32 175 Z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              {/* 텍스트 영역 */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                  &lt;직장인이 겪고 있는 증후군&gt;
                </span>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-3 break-keep">
                  직장인 10명 중 <span className="text-[#1B326B] font-black underline decoration-blue-300 decoration-wavy">6명(60%)</span>은<br />
                  '<span className="gradient-text">퇴사증후군</span>'을 겪는다
                </p>
                <p className="text-xs text-gray-400 font-medium">출처: 취업포털 사람인 설문조사</p>
              </div>

            </div>
          </div>

          {/* 하단 2열 그리드: 우울증 꺾은선 차트 & 파이 차트 */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* 차트 2: 청년기 우울증 환자 수 */}
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col justify-between relative overflow-hidden">
              <div className="mb-4">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-0.5">
                  &lt;청년기(19~39세) 우울증 환자 수&gt;
                </h4>
                <p className="text-xs text-gray-400">자료: 건강보험심사평가원 / 단위: 명</p>
              </div>

              {/* 225% 증가 뱃지 */}
              <div className="absolute top-6 right-6 bg-[#1B326B] text-white px-3.5 py-1.5 font-black text-sm sm:text-base rounded-xl shadow-lg transform -rotate-12 border border-white/30 z-20 animate-pulse-slow">
                225% ⬆
              </div>

              {/* 자체 고정밀 SVG Area Chart */}
              <div className="relative w-full h-64 sm:h-72 mt-2" id="chart-area-container">
                {/* 툴팁 */}
                {tooltip.visible && (
                  <div
                    className="absolute z-30 bg-gray-900 text-white text-xs py-1.5 px-3 rounded-xl shadow-xl pointer-events-none transform -translate-x-1/2 transition-all duration-150"
                    style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
                  >
                    <span className="font-bold">{tooltip.text}</span>
                  </div>
                )}

                <svg viewBox="0 0 400 240" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C198F0" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#C198F0" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* 가로 보조선 그리드 */}
                  <line x1="35" y1="30" x2="390" y2="30" stroke="#F1F5F9" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="35" y1="75" x2="390" y2="75" stroke="#F1F5F9" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="35" y1="120" x2="390" y2="120" stroke="#F1F5F9" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="35" y1="165" x2="390" y2="165" stroke="#F1F5F9" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="35" y1="210" x2="390" y2="210" stroke="#E2E8F0" strokeWidth="1.5" />

                  {/* Y축 눈금 라벨 */}
                  <text x="5" y="34" fontSize="10" fill="#9CA3AF" fontWeight="600">40만</text>
                  <text x="5" y="79" fontSize="10" fill="#9CA3AF" fontWeight="600">30만</text>
                  <text x="5" y="124" fontSize="10" fill="#9CA3AF" fontWeight="600">20만</text>
                  <text x="5" y="169" fontSize="10" fill="#9CA3AF" fontWeight="600">10만</text>
                  <text x="18" y="214" fontSize="10" fill="#9CA3AF" fontWeight="600">0</text>

                  {/* 그라데이션 채움 영역 (Area) */}
                  <path
                    d="M 50 210 L 50 159.3 C 80 155, 95 152, 114 149.3 C 145 142, 160 135, 178 125.8 C 205 110, 220 102, 242 94.4 C 270 80, 285 62, 306 52.6 C 335 48, 350 46, 370 45.5 L 370 210 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* 진남색 굵은 곡선 (Stroke) */}
                  <path
                    d="M 50 159.3 C 80 155, 95 152, 114 149.3 C 145 142, 160 135, 178 125.8 C 205 110, 220 102, 242 94.4 C 270 80, 285 62, 306 52.6 C 335 48, 350 46, 370 45.5"
                    fill="none"
                    stroke="#1B326B"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* 데이터 포인트 점들 */}
                  <g
                    className="cursor-pointer"
                    onMouseEnter={(e) => handlePointHover(e, '2014년: 112,573명')}
                    onMouseLeave={handlePointLeave}
                  >
                    <circle cx="50" cy="159.3" r="5" fill="#FFFFFF" stroke="#1B326B" strokeWidth="3" />
                  </g>
                  <g
                    className="cursor-pointer"
                    onMouseEnter={(e) => handlePointHover(e, '2016년: 134,853명')}
                    onMouseLeave={handlePointLeave}
                  >
                    <circle cx="114" cy="149.3" r="5" fill="#FFFFFF" stroke="#1B326B" strokeWidth="3" />
                  </g>
                  <g
                    className="cursor-pointer"
                    onMouseEnter={(e) => handlePointHover(e, '2018년: 187,057명')}
                    onMouseLeave={handlePointLeave}
                  >
                    <circle cx="178" cy="125.8" r="5" fill="#FFFFFF" stroke="#1B326B" strokeWidth="3" />
                  </g>
                  <g
                    className="cursor-pointer"
                    onMouseEnter={(e) => handlePointHover(e, '2020년: 256,831명')}
                    onMouseLeave={handlePointLeave}
                  >
                    <circle cx="242" cy="94.4" r="5" fill="#FFFFFF" stroke="#1B326B" strokeWidth="3" />
                  </g>
                  <g
                    className="cursor-pointer"
                    onMouseEnter={(e) => handlePointHover(e, '2022년: 349,716명')}
                    onMouseLeave={handlePointLeave}
                  >
                    <circle cx="306" cy="52.6" r="5" fill="#FFFFFF" stroke="#1B326B" strokeWidth="3" />
                  </g>
                  <g
                    className="cursor-pointer"
                    onMouseEnter={(e) => handlePointHover(e, '2023년: 365,603명 (225% 증가)')}
                    onMouseLeave={handlePointLeave}
                  >
                    <circle cx="370" cy="45.5" r="6" fill="#1B326B" stroke="#FFFFFF" strokeWidth="2.5" />
                  </g>

                  {/* X축 연도 라벨 */}
                  <text x="50" y="230" fontSize="11" fill="#9CA3AF" fontWeight="bold" textAnchor="middle">2014</text>
                  <text x="114" y="230" fontSize="11" fill="#9CA3AF" fontWeight="bold" textAnchor="middle">2016</text>
                  <text x="178" y="230" fontSize="11" fill="#9CA3AF" fontWeight="bold" textAnchor="middle">2018</text>
                  <text x="242" y="230" fontSize="11" fill="#9CA3AF" fontWeight="bold" textAnchor="middle">2020</text>
                  <text x="306" y="230" fontSize="11" fill="#9CA3AF" fontWeight="bold" textAnchor="middle">2022</text>
                  <text x="370" y="230" fontSize="11" fill="#1B326B" fontWeight="900" textAnchor="middle">2023</text>
                </svg>
              </div>
            </div>

            {/* 차트 3: 정신건강 서비스 이용률 (가운데가 막힌 솔리드 파이 차트) */}
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col justify-between items-center text-center">
              <div className="mb-3 w-full text-left sm:text-center">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-0.5">
                  &lt;우리나라 청년층 정신건강 서비스 이용률&gt;
                </h4>
                <p className="text-xs text-gray-400">자료: 보건복지부 (2024 제3회 국가건강검진위원회)</p>
              </div>

              {/* 솔리드 파이 차트 */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 my-2 flex items-center justify-center">
                <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible">
                  <defs>
                    <filter id="pieShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="3" dy="5" stdDeviation="4" floodOpacity="0.2" floodColor="#1B326B" />
                    </filter>
                  </defs>

                  {/* 84% 조각 (연그레이 #E5E7EB) */}
                  <path
                    d="M 120 120 L 191.7 74.5 A 85 85 0 1 1 120 35 Z"
                    fill="#E5E7EB"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                  />

                  {/* 16% 조각 (진남색 #1B326B - 돌출 그림자 적용) */}
                  <g filter="url(#pieShadow)" className="hover:scale-105 transition-transform origin-center cursor-pointer">
                    <path
                      d="M 124 116 L 124 31 A 85 85 0 0 1 195.7 70.5 Z"
                      fill="#1B326B"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                    />
                  </g>

                  {/* 84% 텍스트 라벨 */}
                  <text x="100" y="130" fill="#6B7280" fontSize="13" fontWeight="bold" textAnchor="middle">
                    이용하지 않음
                  </text>
                  <text x="100" y="162" fill="#9CA3AF" fontSize="30" fontWeight="900" textAnchor="middle">
                    84%
                  </text>

                  {/* 16% 텍스트 라벨 */}
                  <text x="195" y="32" fill="#1B326B" fontSize="14" fontWeight="bold" textAnchor="middle">
                    이용함
                  </text>
                  <text x="195" y="56" fill="#1B326B" fontSize="24" fontWeight="900" textAnchor="middle">
                    16%
                  </text>
                  <circle cx="160" cy="55" r="3" fill="#1B326B" />
                </svg>
              </div>

              {/* 하단 공감 텍스트 박스 */}
              <div className="mt-2 w-full bg-blue-50/70 p-3.5 sm:p-4 rounded-2xl border border-blue-100">
                <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed break-keep">
                  대다수의 청년들이 마음의 병을 앓고 있지만, <br className="hidden sm:block" />
                  전문적인 도움을 받는 비율은 <strong className="text-[#1B326B] font-bold">16%로 현저히 낮습니다.</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
