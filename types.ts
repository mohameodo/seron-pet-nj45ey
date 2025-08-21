export interface Pet {
    id: string;
    name: string;
    species: 'Dog' | 'Cat' | 'Rabbit';
    breed: string;
    age: {
        value: string;
        group: 'Puppy/Kitten' | 'Young' | 'Adult' | 'Senior';
    };
    gender: 'Male' | 'Female';
    size: 'Small' | 'Medium' | 'Large';
    story: string;
    images: string[];
}
