export type Step = 'landing' | 'q1' | 'q2' | 'q3' | 'q4' | 'main';

export interface MoodOption {
  id: 'A' | 'B' | 'C' | 'D';
  name: string;
}

export interface QuestionOption {
  id: number;
  label: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
  letter: string; // 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P'
  score: number;
  subtext?: string;
}

export interface QuestionData {
  stepNumber: number;
  totalSteps: number;
  category: string;
  title: string;
  description: string;
  options: QuestionOption[];
}

export interface UserSelections {
  mood: MoodOption | null;
  q1: QuestionOption | null;
  q2: QuestionOption | null;
  q3: QuestionOption | null;
  q4: QuestionOption | null;
  mbti: string;
}
