import React from 'react';

export const BluebirdInfoSection: React.FC = () => {
  return (
    <section id="bluebird-info" className="py-14 md:py-20 bg-white relative border-t border-blue-50 overflow-hidden">
      {/* 배경 은은한 광원 효과 */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl translate-x-1/4 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-3.5 min-[380px]:px-4 sm:px-6 relative z-10">
        
        {/* 섹션 헤더 */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#6A85F1] font-bold text-xs sm:text-sm mb-3 border border-blue-100/80 shadow-xs">
            <span>💡</span>
            <span>심리학 백과</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight break-keep">
            <span className="gradient-text">파랑새 증후군</span>이란?
          </h2>
          
          <div className="max-w-2xl mx-auto mt-3.5 space-y-1.5">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed break-keep font-semibold">
              “지금 여기가 아니라, 어딘가에 내 진짜 삶이 따로 있을 거야”
            </p>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed break-keep font-medium">
              현재의 환경에 만족하지 못하고, 막연한 행복과 완벽한 이상만을 끝없이 좇는 심리 상태를 의미합니다.
            </p>
          </div>
        </div>

        {/* 3대 핵심 설명 카드 (모바일 1열, 데스크톱 3열) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* 카드 1: 동화 파랑새의 유래 */}
          <div className="bg-[#F8F9FE] p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-blue-50 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4 shadow-xs">
                📖
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 break-keep">
                동화 『파랑새』의 역설
              </h3>
              <div className="text-gray-600 text-xs sm:text-sm leading-relaxed break-keep space-y-1.5 text-left">
                <p>
                  동화 속 남매는 행복을 주는 파랑새를 찾아 온 세상을 헤맵니다.
                </p>
                <p className="text-gray-500">
                  하지만 결국 파랑새를 찾은 곳은 머나먼 이상향이 아닌 자신들의 '작은 새장 속'이었습니다.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-blue-100/60 text-[11px] sm:text-xs font-bold text-[#6A85F1]">
              #행복은_가까이에
            </div>
          </div>

          {/* 카드 2: 현대인이 겪는 모습 */}
          <div className="bg-[#F8F9FE] p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-blue-50 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4 shadow-xs">
                🌀
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 break-keep">
                끝없는 가능성 탐색
              </h3>
              <div className="text-gray-600 text-xs sm:text-sm leading-relaxed break-keep space-y-1.5 text-left">
                <p>
                  새로운 일이나 사람을 만나면 금방 설레지만, 일상이 반복되면 “이건 내 진짜 모습이 아닌데…”라며 망설이게 됩니다.
                </p>
                <p className="text-gray-500">
                  현재에 깊이 머물지 못하고 언제나 또 다른 기회로 시선을 돌리는 상태입니다.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-blue-100/60 text-[11px] sm:text-xs font-bold text-purple-600">
              #완벽한_선택은_없다
            </div>
          </div>

          {/* 카드 3: 왜 일어날까? */}
          <div className="bg-[#F8F9FE] p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-blue-50 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl mb-4 shadow-xs">
                💫
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 break-keep">
                현실과 이상의 간극
              </h3>
              <div className="text-gray-600 text-xs sm:text-sm leading-relaxed break-keep space-y-1.5 text-left">
                <p>
                  더 성장하고 싶은 마음은 자연스럽지만, 작은 불편함을 견디기보다 ‘완벽한 다음 선택’으로 도피하려 할 때 파랑새 증후군이 깊어집니다.
                </p>
                <p className="text-gray-500">
                  진짜 성장은 지금 딛고 있는 현실을 통과할 때 시작됩니다.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-blue-100/60 text-[11px] sm:text-xs font-bold text-amber-600">
              #성장은_불편함을_통과한다
            </div>
          </div>

        </div>


      </div>
    </section>
  );
};
