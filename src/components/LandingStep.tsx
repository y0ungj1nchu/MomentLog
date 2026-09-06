import React, { useState } from 'react';
import { MoodOption } from '../types';

interface LandingStepProps {
  onSelectMood: (option: MoodOption) => void;
}

export const LandingStep: React.FC<LandingStepProps> = ({ onSelectMood }) => {
  const [selectedId, setSelectedId] = useState<'A' | 'B' | 'C' | 'D' | null>(null);

  const handleSelect = (id: 'A' | 'B' | 'C' | 'D', name: string) => {
    setSelectedId(id);

    // 테두리 반짝임 효과 후 다음 단계로 이동
    setTimeout(() => {
      onSelectMood({ id, name });
    }, 350);
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-between items-center bg-[#F8F9FE] px-3 py-3 sm:px-6 sm:py-6 fade-enter overflow-y-auto">
      {/* 상단 여백용 빈 공간 */}
      <div className="h-1 sm:h-2" />

      {/* 모바일 가로(Landscape) 및 세로 반응형 최적화 레이아웃 컨테이너 */}
      <div className="w-full max-w-4xl mx-auto flex flex-col landscape:flex-row sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-10 my-auto py-2">
        
        {/* 좌측(가로모드 기준): 브랜드 및 질문 타이틀 (컴팩트하게 정돈하여 세로/가로 잘림 방지) */}
        <div className="text-center sm:text-left landscape:text-left flex flex-col items-center sm:items-start landscape:items-start max-w-sm sm:max-w-xs md:max-w-sm flex-shrink-0">
          <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-2.5 px-3 py-1 rounded-full bg-white shadow-sm border border-blue-50">
            <img
              src="/logo.png"
              alt="모먼트로그 로고"
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg object-contain shadow-sm shadow-blue-100"
            />
            <span className="text-base sm:text-lg font-bold tracking-tight gradient-text">모먼트로그</span>
          </div>

          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug break-keep">
            오늘 당신의 기분은 어떤가요?
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium break-keep">
            가장 마음에 드는 사진 1장을 탭해주세요.
          </p>

          <div className="hidden sm:flex landscape:flex items-center gap-2 mt-3 text-xs font-semibold text-blue-500/80 bg-blue-50/60 px-3 py-1 rounded-full border border-blue-100/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6A85F1] animate-ping" />
            <span>선택 즉시 다음 질문으로 이어집니다</span>
          </div>
        </div>

        {/* 우측(가로모드 기준): 4분할 원본 이미지 인터랙티브 액자 카드 (A가 전혀 잘리지 않도록 크기 및 둥글기 최적화) */}
        <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] flex-shrink flex items-center justify-center">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-white group">
            {/* 4분할 원본 사진 (100% 원본 비율 표시로 A~D 전체 온전하게 노출) */}
            <img
              src="/mood_selection.jpg"
              alt="모먼트로그 기분 선택 4분할 사진"
              className="w-full h-auto block select-none pointer-events-none"
            />

            {/* 2x2 인터랙티브 클릭 핫스팟 오버레이 */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              {/* 사분면 A (좌상단: 여유로운 휴식) - 모서리 잘림 없이 테두리만 반짝임 */}
              <button
                type="button"
                onClick={() => handleSelect('A', '여유로운 휴식')}
                className="relative focus:outline-none flex items-center justify-center p-1 sm:p-2 cursor-pointer"
                title="A: 여유로운 휴식"
              >
                <div
                  className={`absolute inset-1 rounded-xl sm:rounded-2xl pointer-events-none transition-all duration-150 ${
                    selectedId === 'A'
                      ? 'border-[3px] border-white ring-4 ring-[#6A85F1] shadow-[0_0_16px_rgba(106,133,241,0.95)] sparkle-border z-20'
                      : 'border-2 border-transparent hover:border-white/50'
                  }`}
                />
              </button>

              {/* 사분면 B (우상단: 화려한 밤) */}
              <button
                type="button"
                onClick={() => handleSelect('B', '화려한 밤')}
                className="relative focus:outline-none flex items-center justify-center p-1 sm:p-2 cursor-pointer"
                title="B: 화려한 밤"
              >
                <div
                  className={`absolute inset-1 rounded-xl sm:rounded-2xl pointer-events-none transition-all duration-150 ${
                    selectedId === 'B'
                      ? 'border-[3px] border-white ring-4 ring-[#C198F0] shadow-[0_0_16px_rgba(193,152,240,0.95)] sparkle-border z-20'
                      : 'border-2 border-transparent hover:border-white/50'
                  }`}
                />
              </button>

              {/* 사분면 C (좌하단: 새로운 시작) */}
              <button
                type="button"
                onClick={() => handleSelect('C', '새로운 시작')}
                className="relative focus:outline-none flex items-center justify-center p-1 sm:p-2 cursor-pointer"
                title="C: 새로운 시작"
              >
                <div
                  className={`absolute inset-1 rounded-xl sm:rounded-2xl pointer-events-none transition-all duration-150 ${
                    selectedId === 'C'
                      ? 'border-[3px] border-white ring-4 ring-[#6A85F1] shadow-[0_0_16px_rgba(106,133,241,0.95)] sparkle-border z-20'
                      : 'border-2 border-transparent hover:border-white/50'
                  }`}
                />
              </button>

              {/* 사분면 D (우하단: 평온한 자연) */}
              <button
                type="button"
                onClick={() => handleSelect('D', '평온한 자연')}
                className="relative focus:outline-none flex items-center justify-center p-1 sm:p-2 cursor-pointer"
                title="D: 평온한 자연"
              >
                <div
                  className={`absolute inset-1 rounded-xl sm:rounded-2xl pointer-events-none transition-all duration-150 ${
                    selectedId === 'D'
                      ? 'border-[3px] border-white ring-4 ring-[#C198F0] shadow-[0_0_16px_rgba(193,152,240,0.95)] sparkle-border z-20'
                      : 'border-2 border-transparent hover:border-white/50'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 하단 여백용 빈 공간 */}
      <div className="h-1 sm:h-2" />
    </section>
  );
};
