import React, { useState } from 'react';
import { QuestionData } from '../types';

interface QuestionStepProps {
  data: QuestionData;
  themeColor: 'blue' | 'purple';
  onSelectOption: (optionId: number) => void;
}

export const QuestionStep: React.FC<QuestionStepProps> = ({
  data,
  themeColor,
  onSelectOption,
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const isPurple = themeColor === 'purple';
  const progressPercent = Math.round((data.stepNumber / data.totalSteps) * 100);

  const handleSelect = (optionId: number) => {
    setSelectedId(optionId);

    // 테두리 반짝임 피드백 후 다음 단계 이동
    setTimeout(() => {
      onSelectOption(optionId);
    }, 350);
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center bg-[#F8F9FE] px-4 py-3 sm:py-6 fade-enter overflow-hidden">
      {/* 모바일 가로 모드(Landscape) 기준: 좌측 질문 + 우측 4지선다 2x2 그리드 */}
      <div className="w-full max-w-5xl mx-auto flex flex-col landscape:flex-row sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 my-auto">
        
        {/* 좌측: 진행 상태 바 & 질문 헤더 카드 */}
        <div className="w-full landscape:w-[40%] sm:w-[40%] max-w-sm sm:max-w-none flex flex-col justify-center flex-shrink-0">
          
          {/* 진행 상태 바 */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span
                className={`text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md border ${
                  isPurple
                    ? 'text-[#9E8FF0] bg-purple-50 border-purple-100'
                    : 'text-[#6A85F1] bg-blue-50 border-blue-100'
                }`}
              >
                Step {data.stepNumber} of {data.totalSteps}
              </span>
              <span className="text-xs font-semibold text-gray-400">
                {progressPercent}% 완료
              </span>
            </div>
            <div className="w-full h-2 sm:h-2.5 bg-gray-200/80 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full rounded-full gradient-bg transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* 질문 카드 */}
          <div className="bg-white rounded-[1.8rem] sm:rounded-[2rem] p-4 sm:p-6 shadow-sm border border-gray-100">
            <span
              className={`inline-block text-xs font-bold mb-1.5 sm:mb-2 ${
                isPurple ? 'text-[#C198F0]' : 'text-[#6A85F1]'
              }`}
            >
              {data.category}
            </span>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-snug break-keep">
              {data.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2 break-keep">
              {data.description}
            </p>
          </div>
        </div>

        {/* 우측: 4지 선다 2x2 그리드 선택지 버튼 리스트 (~형 서브텍스트 제거, 클릭 시 테두리만 반짝임) */}
        <div className="w-full landscape:w-[60%] sm:w-[60%] max-w-md sm:max-w-none flex-grow">
          <div className="grid grid-cols-1 landscape:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {data.options.map((option) => {
              const isSelected = selectedId === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl bg-white border-2 flex items-center justify-between text-left transition-all duration-150 relative cursor-pointer min-h-[64px] sm:min-h-[76px] ${
                    isSelected
                      ? isPurple
                        ? 'border-[#C198F0] ring-4 ring-[#C198F0] shadow-[0_0_18px_rgba(193,152,240,0.95)] sparkle-border z-10'
                        : 'border-[#6A85F1] ring-4 ring-[#6A85F1] shadow-[0_0_18px_rgba(106,133,241,0.95)] sparkle-border z-10'
                      : isPurple
                      ? 'border-transparent shadow-sm hover:border-[#C198F0]/60 hover:shadow-md'
                      : 'border-transparent shadow-sm hover:border-[#6A85F1]/60 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10 w-full pr-1">
                    <span
                      className={`btn-num flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl font-bold flex items-center justify-center text-sm sm:text-base transition-colors ${
                        isSelected
                          ? 'gradient-bg text-white'
                          : isPurple
                          ? 'bg-purple-50 text-[#9E8FF0] group-hover:gradient-bg group-hover:text-white'
                          : 'bg-blue-50 text-[#6A85F1] group-hover:gradient-bg group-hover:text-white'
                      }`}
                    >
                      {option.id}
                    </span>
                    <p className="text-gray-800 text-xs sm:text-sm font-semibold leading-snug break-keep flex-1">
                      "{option.text}"
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
