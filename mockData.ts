import { type Pet } from "./types";

export const pets: Pet[] = [
    {
        id: '1',
        name: 'Buddy',
        species: 'Dog',
        breed: 'Golden Retriever',
        age: { value: '2 years', group: 'Young' },
        gender: 'Male',
        size: 'Large',
        story: 'Buddy is a playful and friendly Golden Retriever who loves long walks in the park and playing fetch. He gets along great with kids and other dogs.',
        images: [
            'https://loremflickr.com/600/600/golden,retriever,puppy,playing',
            'https://loremflickr.com/400/400/golden,retriever,puppy,smiling',
            'https://loremflickr.com/400/400/golden,retriever,puppy,park'
        ]
    },
    {
        id: '2',
        name: 'Lucy',
        species: 'Cat',
        breed: 'Siamese',
        age: { value: '1 year', group: 'Puppy/Kitten' },
        gender: 'Female',
        size: 'Small',
        story: 'Lucy is a curious and affectionate Siamese kitten. She loves cuddling on the couch and chasing after her favorite feather toy. She would be perfect for a quiet home.',
        images: [
            'https://loremflickr.com/600/600/siamese,kitten,cute',
            'https://loremflickr.com/400/400/siamese,kitten,playing',
            'https://loremflickr.com/400/400/siamese,kitten,sleeping'
        ]
    },
    {
        id: '3',
        name: 'Max',
        species: 'Dog',
        breed: 'German Shepherd',
        age: { value: '4 years', group: 'Adult' },
        gender: 'Male',
        size: 'Large',
        story: 'Max is a loyal and intelligent German Shepherd. He is well-trained, knows several commands, and would make a great companion for an active individual or family.',
        images: [
            'https://loremflickr.com/600/600/german,shepherd,dog',
            'https://loremflickr.com/400/400/german,shepherd,dog,sitting',
            'https://loremflickr.com/400/400/german,shepherd,dog,running'
        ]
    },
    {
        id: '4',
        name: 'Daisy',
        species: 'Rabbit',
        breed: 'Holland Lop',
        age: { value: '6 months', group: 'Puppy/Kitten' },
        gender: 'Female',
        size: 'Small',
        story: 'Daisy is a sweet and gentle Holland Lop. She enjoys hopping around in a safe space and munching on fresh veggies. She is litter-trained and very clean.',
        images: [
            'https://loremflickr.com/600/600/holland,lop,rabbit,cute',
            'https://loremflickr.com/400/400/holland,lop,rabbit,eating',
            'https://loremflickr.com/400/400/holland,lop,rabbit'
        ]
    },
    {
        id: '5',
        name: 'Rocky',
        species: 'Dog',
        breed: 'Boxer',
        age: { value: '3 years', group: 'Young' },
        gender: 'Male',
        size: 'Medium',
        story: 'Rocky is an energetic and goofy Boxer with a heart of gold. He loves to play and would thrive in a home with a yard and an active family to keep him company.',
        images: [
            'https://loremflickr.com/600/600/boxer,dog,happy',
            'https://loremflickr.com/400/400/boxer,dog,playing',
            'https://loremflickr.com/400/400/boxer,dog,funny'
        ]
    },
    {
        id: '6',
        name: 'Misty',
        species: 'Cat',
        breed: 'Persian',
        age: { value: '5 years', group: 'Adult' },
        gender: 'Female',
        size: 'Medium',
        story: 'Misty is a calm and majestic Persian cat. She has a luxurious coat that requires regular grooming. She prefers a quiet environment where she can lounge and be admired.',
        images: [
            'https://loremflickr.com/600/600/persian,cat,fluffy',
            'https://loremflickr.com/400/400/persian,cat,white',
            'https://loremflickr.com/400/400/persian,cat,eyes'
        ]
    },
     {
        id: '7',
        name: 'Charlie',
        species: 'Dog',
        breed: 'Beagle',
        age: { value: '8 years', group: 'Senior' },
        gender: 'Male',
        size: 'Medium',
        story: 'Charlie is a sweet senior Beagle looking for a comfortable home to spend his golden years. He loves short, sniffy walks and long naps in a sunbeam.',
        images: [
            'https://loremflickr.com/600/600/beagle,dog,senior',
            'https://loremflickr.com/400/400/beagle,dog,sleeping',
            'https://loremflickr.com/400/400/beagle,dog,happy'
        ]
    },
     {
        id: '8',
        name: 'Oreo',
        species: 'Cat',
        breed: 'Domestic Shorthair',
        age: { value: '2 years', group: 'Young' },
        gender: 'Male',
        size: 'Medium',
        story: 'Oreo is a classic tuxedo cat with a charming personality. He is playful, friendly with everyone he meets, and has a purr that can melt your heart.',
        images: [
            'https://loremflickr.com/600/600/tuxedo,cat,cute',
            'https://loremflickr.com/400/400/tuxedo,cat,playing',
            'https://loremflickr.com/400/400/tuxedo,cat'
        ]
    }
];
