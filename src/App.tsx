import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VelocityText from './components/VelocityText';
import BrandStory from './components/BrandStory';
import ProductsSection from './components/ProductsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductDetailSidebar from './components/ProductDetailSidebar';
import CartSidebar from './components/CartSidebar';
import { products, Product } from './data/products';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product: Product, size: string) => {
    const existingItem = cartItems.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
      setCartItems(items =>
        items.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(items => [...items, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        quantity: 1
      }]);
    }
  };

  const updateQuantity = (id: number, size: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id, size);
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id && item.size === size
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const removeFromCart = (id: number, size: string) => {
    setCartItems(items => items.filter(item => !(item.id === id && item.size === size)));
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to products section when searching
    if (query) {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        cartItems={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      {/* Hero Section */}
      <Hero />
      <VelocityText />

      {/* Brand Story Section */}
      <BrandStory />

      {/* Products Section */}
      <ProductsSection 
        onProductClick={handleProductClick} 
        searchQuery={searchQuery}
      />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Product Detail Sidebar */}
      <ProductDetailSidebar
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        product={selectedProduct}
        onAddToCart={addToCart}
      />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;