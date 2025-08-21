import PetGrid from "@/components/PetGrid";

export default function PetsPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-800">Meet Our Adorable Pets</h1>
                <p className="mt-2 text-slate-600">Find your new best friend from our lovely candidates.</p>
            </div>
            <PetGrid />
        </div>
    )
}