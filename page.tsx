import { Quiz } from '@/components/Quiz';

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-500">Pet Matchmaker Quiz</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Answer a few questions and we'll help you find the perfect type of companion for your lifestyle!</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <Quiz />
      </div>
    </div>
  );
}
