import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  filters: {
    category: string;
    priceRange: [number, number];
    sizes: string[];
    colors: string[];
  };
  onFilterChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  onToggle,
  filters,
  onFilterChange
}) => {
  const categories = ['All', 'Men', 'Women', 'Skinny', 'Straight', 'Bootcut', 'Wide Leg'];
  const sizes = ['26', '28', '30', '32', '34', '36', '38', '40'];
  const colors = ['Blue', 'Black', 'White', 'Grey', 'Light Blue', 'Dark Blue'];

  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filters, category });
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: newSizes });
  };

  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFilterChange({ ...filters, colors: newColors });
  };

  const handlePriceChange = (value: number, index: number) => {
    const newPriceRange: [number, number] = [...filters.priceRange];
    newPriceRange[index] = value;
    onFilterChange({ ...filters, priceRange: newPriceRange });
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed bottom-6 right-6 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors z-30"
      >
        <Filter className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative lg:translate-x-0 left-0 top-0 h-full w-80 bg-white shadow-xl lg:shadow-none z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b lg:hidden">
          <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 hidden lg:block">Filters</h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    filters.category === category
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Max"
                />
              </div>
              <div className="text-sm text-gray-500">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </div>
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    filters.sizes.includes(size)
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Color</h3>
            <div className="space-y-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorToggle(color)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md transition-colors ${
                    filters.colors.includes(color)
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      color === 'Blue' ? 'bg-blue-500' :
                      color === 'Black' ? 'bg-black' :
                      color === 'White' ? 'bg-white border-gray-300' :
                      color === 'Grey' ? 'bg-gray-500' :
                      color === 'Light Blue' ? 'bg-blue-300' :
                      'bg-blue-800'
                    }`}
                  />
                  <span>{color}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => onFilterChange({
              category: 'All',
              priceRange: [0, 500],
              sizes: [],
              colors: []
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;