import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pets } from "@/lib/data";
import { CheckCircle, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation';

export default function PetDetailPage({ params }: { params: { id: string } }) {
    const pet = pets.find(p => p.id === params.id);

    if (!pet) {
        notFound();
    }

    return (
        <div className="container mx-auto py-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Image Gallery */}
                <div>
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4">
                        <Image src={pet.images[0]} alt={pet.name} layout="fill" objectFit="cover" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {pet.images.map((img, index) => (
                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                                <Image src={img} alt={`${pet.name} - ${index+1}`} layout="fill" objectFit="cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pet Details */}
                <div>
                    <h1 className="text-4xl font-bold text-slate-800">{pet.name}</h1>
                    <p className="text-lg text-slate-500 mt-1">{pet.breed}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                        <div className="bg-rose-100 text-primary px-3 py-1 rounded-full text-sm font-semibold">{pet.age}</div>
                        <div className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm font-semibold">{pet.gender}</div>
                        <div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-semibold">{pet.size}</div>
                    </div>

                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><PawPrint className="text-primary"/> {pet.name}'s Story</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600">{pet.story}</p>
                        </CardContent>
                    </Card>

                     <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Personality & Traits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {pet.personalityTraits.map((trait, index) => (
                                    <li key={index} className="flex items-center gap-2 text-slate-600">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>{trait}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Button size="lg" className="w-full mt-8 text-lg rounded-full">
                        Start Adoption Process
                    </Button>
                </div>
            </div>
             <div className="text-center mt-16">
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/pets">Back to All Pets</Link>
                </Button>
            </div>
        </div>
    )
}