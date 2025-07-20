import React, { useEffect, useRef } from 'react';
import { Award, Heart, Truck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BrandStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Crafted from the finest denim fabrics with attention to every detail"
    },
    {
      icon: Heart,
      title: "Timeless Style",
      description: "Classic designs that never go out of fashion, built to last generations"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your perfect jeans to you faster"
    }
  ];

  useEffect(() => {
    // Animate title on scroll
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate feature cards
    gsap.fromTo('.feature-card',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate content section
    gsap.fromTo('.content-section',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.content-image',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="story" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Denim Costa Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for authentic denim craftsmanship, Denim Costa represents 
            the perfect fusion of traditional techniques and contemporary style. Every pair 
            tells a story of dedication, quality, and timeless appeal.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="content-section space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Crafted with Passion</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each piece in our collection is meticulously designed and crafted using 
              premium materials sourced from the world's finest mills. Our commitment 
              to quality ensures that every pair of Denim Costa jeans becomes a cherished 
              part of your wardrobe.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From classic straight cuts to modern skinny fits, we offer styles that 
              celebrate individuality while maintaining the timeless appeal that makes 
              great denim truly special.
            </p>
          </div>
          <div className="content-image relative">
            <img
              src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Premium Denim Craftsmanship"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;