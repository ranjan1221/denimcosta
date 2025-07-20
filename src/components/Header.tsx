import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { gsap } from 'gsap';

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({
  cartItems,
  onCartClick,
  isMenuOpen,
  onMenuToggle,
  onSearch,
  searchQuery
}) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    // Animate header on mount
    gsap.fromTo('.header-content', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    
    if (!isSearchExpanded) {
      gsap.to('.search-input', {
        width: '300px',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      gsap.to('.search-input', {
        width: '0px',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 header-content">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Denim Costa Logo"
              className="h-16 w-auto mr-2 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={scrollToProducts} className="text-gray-700 hover:text-blue-900 transition-colors">Shop</button>
            <a href="#story" className="text-gray-700 hover:text-blue-900 transition-colors">Story</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">Lookbook</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
          </nav>

          {/* Search, Cart and Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="flex items-center">
              <button
                onClick={toggleSearch}
                className="p-2 text-gray-700 hover:text-blue-900 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Search jeans..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="search-input w-0 opacity-0 ml-2 px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                style={{ width: isSearchExpanded ? '300px' : '0px' }}
              />
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-900 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 text-gray-700 hover:text-blue-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <button onClick={scrollToProducts} className="text-gray-700 hover:text-blue-900 transition-colors py-2 text-left">Shop</button>
              <a href="#story" className="text-gray-700 hover:text-blue-900 transition-colors py-2">Story</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors py-2">Lookbook</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors py-2">About</a>
            </nav>
            {/* Mobile Search */}
            <div className="mt-4 pt-4 border-t">
              <input
                type="text"
                placeholder="Search jeans..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;