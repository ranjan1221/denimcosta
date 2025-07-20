import React, { useState } from 'react';
import { X, Heart, ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  color: string;
  description: string;
}

interface ProductDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product, size: string) => void;
}

const ProductDetailSidebar: React.FC<ProductDetailSidebarProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product || !selectedSize) return;
    
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product, selectedSize);
    }
    
    // Reset and close
    setSelectedSize('');
    setQuantity(1);
    onClose();
  };

  if (!product) return null;

  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto p-6">
          {/* Product Image */}
          <div className="relative mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            {discount > 0 && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                -{discount}%
              </div>
            )}
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`absolute top-3 right-3 p-2 rounded-full ${
                isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
              } hover:scale-110 transition-all shadow-md`}
            >
              <Heart className="h-5 w-5" fill={isLiked ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(4.8) • 127 reviews</span>
                </div>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-blue-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Color */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 rounded-full border-2 border-gray-300 ${
                    product.color === 'Blue' ? 'bg-blue-500' :
                    product.color === 'Black' ? 'bg-black' :
                    product.color === 'White' ? 'bg-white' :
                    product.color === 'Grey' ? 'bg-gray-500' :
                    product.color === 'Light Blue' ? 'bg-blue-300' :
                    'bg-blue-800'
                  }`}
                />
                <span className="text-sm text-gray-700">{product.color}</span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-lg flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
            </button>

            {/* Product Features */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Premium denim construction</li>
                <li>• Comfortable stretch fabric</li>
                <li>• Reinforced stress points</li>
                <li>• Machine washable</li>
                <li>• Sustainable materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailSidebar;