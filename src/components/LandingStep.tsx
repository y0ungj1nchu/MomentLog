import React, { useState } from 'react';
import { MoodOption } from '../types';

interface LandingStepProps {
  onSelectMood: (option: MoodOption) => void;
}

interface MoodItem {
  id: 'A' | 'B' | 'C' | 'D';
  name: string;
  image: string;
}

const moodList: MoodItem[] = [
  { id: 'A', name: '여유로운 휴식', image: '/mood_a.jpg' },
  { id: 'B', name: '화려한 밤', image: '/mood_b.jpg' },
  { id: 'C', name: '새로운 시작', image: '/mood_c.jpg' },
  { id: 'D', name: '평온한 자연', image: '/mood_d.jpg' },
];

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
    <section className="min-h-[100dvh] flex flex-col justify-between items-center bg-[#F8F9FE] px-3 py-4 sm:px-6 sm:py-8 fade-enter overflow-y-auto">
      {/* 상단 여백용 빈 공간 */}
      <div className="h-1 sm:h-2" />

      {/* 중앙 메인 컨테이너: 가로로 보았을 때 한눈에 돋보이도록 크기를 키운 4개 사진 카드 그리드 */}
      <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto flex flex-col items-center justify-center my-auto py-2">
        
        {/* 브랜드 로고 & 메인 질문 타이틀 */}
        <div className="text-center flex flex-col items-center mb-5 sm:mb-7">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5 px-3.5 py-1 rounded-full bg-white shadow-xs border border-blue-50">
            <img
              src="/logo.png"
              alt="모먼트로그 로고"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg object-contain shadow-xs shadow-blue-100"
            />
            <span className="text-sm sm:text-base font-bold tracking-tight gradient-text">모먼트로그</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug break-keep">
            오늘 당신의 기분은 어떤가요?
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 sm:mt-1.5 font-medium break-keep">
            가장 마음에 와닿는 사진 1장을 탭해주세요.
          </p>

          <div className="hidden sm:inline-flex items-center gap-2 mt-3 text-xs font-semibold text-[#6A85F1] bg-blue-50/80 px-3.5 py-1 rounded-full border border-blue-100/70 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6A85F1] animate-ping" />
            <span>사진을 선택하면 바로 맞춤 질문으로 이어집니다</span>
          </div>
        </div>

        {/* 4개 개별 선택 가능한 이미지 카드 2x2 그리드 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full">
          {moodList.map((item) => {
            const isSelected = selectedId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id, item.name)}
                className={`group relative flex flex-col rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-2 sm:border-4 transition-all duration-200 cursor-pointer shadow-md hover:shadow-xl text-left focus:outline-none bg-white ${
                  isSelected
                    ? 'border-[#6A85F1] ring-4 ring-[#6A85F1]/60 scale-[1.02] shadow-[0_0_24px_rgba(106,133,241,0.5)] z-20'
                    : 'border-white hover:border-blue-200 hover:-translate-y-1'
                }`}
                title={`${item.id}: ${item.name}`}
              >
                {/* 사진 영역 (3:2 비율 유지로 원본 디테일 선명하게 노출) */}
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={`${item.id}: ${item.name}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* 선택 시 은은한 하이라이트 오버레이 */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-200 ${
                      isSelected ? 'bg-[#6A85F1]/15' : 'bg-black/0 group-hover:bg-black/5'
                    }`}
                  />
                </div>

                {/* 하단 분위기 캡션 바 */}
                <div
                  className={`py-2 px-2.5 sm:py-3 sm:px-4 flex items-center justify-between transition-colors ${
                    isSelected ? 'bg-blue-50/90 text-[#6A85F1]' : 'text-gray-700 bg-white'
                  }`}
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold truncate">
                    {item.name}
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full transition-all flex-shrink-0 ${
                      isSelected
                        ? 'bg-[#6A85F1] text-white'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}
                  >
                    선택
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* 하단 여백용 빈 공간 */}
      <div className="h-1 sm:h-2" />
    </section>
  );
};
