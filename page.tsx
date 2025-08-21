'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const careTips = [
  {
    title: 'Choosing the Right Food',
    content: 'Look for high-quality pet food that lists a specific meat as the first ingredient. Avoid fillers like corn and soy. The right food depends on your pet\'s age, size, and activity level. Consult your vet for personalized recommendations.',
  },
  {
    title: 'Establishing a Routine',
    content: 'Pets thrive on routine. Try to feed, walk, and play with your pet at the same times each day. This helps them feel secure and can reduce anxiety and behavioral issues.',
  },
  {
    title: 'Socialization is Key',
    content: 'Proper socialization from a young age is crucial. Safely expose your puppy or kitten to various people, places, sounds, and other animals to help them grow into a well-adjusted adult.',
  },
  {
    title: 'Regular Vet Check-ups',
    content: 'Annual check-ups are essential for catching potential health problems early. Keep up with vaccinations, parasite control, and dental cleanings as recommended by your veterinarian.',
  },
];

const AccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-slate-200">
    <h2>
      <button
        type="button"
        className="flex justify-between items-center w-full p-5 font-medium text-left text-slate-700 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-200"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </h2>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-5 border-t-0 border-slate-200">
        <p className="text-slate-500">{content}</p>
      </div>
    </div>
  </div>
);

export default function TipsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-2">Pet Care Tips</h1>
        <p className="text-center text-slate-500 mb-8">Essential advice for a happy and healthy companion.</p>
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
          {careTips.map((tip, index) => (
            <AccordionItem
              key={index}
              title={tip.title}
              content={tip.content}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
