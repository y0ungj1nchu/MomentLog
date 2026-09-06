export type Step = 'landing' | 'q1' | 'q2' | 'main';

export interface MoodOption {
  id: 'A' | 'B' | 'C' | 'D';
  name: string;
}

export interface QuestionData {
  stepNumber: number;
  totalSteps: number;
  category: string;
  title: string;
  description: string;
  options: {
    id: number;
    text: string;
    subtext?: string;
  }[];
}

export interface UserSelections {
  mood: MoodOption | null;
  q1: number | null;
  q2: number | null;
}
