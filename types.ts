export enum OperationType {
  ADDITION = 'ADDITION',
  SUBTRACTION = 'SUBTRACTION',
  MULTIPLICATION = 'MULTIPLICATION',
  DIVISION = 'DIVISION'
}

export interface QuizConfig {
  type: OperationType;
  title: string;
  symbol: string;
  color: string;
  bgGradient: string;
}

export interface Question {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
}

export interface QuizResultData {
  score: number;
  totalTime: string;
  correct: number;
  wrong: number;
  totalQuestions: number;
}
