'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { PawPrint } from 'lucide-react';

const quizQuestions = [
  {
    question: "What is your living situation?",
    options: ["Apartment", "House with a yard", "House without a yard"],
  },
  {
    question: "How active is your lifestyle?",
    options: ["Couch potato", "Moderately active", "Very active"],
  },
  {
    question: "How much time can you dedicate to a pet daily?",
    options: ["Less than 2 hours", "2-4 hours", "More than 4 hours"],
  },
  {
    question: "Do you have other pets?",
    options: ["Yes, dogs", "Yes, cats", "No"],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (option: string) => {
    setAnswers({ ...answers, [currentQuestion]: option });
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <PawPrint className="mx-auto h-16 w-16 text-teal-500 mb-4" />
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Quiz Completed!</h1>
        <p className="text-slate-600 mb-8">Thank you for telling us about yourself. We're now finding the perfect furry friends for you!</p>
        <Button onClick={() => { /* logic to show results */ alert('Showing your matches!'); }}>
          See Your Matches
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-2">Find Your Perfect Match</h1>
        <p className="text-center text-slate-500 mb-8">Answer a few questions to help us find the best companion for your lifestyle.</p>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
          <div className="mb-4">
            <p className="text-sm font-semibold text-rose-500">Question {currentQuestion + 1} of {quizQuestions.length}</p>
            <h2 className="text-2xl font-semibold text-slate-700 mt-1">
              {quizQuestions[currentQuestion].question}
            </h2>
          </div>
          <div className="space-y-4">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-lg border border-slate-200 hover:bg-rose-50 hover:border-rose-300 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
