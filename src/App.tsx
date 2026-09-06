import React, { useState } from 'react';
import { Step, MoodOption, QuestionData, UserSelections } from './types';
import { LandingStep } from './components/LandingStep';
import { QuestionStep } from './components/QuestionStep';
import { Navbar } from './components/Navbar';
import { ResultSection } from './components/ResultSection';
import { InstagramSection } from './components/InstagramSection';
import { FeaturesSection } from './components/FeaturesSection';
import { StatisticsSection } from './components/StatisticsSection';
import { Footer } from './components/Footer';

const q1Data: QuestionData = {
  stepNumber: 1,
  totalSteps: 2,
  category: '기상 생각 테스트',
  title: 'Q1. 아침에 눈을 떴을 때, 가장 먼저 머릿속을 스치는 생각은 무엇인가요?',
  description: '아래 4가지 보기 중 마음에 가장 와닿는 답변을 선택해주세요',
  options: [
    { id: 1, text: '오늘 하루도 무사히 잘 버텨보자' },
    { id: 2, text: '어제 끝내지 못한 일들이 산더미네, 벌써 피곤하다' },
    { id: 3, text: '이렇게 쳇바퀴 같은 삶을 언제까지 반복해야 할까?' },
    { id: 4, text: '오늘 나에게 어떤 새로운 기회나 반전이 일어날까?' },
  ],
};

const q2Data: QuestionData = {
  stepNumber: 2,
  totalSteps: 2,
  category: '환경 심리 테스트',
  title: 'Q2. 지금 하고 있는 일이나 현재의 환경에 대해 솔직하게 어떤 마음이 드시나요?',
  description: '선택 즉시 나만의 심리 상태 진단 결과가 발표됩니다',
  options: [
    { id: 1, text: '내 가치를 담기엔 부족해, 더 완벽한 기회가 오면 바로 갈아탈 거야' },
    { id: 2, text: '쳇바퀴 같은 이 생활은 진짜 내 삶이 아니야, 매일 탈출할 궁리만 해' },
    { id: 3, text: '지금의 방황과 지침도, 결국 내 이상향을 찾아가는 멋진 여정일 뿐이야' },
    { id: 4, text: '나를 온전히 알아주고 빛내줄 진짜 무대는 세상 어딘가에 분명히 있어' },
  ],
};

export const App: React.FC = () => {
  const [step, setStep] = useState<Step>('landing');
  const [, setUserSelections] = useState<UserSelections>({
    mood: null,
    q1: null,
    q2: null,
  });

  const handleSelectMood = (mood: MoodOption) => {
    setUserSelections((prev) => ({ ...prev, mood }));
    setStep('q1');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectQ1 = (optionId: number) => {
    setUserSelections((prev) => ({ ...prev, q1: optionId }));
    setStep('q2');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectQ2 = (optionId: number) => {
    setUserSelections((prev) => ({ ...prev, q2: optionId }));
    setStep('main');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleReset = () => {
    setUserSelections({ mood: null, q1: null, q2: null });
    setStep('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-gray-800 font-sans selection:bg-[#C198F0] selection:text-white">
      {step === 'landing' && <LandingStep onSelectMood={handleSelectMood} />}
      {step === 'q1' && (
        <QuestionStep
          data={q1Data}
          themeColor="blue"
          onSelectOption={handleSelectQ1}
        />
      )}
      {step === 'q2' && (
        <QuestionStep
          data={q2Data}
          themeColor="purple"
          onSelectOption={handleSelectQ2}
        />
      )}
      {step === 'main' && (
        <main className="fade-enter">
          <Navbar />
          <ResultSection />
          <InstagramSection />
          <FeaturesSection />
          <StatisticsSection />
          <Footer onReset={handleReset} />
        </main>
      )}
    </div>
  );
};

export default App;
