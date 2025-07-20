import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate background image
    tl.fromTo('.hero-bg', 
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
    );

    // Animate title
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
      '-=1.5'
    );

    // Animate subtitle
    tl.fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.8'
    );

    // Animate buttons
    tl.fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );

    // Animate floating elements
    gsap.to('.floating-1', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.floating-2', {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5
    });

    gsap.to('.floating-3', {
      y: -25,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1
    });
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Premium Denim Background"
          className="hero-bg w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-2 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <div>
          <h1 ref={titleRef} className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
            DENIM
            <span className="block text-amber-400">COSTA</span>
          </h1>
          
          <p ref={subtitleRef} className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-light leading-relaxed max-w-xl mx-auto">
            Crafting premium denim with timeless style and uncompromising quality
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full">
            <button
              onClick={scrollToProducts}
              className="w-full sm:w-auto bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Collection
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-amber-400 transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      {/* Floating Elements */}
      <div ref={floatingElementsRef}>
        <div className="floating-1 absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full"></div>
        <div className="floating-2 absolute top-40 right-20 w-3 h-3 bg-white rounded-full"></div>
        <div className="floating-3 absolute bottom-40 left-20 w-1 h-1 bg-amber-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;