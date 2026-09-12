import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FE] relative">
      <div className="max-w-5xl mx-auto px-3.5 min-[380px]:px-4 sm:px-6">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-5 min-[380px]:p-7 sm:p-12 md:p-14 shadow-xl border border-blue-50">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* 좌측: 모먼트로그 공식 앱 아이콘 그래픽 */}
            <div className="flex justify-center items-center">
              <div className="relative w-52 h-52 min-[380px]:w-64 min-[380px]:h-64 sm:w-80 sm:h-80 rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-2xl border-4 border-white flex items-center justify-center group overflow-hidden">
                {/* 은은한 배경 광원 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-purple-100/30 to-pink-100/30 rounded-[2.5rem] opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* 공식 앱 아이콘 이미지 */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white shadow-md flex items-center justify-center p-2">
                  <img
                    src="/app_icon.png"
                    alt="모먼트로그 공식 앱 아이콘 - 순간을 기록하고, 나를 이해하는 시간"
                    className="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* 우측: 텍스트 설명 영역 */}
            <div className="flex flex-col justify-center text-left">
              {/* 브랜드 타이틀 */}
              <div className="flex items-center gap-2.5 mb-2">
                <img
                  src="/logo.png"
                  alt="모먼트로그 로고"
                  className="w-8 h-8 rounded-xl object-contain shadow-md shadow-blue-100"
                />
                <span className="text-2xl font-bold tracking-tight gradient-text">모먼트로그</span>
              </div>
              <p className="text-base sm:text-lg text-gray-500 font-semibold mb-6">
                (맞춤형 멘탈 케어 앱)
              </p>

              {/* 3가지 핵심 기능 리스트 */}
              <ul className="space-y-3.5 sm:space-y-4">
                {/* 기능 1 */}
                <li className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-100/80 hover:bg-blue-50/50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#6A85F1] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    01
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug break-keep">
                      타인에게 얘기하기 어려운 고민도 털어놓는 AI 상담
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed break-keep font-medium">
                      누구의 눈치도 보지 않고 나의 속마음을 편안하게 고백할 수 있습니다.
                    </p>
                  </div>
                </li>

                {/* 기능 2 */}
                <li className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-100/80 hover:bg-purple-50/50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#9E8FF0] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    02
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug break-keep">
                      설계 통계를 바탕으로 한 AI 맞춤 솔루션
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed break-keep font-medium">
                      수만 건의 심리 데이터와 전문 통계를 기반으로 정밀한 피드백을 제공합니다.
                    </p>
                  </div>
                </li>

                {/* 기능 3 */}
                <li className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-100/80 hover:bg-pink-50/50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-[#C198F0] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    03
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug break-keep">
                      마음이 지치기 전, 사전에 준비하는 나만의 멘탈케어 처방전
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed break-keep font-medium">
                      번아웃이 오기 전 미리 스스로를 돌보고 회복할 수 있는 루틴을 제시합니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 모먼트로그 처방 노트 (앱 소개 하단 연계) */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-9 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-r from-blue-50/90 via-purple-50/70 to-blue-50/90 border border-blue-100/80 shadow-md text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#6A85F1] text-xs sm:text-sm font-bold shadow-xs mb-3.5">
            <span>🌱</span>
            <span>MomentLog 처방 노트</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 mb-3 break-keep leading-snug">
            “파랑새는 떠나서 찾는 것이 아니라, 지금의 자리에서 발견하는 것입니다.”
          </h3>
          <div className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed break-keep max-w-2xl mx-auto font-medium space-y-1">
            <p>
              진짜 나다운 삶은 더 완벽한 환경으로 이동했을 때 비로소 시작되는 것이 아닙니다.
            </p>
            <p className="text-[#1B326B] font-bold">
              오늘 내가 경험한 작은 순간과 감정들을 기록하고 소중히 여기는 연습에서 나만의 파랑새가 자라납니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
