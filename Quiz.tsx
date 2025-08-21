'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { allPets } from '@/data/pets';
import { PetCard } from './PetCard';
import { PawPrint } from 'lucide-react';

const quizQuestions = [
  {
    question: 'What is your living situation?',
    options: ['Apartment', 'House with a yard', 'Farm / Large property'],
    petMatch: { 'Apartment': ['cat', 'small dog'], 'House with a yard': ['dog', 'cat'], 'Farm / Large property': ['dog'] }
  },
  {
    question: 'How active are you?',
    options: ['Couch potato', 'Moderately active', 'Very active'],
    petMatch: { 'Couch potato': ['cat', 'small dog'], 'Moderately active': ['dog', 'cat'], 'Very active': ['dog'] }
  },
  {
    question: 'How much time can you dedicate to a pet daily?',
    options: ['Less than an hour', '1-2 hours', 'More than 2 hours'],
    petMatch: { 'Less than an hour': ['cat'], '1-2 hours': ['cat', 'dog'], 'More than 2 hours': ['dog'] }
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getResults = () => {
    const petTypeCount: { [key: string]: number } = { dog: 0, 'small dog': 0, cat: 0 };
    answers.forEach((answer, index) => {
      const matches = quizQuestions[index].petMatch[answer];
      matches.forEach(type => {
        petTypeCount[type]++;
      });
    });

    const bestMatch = Object.keys(petTypeCount).reduce((a, b) => petTypeCount[a] > petTypeCount[b] ? a : b);
    const recommendedPets = allPets.filter(pet => {
        if (bestMatch === 'small dog') return pet.type.toLowerCase() === 'dog' && pet.size.toLowerCase() === 'small';
        return pet.type.toLowerCase() === bestMatch;
    }).slice(0, 3);

    return { bestMatch, recommendedPets };
  };

  if (showResults) {
    const { bestMatch, recommendedPets } = getResults();
    return (
      <div className="text-center">
        <PawPrint className="h-12 w-12 text-rose-500 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">Your Perfect Match!</h2>
        <p className="mt-2 text-gray-600">Based on your answers, a <strong>{bestMatch}</strong> would be a great fit for you!</p>
        <h3 className="text-xl font-semibold mt-8 mb-4">Here are some friends that might be perfect:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedPets.map(pet => <PetCard key={pet.id} pet={pet} />)}
        </div>
        <Button onClick={resetQuiz} className="mt-8">Take Quiz Again</Button>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div className="bg-rose-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">{quizQuestions[currentQuestion].question}</h2>
        <div className="grid grid-cols-1 gap-4">
            {quizQuestions[currentQuestion].options.map(option => (
            <Button key={option} variant="outline" size="lg" onClick={() => handleAnswer(option)}>
                {option}
            </Button>
            ))}
        </div>
    </div>
  );
}
