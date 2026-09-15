import React, { useState, useEffect } from 'react';
import { Step, MoodOption, QuestionData, QuestionOption, UserSelections } from './types';
import { LandingStep } from './components/LandingStep';
import { QuestionStep } from './components/QuestionStep';
import { Navbar } from './components/Navbar';
import { ResultSection } from './components/ResultSection';
import { BluebirdInfoSection } from './components/BluebirdInfoSection';
import { InstagramSection } from './components/InstagramSection';
import { FeaturesSection } from './components/FeaturesSection';
import { StatisticsSection } from './components/StatisticsSection';
import { Footer } from './components/Footer';

// Q1. E vs I (답답할 때 에너지 충전 및 해소 방식)
const q1Data: QuestionData = {
  stepNumber: 1,
  totalSteps: 4,
  category: '',
  title: 'Q1. 지금 있는 환경이 답답할 때 나는?',
  description: '마음에 가장 와닿는 나의 행동을 하나 선택해주세요',
  options: [
    { id: 1, label: 'A', text: '일단 사람들 만나서 얘기해봐야지!', letter: 'E', score: 2 },
    { id: 2, label: 'B', text: '친한 사람한테 한번 털어놔야겠다.', letter: 'E', score: 1 },
    { id: 3, label: 'C', text: '혼자 좀 생각해봐야겠어.', letter: 'I', score: 1 },
    { id: 4, label: 'D', text: '내 생각이 정리될 때까지 혼자 고민한다.', letter: 'I', score: 2 },
  ],
};

// Q2. N vs S (이직 및 새로운 기회에 대한 인식 방식)
const q2Data: QuestionData = {
  stepNumber: 2,
  totalSteps: 4,
  category: '',
  title: 'Q2. “여긴 아닌 것 같은데…” 싶을 때 드는 생각은?',
  description: '내 머릿속을 가장 먼저 스치는 생각을 선택해주세요',
  options: [
    { id: 1, label: 'A', text: '분명 더 나한테 맞는 길이 있을 거야!', letter: 'N', score: 2 },
    { id: 2, label: 'B', text: '여기서 더 성장할 수 있나?', letter: 'N', score: 1 },
    { id: 3, label: 'C', text: '일단 지금 상황부터 따져보자.', letter: 'S', score: 1 },
    { id: 4, label: 'D', text: '조건이 실제로 더 좋아지는지가 중요하지.', letter: 'S', score: 2 },
  ],
};

// Q3. T vs F (이직/진로 결정 시 판단 기준)
const q3Data: QuestionData = {
  stepNumber: 3,
  totalSteps: 4,
  category: '',
  title: 'Q3. 옮길지 말지 고민할 때 제일 중요한 건?',
  description: '결정을 내릴 때 가장 중요하게 따지는 기준을 선택해주세요',
  options: [
    { id: 1, label: 'A', text: '뭐가 제일 합리적이지?', letter: 'T', score: 2 },
    { id: 2, label: 'B', text: '어디가 내 성장에 더 도움 되지?', letter: 'T', score: 1 },
    { id: 3, label: 'C', text: '어디가 내가 더 편하고 행복하지?', letter: 'F', score: 1 },
    { id: 4, label: 'D', text: '누구와 함께하느냐가 중요하지.', letter: 'F', score: 2 },
  ],
};

// Q4. J vs P (새로운 기회가 왔을 때 대처 방식)
const q4Data: QuestionData = {
  stepNumber: 4,
  totalSteps: 4,
  category: '',
  title: 'Q4. 더 좋아 보이는 기회가 나타나면?',
  description: '선택 즉시 나만의 MBTI 성향 진단 결과가 발표됩니다',
  options: [
    { id: 1, label: 'A', text: '좋아, 계획부터 짜자.', letter: 'J', score: 2 },
    { id: 2, label: 'B', text: '기준 정하고 신중하게 보자.', letter: 'J', score: 1 },
    { id: 3, label: 'C', text: '일단 여러 가능성 열어두자.', letter: 'P', score: 1 },
    { id: 4, label: 'D', text: '해봐야 알지! 일단 해보자.', letter: 'P', score: 2 },
  ],
};

export const App: React.FC = () => {
  const [step, setStep] = useState<Step>('landing');
  const [userSelections, setUserSelections] = useState<UserSelections>({
    mood: null,
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    mbti: 'ENFP',
  });

  const handleStart = () => {
    setStep('q1');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectMood = (mood: MoodOption) => {
    setUserSelections((prev) => ({ ...prev, mood }));
    setStep('q1');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectQ1 = (option: QuestionOption) => {
    setUserSelections((prev) => ({ ...prev, q1: option }));
    setStep('q2');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectQ2 = (option: QuestionOption) => {
    setUserSelections((prev) => ({ ...prev, q2: option }));
    setStep('q3');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectQ3 = (option: QuestionOption) => {
    setUserSelections((prev) => ({ ...prev, q3: option }));
    setStep('q4');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectQ4 = (option: QuestionOption) => {
    const eOrI = userSelections.q1?.letter || 'E';
    const nOrS = userSelections.q2?.letter || 'N';
    const tOrF = userSelections.q3?.letter || 'F';
    const jOrP = option.letter || 'P';
    const calculatedMbti = `${eOrI}${nOrS}${tOrF}${jOrP}`;

    setUserSelections((prev) => ({
      ...prev,
      q4: option,
      mbti: calculatedMbti,
    }));
    setStep('main');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToLanding = () => {
    setUserSelections((prev) => ({ ...prev, q1: null }));
    setStep('landing');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToQ1 = () => {
    setUserSelections((prev) => ({ ...prev, q2: null }));
    setStep('q1');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToQ2 = () => {
    setUserSelections((prev) => ({ ...prev, q3: null }));
    setStep('q2');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToQ3 = () => {
    setUserSelections((prev) => ({ ...prev, q4: null }));
    setStep('q3');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleReset = () => {
    setUserSelections({
      mood: null,
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      mbti: 'ENFP',
    });
    setStep('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (step === 'landing') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [step]);

  return (
    <div
      className={`min-h-screen bg-[#F8F9FE] text-gray-800 font-sans selection:bg-[#C198F0] selection:text-white ${
        step === 'landing' ? 'h-[100dvh] max-h-[100dvh] overflow-hidden' : ''
      }`}
    >
      {step === 'landing' && (
        <LandingStep onStart={handleStart} onSelectMood={handleSelectMood} />
      )}
      {step === 'q1' && (
        <QuestionStep
          key="q1"
          data={q1Data}
          themeColor="blue"
          selectedOptionId={userSelections.q1?.id}
          onSelectOption={handleSelectQ1}
          onBack={handleBackToLanding}
        />
      )}
      {step === 'q2' && (
        <QuestionStep
          key="q2"
          data={q2Data}
          themeColor="purple"
          selectedOptionId={userSelections.q2?.id}
          onSelectOption={handleSelectQ2}
          onBack={handleBackToQ1}
        />
      )}
      {step === 'q3' && (
        <QuestionStep
          key="q3"
          data={q3Data}
          themeColor="blue"
          selectedOptionId={userSelections.q3?.id}
          onSelectOption={handleSelectQ3}
          onBack={handleBackToQ2}
        />
      )}
      {step === 'q4' && (
        <QuestionStep
          key="q4"
          data={q4Data}
          themeColor="purple"
          selectedOptionId={userSelections.q4?.id}
          onSelectOption={handleSelectQ4}
          onBack={handleBackToQ3}
        />
      )}
      {step === 'main' && (
        <main className="fade-enter">
          <Navbar onReset={handleReset} />
          <ResultSection mbti={userSelections.mbti} />
          <BluebirdInfoSection />
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
