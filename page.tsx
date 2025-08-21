import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { petCareTips } from "@/lib/data";
import { PawPrint } from "lucide-react";

export default function TipsPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-800">Pet Care Tips</h1>
                <p className="mt-2 text-slate-600">Everything you need to know to be a great pet parent.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {petCareTips.map((tip) => (
                    <Card key={tip.id} className="flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${tip.category === 'Health' ? 'bg-sky-100' : tip.category === 'Training' ? 'bg-amber-100' : 'bg-rose-100'}`}>
                                    <PawPrint className={`h-6 w-6 ${tip.category === 'Health' ? 'text-sky-500' : tip.category === 'Training' ? 'text-amber-500' : 'text-primary'}`} />
                                </div>
                                <CardTitle>{tip.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-slate-600">{tip.content}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}