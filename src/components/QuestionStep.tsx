import React, { useState, useEffect } from 'react';
import { QuestionData, QuestionOption } from '../types';

interface QuestionStepProps {
  data: QuestionData;
  themeColor: 'blue' | 'purple';
  selectedOptionId?: number | null;
  onSelectOption: (option: QuestionOption) => void;
  onBack: () => void;
}

export const QuestionStep: React.FC<QuestionStepProps> = ({
  data,
  themeColor,
  selectedOptionId,
  onSelectOption,
  onBack,
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(selectedOptionId ?? null);

  useEffect(() => {
    setSelectedId(selectedOptionId ?? null);
  }, [data.stepNumber, selectedOptionId]);

  const isPurple = themeColor === 'purple';
  const progressPercent = Math.round((data.stepNumber / data.totalSteps) * 100);

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>, option: QuestionOption) => {
    // 모바일 터치 시 버튼 포커스 잔류 방지
    e.currentTarget.blur();
    setSelectedId(option.id);

    // 테두리 반짝임 피드백 후 다음 단계 이동
    setTimeout(() => {
      onSelectOption(option);
    }, 320);
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-between bg-[#F8F9FE] px-3.5 sm:px-4 py-3 sm:py-6 fade-enter overflow-y-auto">
      {/* 핸드폰 세로 방향(Portrait) 기준 최적화 컨테이너 */}
      <div className="w-full max-w-md mx-auto flex flex-col flex-1 justify-between gap-3 min-[380px]:gap-4 sm:gap-5 my-auto py-1 sm:py-2">
        
        {/* 상단 네비게이션 바: 뒤로가기 버튼 & 진행률 */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-2 sm:mb-2.5">
            {/* 뒤로가기 버튼 */}
            <button
              type="button"
              onClick={onBack}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-xs border border-gray-200/80 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
              aria-label="이전 단계로 이동"
              title="이전으로 돌아가기"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* 단계 표시 (간결한 숫자 배지) */}
            <div className="flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-white rounded-full border border-gray-200/80 shadow-xs">
              <span className={`text-xs font-black ${isPurple ? 'text-[#9E8FF0]' : 'text-[#6A85F1]'}`}>
                {data.stepNumber}
              </span>
              <span className="text-xs font-bold text-gray-300">/</span>
              <span className="text-xs font-bold text-gray-400">
                {data.totalSteps}
              </span>
            </div>
          </div>

          {/* 세련된 진행 상태 프로그레스 바 */}
          <div className="w-full h-1.5 sm:h-2 bg-gray-200/70 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full rounded-full gradient-bg transition-all duration-400 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 질문 카드 (질문 위에 불필요한 '심리테스트 Q1' 라벨 제거) */}
        <div className="bg-white rounded-[1.7rem] sm:rounded-[2rem] p-4 min-[380px]:p-5 sm:p-6 shadow-xs border border-gray-100/90 text-left">
          <h2 className="text-base min-[380px]:text-lg sm:text-xl font-black text-gray-900 leading-snug break-keep">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-[11px] min-[380px]:text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2 font-medium break-keep">
              {data.description}
            </p>
          )}
        </div>

        {/* 4지선다 선택지 버튼 리스트 (핸드폰 세로 방향 1열 스택 배치) */}
        <div className="flex flex-col gap-2 min-[380px]:gap-2.5 sm:gap-3 w-full">
          {data.options.map((option) => {
            const isSelected = selectedId === option.id;
            return (
              <button
                key={`q${data.stepNumber}-opt${option.id}`}
                type="button"
                onClick={(e) => handleSelect(e, option)}
                onTouchEnd={(e) => (e.currentTarget as HTMLButtonElement).blur()}
                className={`w-full p-3 min-[380px]:p-4 rounded-xl sm:rounded-2xl bg-white border-2 flex items-center justify-between text-left transition-all duration-150 relative cursor-pointer active:scale-[0.98] select-none outline-none focus:outline-none focus:ring-0 min-h-[3.75rem] sm:min-h-[4.25rem] ${
                  isSelected
                    ? isPurple
                      ? 'border-[#C198F0] ring-4 ring-[#C198F0]/30 shadow-[0_0_16px_rgba(193,152,240,0.45)] z-10'
                      : 'border-[#6A85F1] ring-4 ring-[#6A85F1]/30 shadow-[0_0_16px_rgba(106,133,241,0.45)] z-10'
                    : isPurple
                    ? 'border-transparent shadow-xs option-hover-purple'
                    : 'border-transparent shadow-xs option-hover-blue'
                }`}
              >
                <div className="flex items-center gap-2.5 min-[380px]:gap-3.5 relative z-10 w-full pr-1">
                  <span
                    className={`flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl font-black flex items-center justify-center text-xs sm:text-base transition-colors ${
                      isSelected
                        ? 'gradient-bg text-white shadow-xs'
                        : isPurple
                        ? 'bg-purple-50 text-[#9E8FF0]'
                        : 'bg-blue-50 text-[#6A85F1]'
                    }`}
                  >
                    {option.label || option.id}
                  </span>
                  <p className="text-gray-800 text-xs min-[380px]:text-sm sm:text-base font-semibold leading-snug break-keep flex-1">
                    "{option.text}"
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* 하단 미니 브랜딩 문구 */}
        <div className="text-center pt-1 pb-1">
          <span className="text-[11px] font-bold text-gray-300 tracking-wider">
            MOMENTLOG · 나만의 파랑새 찾기
          </span>
        </div>

      </div>
    </section>
  );
};
