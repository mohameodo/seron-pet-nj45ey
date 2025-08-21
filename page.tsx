import { CareTipAccordion } from '@/components/CareTipAccordion';

export default function TipsPage() {
  return (
    <div className="bg-teal-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-teal-600">Pet Care Corner</h1>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Essential tips and guides to help you be the best pet parent you can be.</p>
            </div>
            <div className="max-w-3xl mx-auto">
                <CareTipAccordion />
            </div>
        </div>
    </div>
  );
}
