'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const careTips = [
  { title: 'Bringing Your New Pet Home', content: 'Create a safe, quiet space for your new pet to decompress. Introduce them to other family members and pets slowly and under supervision. Keep their initial environment small and gradually expand their access to your home.' },
  { title: 'Nutrition and Feeding', content: 'Provide high-quality pet food appropriate for their age, size, and breed. Follow feeding guidelines to avoid overfeeding. Ensure fresh, clean water is always available.' },
  { title: 'Exercise and Play', content: 'Regular exercise is crucial for your pet\'s physical and mental health. For dogs, daily walks and playtime are essential. For cats, interactive toys can provide great stimulation.' },
  { title: 'Grooming and Hygiene', content: 'Regular grooming, including brushing, bathing, and nail trimming, keeps your pet healthy and clean. Also, maintain good dental hygiene by brushing their teeth regularly.' },
  { title: 'Veterinary Care', content: 'Schedule regular check-ups with your veterinarian. Keep vaccinations up to date and use preventative treatments for fleas, ticks, and worms as recommended by your vet.' },
];

export function CareTipAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {careTips.map((tip, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50"
          >
            <span>{tip.title}</span>
            <ChevronDown className={cn('h-5 w-5 transition-transform', { 'rotate-180': openIndex === index })} />
          </button>
          {openIndex === index && (
            <div className="p-5 pt-0 text-gray-600">
              {tip.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
