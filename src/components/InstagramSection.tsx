import React from 'react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-14 md:py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* 헤더 */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 text-pink-600 font-semibold text-xs sm:text-sm mb-3 border border-pink-100">
            <span>📷</span> MomentLog Official Instagram
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight break-keep">
            모먼트로그와 함께하는 일상 케어
          </h3>
          <p className="text-gray-500 text-xs sm:text-base mt-2 break-keep">
            인스타그램에서 매일 따뜻한 위로와 멘탈 케어 팁을 전해드립니다
          </p>
        </div>

        {/* 한눈에 함께 보기: 모바일 및 데스크톱 2분할 나란히 배치 */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-8 lg:gap-12 items-stretch max-w-4xl mx-auto">
          
          {/* 좌측: QR 코드 카드 (스마트폰 카메라 스캔 전용, 클릭 이동 없음) */}
          <div className="flex flex-col items-center justify-between bg-white p-3.5 sm:p-7 rounded-[1.8rem] sm:rounded-[2.2rem] shadow-xl border border-gray-100 relative group">
            <div className="text-center mb-2 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-bold text-purple-600 bg-purple-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-purple-100 block mb-1">
                QR 코드
              </span>
              <h4 className="text-xs sm:text-lg font-bold text-gray-900 break-keep leading-tight">
                카메라로 스캔
              </h4>
            </div>

            {/* QR 이미지 액자 */}
            <div className="w-full max-w-[130px] sm:max-w-[240px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-purple-100/60 select-none my-auto">
              <img
                src="/instagram_qr.jpg"
                alt="모먼트로그 인스타그램 QR코드"
                className="w-full h-auto object-cover select-none pointer-events-none"
              />
            </div>

            <div className="mt-2.5 sm:mt-4 text-center w-full">
              <span className="text-[10px] sm:text-xs font-bold text-purple-700 bg-purple-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-purple-100 inline-block mb-1">
                @PEAR.PEER.ING
              </span>
              <p className="text-[9px] sm:text-xs font-medium text-gray-400 break-keep">
                기본 카메라로 스캔
              </p>
            </div>
          </div>

          {/* 우측: 인스타그램 피드 목업 카드 */}
          <div className="flex flex-col items-center justify-between bg-white p-3 sm:p-4 rounded-[1.8rem] sm:rounded-[2.5rem] shadow-2xl border border-gray-100 relative group">
            
            {/* 상단 프로필 헤더 */}
            <div className="flex items-center justify-between w-full px-1 sm:px-2 py-1 mb-1.5 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse flex-shrink-0" />
                <span className="font-bold text-[10px] sm:text-xs text-gray-800 truncate max-w-[80px] sm:max-w-none">
                  @pear.peer.ing
                </span>
              </div>
              <a
                href="https://www.instagram.com/pear.peer.ing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-colors flex items-center gap-0.5 flex-shrink-0"
              >
                <span>방문</span>
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* 피드 캡처 사진 */}
            <div className="w-full rounded-xl sm:rounded-[1.6rem] overflow-hidden border border-gray-200/80 shadow-inner bg-gray-50 relative my-auto">
              <img
                src="/instagram_profile.png"
                alt="인스타그램 프로필 및 피드"
                className="w-full h-auto object-cover block select-none group-hover:scale-105 transition-transform duration-500"
              />

              <a
                href="https://www.instagram.com/pear.peer.ing"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/25 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <span className="bg-white text-gray-900 px-3 py-1.5 rounded-full font-bold text-[10px] sm:text-xs shadow-lg">
                  인스타 보기
                </span>
              </a>
            </div>

            <div className="mt-2 text-center w-full">
              <span className="text-[9px] sm:text-xs font-semibold text-pink-600">
                피어링 인스타 피드
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
