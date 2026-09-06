# 🌿 모먼트로그 (MomentLog)

> **순간을 기록하고, 나를 이해하는 시간**  
> 반복되는 일상에 지치고 멘탈 케어가 필요한 청년층을 위한 맞춤형 심리 진단 및 감성 멘탈 케어 웹 애플리케이션입니다.

---

## ✨ 주요 기능

1. **감성 사진 기반 무드 선택 (Step 1)**
   - 4분할 원본 감성 사진(여유로운 휴식, 화려한 밤, 새로운 시작, 평온한 자연)을 직접 탭하여 오늘의 기분을 선택.
   - 모바일 가로(Landscape) 및 세로(Portrait) 완벽 반응형 대응 및 테두리 글로우 인터랙션.

2. **직관적인 심리테스트 (Step 2 & Step 3)**
   - Q1. 기상 시 드는 생각 테스트
   - Q2. 현재 환경에 대한 솔직한 마음 테스트
   - 4지선다 2x2 반응형 그리드와 프로그레스 바.

3. **진단 결과 발표 (Step 4)**
   - '이상향 집착형' 파랑새 증후군 진단 결과 및 귀여운 파랑새 일러스트 그래픽.
   - 타겟 공감 박스 (INFJ, INFP, ENFP).

4. **공식 인스타그램 연동 (Step 5)**
   - 기본 카메라 스캔 전용 QR 액자 카드.
   - 실제 모바일 인스타그램 피드 캡처 목업 카드 및 바로가기 링크.
   - 한눈에 나란히 보기 2분할 뷰.

5. **맞춤형 멘탈 케어 앱 기능 소개 (Step 6)**
   - 공식 앱 아이콘 엠블럼 카드.
   - 3대 핵심 기능 (AI 상담, 맞춤 솔루션, 사전 처방전).

6. **청년 심리 통계 대시보드 (Step 7)**
   - 직장인 퇴사증후군 픽토그램 (10명 중 6명 착색).
   - 청년기 우울증 환자 수 인터랙티브 Area 곡선 차트 (225% 증가 배지 & 툴팁).
   - 청년층 정신건강 서비스 이용률 솔리드 파이 차트 (16% vs 84%).

7. **간편한 처음 복귀**
   - 하단 푸터의 모먼트로그 로고 및 브랜드 텍스트 클릭 시 부드럽게 첫 화면으로 복귀.

---

## 🛠 기술 스택

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Design Philosophy**: 외부 무거운 라이브러리(Recharts, Lucide 등) 의존성 없이, **순수 React 상태 및 정밀 벡터 SVG 컴포넌트**로 100% 자체 구현하여 초경량·고성능 번들 실현.

---

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173/` 접속.

### 3. 프로덕션 빌드
```bash
npm run build
```
`dist/` 디렉터리에 최적화된 정적 웹 파일이 빌드됩니다.

---

## 📁 프로젝트 구조

```
c:/MomentLog/
├── public/                      # 정적 에셋 (로고, 4분할 사진, QR, 인스타 피드, 앱 아이콘)
│   ├── logo.png
│   ├── app_icon.png
│   ├── mood_selection.jpg
│   ├── instagram_qr.jpg
│   └── instagram_profile.png
├── src/
│   ├── types/
│   │   └── index.ts            # TypeScript 인터페이스 정의
│   ├── components/
│   │   ├── Navbar.tsx           # 브랜드 헤더
│   │   ├── LandingStep.tsx      # Step 1 감성 사진 선택
│   │   ├── QuestionStep.tsx     # Step 2, 3 심리테스트
│   │   ├── ResultSection.tsx    # Step 4 결과 발표 (파랑새 증후군)
│   │   ├── InstagramSection.tsx # Step 5 QR & 인스타 연동
│   │   ├── FeaturesSection.tsx  # Step 6 3대 핵심 기능 & 앱 아이콘
│   │   ├── StatisticsSection.tsx# Step 7 청년 심리 통계 대시보드
│   │   └── Footer.tsx           # 푸터 & 첫 화면 복귀
│   ├── App.tsx                  # 메인 앱 및 스텝 상태 관리
│   ├── main.tsx                 # React 18 루트 엔트리
│   └── index.css                # Tailwind 및 애니메이션 키프레임
├── index.html                   # HTML 템플릿
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```
