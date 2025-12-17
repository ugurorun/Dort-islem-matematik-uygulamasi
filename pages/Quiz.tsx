import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { OperationType, Question, QuizConfig } from '../types';
import Keypad from '../components/Keypad';

const TOTAL_QUESTIONS = 10;
const INITIAL_TIME = 60; // 60 seconds

const Quiz: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  // Configuration based on type
  const [config, setConfig] = useState<QuizConfig | null>(null);
  
  // Game State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [question, setQuestion] = useState<Question | null>(null);
  const [input, setInput] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  
  // Timer Ref
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Setup config
    switch (type) {
      case OperationType.ADDITION:
        setConfig({ type: OperationType.ADDITION, title: 'Toplama', symbol: '+', color: 'text-primary', bgGradient: 'from-blue-100' });
        break;
      case OperationType.SUBTRACTION:
        setConfig({ type: OperationType.SUBTRACTION, title: 'Çıkarma', symbol: '-', color: 'text-accent-orange', bgGradient: 'from-orange-100' });
        break;
      case OperationType.MULTIPLICATION:
        setConfig({ type: OperationType.MULTIPLICATION, title: 'Çarpma', symbol: '×', color: 'text-accent-purple', bgGradient: 'from-purple-100' });
        break;
      case OperationType.DIVISION:
        setConfig({ type: OperationType.DIVISION, title: 'Bölme', symbol: '÷', color: 'text-accent-green', bgGradient: 'from-green-100' });
        break;
      default:
        navigate('/');
    }
  }, [type, navigate]);

  useEffect(() => {
    if (config) {
      generateQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, currentQuestionIndex]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          finishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finishQuiz = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    navigate('/result', {
      state: {
        score,
        totalTime: formatTime(INITIAL_TIME - timeLeft),
        correct: correctCount,
        wrong: wrongCount,
        totalQuestions: TOTAL_QUESTIONS
      }
    });
  };

  const generateQuestion = () => {
    let q: Question = { num1: 0, num2: 0, operator: '+', answer: 0 };
    const difficulty = 10; // Basic range

    if (!config) return;

    switch (config.type) {
      case OperationType.ADDITION:
        q.num1 = Math.floor(Math.random() * 20) + 1;
        q.num2 = Math.floor(Math.random() * 20) + 1;
        q.answer = q.num1 + q.num2;
        q.operator = '+';
        break;
      case OperationType.SUBTRACTION:
        q.num1 = Math.floor(Math.random() * 20) + 5;
        q.num2 = Math.floor(Math.random() * q.num1); // Ensure positive result
        q.answer = q.num1 - q.num2;
        q.operator = '-';
        break;
      case OperationType.MULTIPLICATION:
        q.num1 = Math.floor(Math.random() * 9) + 1;
        q.num2 = Math.floor(Math.random() * 9) + 1;
        q.answer = q.num1 * q.num2;
        q.operator = '×';
        break;
      case OperationType.DIVISION:
        q.num2 = Math.floor(Math.random() * 9) + 2;
        q.answer = Math.floor(Math.random() * 9) + 1;
        q.num1 = q.num2 * q.answer; // Ensure clean division
        q.operator = '÷';
        break;
    }
    setQuestion(q);
    setInput("");
  };

  const handleKeyPress = (key: string) => {
    if (input.length < 3) {
      setInput((prev) => prev + key);
    }
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleConfirm = () => {
    if (!question || input === "") return;

    const userAnswer = parseInt(input);
    const isCorrect = userAnswer === question.answer;

    if (isCorrect) {
      setScore((prev) => prev + 10);
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }

    if (currentQuestionIndex + 1 >= TOTAL_QUESTIONS) {
      finishQuiz();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (!config || !question) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#101922]">
      {/* Header */}
      <div className="flex items-center px-4 pt-6 pb-2 justify-between z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#111418] dark:text-white"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111418] dark:text-white">{config.title}</h2>
        <button className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 group transition-colors">
          <span className="material-symbols-outlined text-[#617589] group-hover:text-red-500 transition-colors" style={{ fontSize: '24px' }}>logout</span>
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-3 px-4 py-2">
        <div className="flex flex-1 flex-col justify-center items-center gap-1 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800/50 p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-yellow-500" style={{ fontSize: '20px' }}>stars</span>
            <p className="text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Puan</p>
          </div>
          <p className="text-primary tracking-tight text-3xl font-bold leading-none">{score}</p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center gap-1 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800/50 p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '20px' }}>timer</span>
            <p className="text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Süre</p>
          </div>
          <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-none">{formatTime(timeLeft)}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-2 px-6 py-4">
        <div className="flex justify-between items-end">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">İlerleme</p>
          <p className="text-[#111418] dark:text-white text-base font-bold">{currentQuestionIndex + 1}<span className="text-[#617589] dark:text-gray-500 font-normal">/{TOTAL_QUESTIONS}</span></p>
        </div>
        <div className="h-3 w-full rounded-full bg-[#dbe0e6] dark:bg-gray-700 overflow-hidden">
          <div 
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out" 
            style={{ width: `${((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-6 pt-2">
        <div className="w-full relative">
            <div className={`absolute -top-10 -left-10 w-32 h-32 bg-${config.bgGradient.split('-')[1]} dark:bg-${config.bgGradient.split('-')[1].replace('100', '900')}/20 rounded-full blur-3xl opacity-60`}></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-soft border border-slate-100 dark:border-gray-700 flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-[#111418] dark:text-white text-[56px] font-bold leading-tight tracking-tight drop-shadow-sm whitespace-nowrap">
                        {question.num1} <span className={config.color}>{question.operator}</span> {question.num2}
                    </h1>
                </div>

                <div className="w-full">
                    <label className="block text-center text-[#617589] dark:text-gray-400 text-sm font-medium mb-2">Cevabın:</label>
                    <div className="relative flex items-center justify-center w-full h-20 bg-[#f6f7f8] dark:bg-gray-900 border-2 border-primary/30 rounded-2xl overflow-hidden transition-all ring-4 ring-transparent focus-within:ring-primary/10">
                        <span className="text-4xl font-bold text-primary mr-1">{input}</span>
                        <div className="w-0.5 h-8 bg-primary cursor-blink rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Keypad */}
      <Keypad 
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onClear={handleClear}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Quiz;