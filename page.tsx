'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { quizQuestions } from '@/lib/data';
import { PawPrint } from 'lucide-react';
import Link from 'next/link';

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle quiz completion
      setIsCompleted(true);
    }
  };

  const progress = ((currentStep + 1) / quizQuestions.length) * 100;
  const currentQuestion = quizQuestions[currentStep];

  if (isCompleted) {
    return (
      <div className="container mx-auto max-w-2xl py-12 text-center">
        <Card className="p-8">
            <PawPrint className="mx-auto h-16 w-16 text-primary mb-4"/>
            <h1 className="text-3xl font-bold">Quiz Completed!</h1>
            <p className="text-slate-600 mt-2">We're finding the best matches for you.</p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/pets">See Your Matches</Link>
            </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="bg-rose-50 min-h-screen flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <Progress value={progress} className="mb-4" />
          <CardTitle className="text-2xl">Pet Matcher Quiz</CardTitle>
          <CardDescription>{currentQuestion.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
            className="space-y-4"
            value={answers[currentQuestion.id] || ''}
            >
            {currentQuestion.options.map((option, index) => (
              <Label key={index} className="flex items-center gap-4 p-4 border rounded-lg has-[:checked]:bg-rose-50 has-[:checked]:border-primary cursor-pointer transition-colors">
                <RadioGroupItem value={option} id={`${currentQuestion.id}-${index}`} />
                <span>{option}</span>
              </Label>
            ))}
          </RadioGroup>
          <div className="mt-8 flex justify-end">
            <Button onClick={handleNext} disabled={!answers[currentQuestion.id]}>
              {currentStep === quizQuestions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
