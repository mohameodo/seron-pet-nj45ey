import { Dispatch, SetStateAction } from 'react';
import { Card } from './ui/Card';
import { Select } from './ui/Select';
import { Button } from './ui/Button';

interface Filters {
  type: string;
  age: string;
  size: string;
  gender: string;
}

interface PetFilterSidebarProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export function PetFilterSidebar({ filters, setFilters }: PetFilterSidebarProps) {
  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const resetFilters = () => {
    setFilters({ type: 'all', age: 'all', size: 'all', gender: 'all' });
  }

  return (
    <Card className="p-6 sticky top-24">
      <h3 className="text-lg font-semibold mb-4">Filter Pets</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <Select id="type" value={filters.type} onChange={e => handleFilterChange('type', e.target.value)}>
            <option value="all">All Types</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </Select>
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
          <Select id="age" value={filters.age} onChange={e => handleFilterChange('age', e.target.value)}>
            <option value="all">All Ages</option>
            <option value="puppy">Puppy / Kitten</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </Select>
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Size</label>
          <Select id="size" value={filters.size} onChange={e => handleFilterChange('size', e.target.value)}>
            <option value="all">All Sizes</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Select>
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <Select id="gender" value={filters.gender} onChange={e => handleFilterChange('gender', e.target.value)}>
            <option value="all">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>
        <Button variant="outline" className="w-full" onClick={resetFilters}>Reset Filters</Button>
      </div>
    </Card>
  );
}
