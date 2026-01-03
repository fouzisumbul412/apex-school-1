import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import campusMain from '@/assets/campus-main.jpg';
import campusLab from '@/assets/campus-lab.jpg';
import campusLibrary from '@/assets/campus-library.jpg';
import campusSports from '@/assets/campus-sports.jpg';
import campusAuditorium from '@/assets/campus-auditorium.jpg';
import campusComputer from '@/assets/campus-computer.jpg';
import campusCafeteria from '@/assets/campus-cafeteria.jpg';

const campuses = [
  { id: 1, name: 'Main Campus', image: campusMain, description: 'Our sprawling 15-acre main campus' },
  { id: 2, name: 'Science Labs', image: campusLab, description: 'State-of-the-art science laboratories' },
  { id: 3, name: 'Library', image: campusLibrary, description: 'Modern library with 50,000+ books' },
  { id: 4, name: 'Sports Complex', image: campusSports, description: 'World-class sports facilities' },
  { id: 5, name: 'Auditorium', image: campusAuditorium, description: '1500-seat air-conditioned auditorium' },
  { id: 6, name: 'Computer Lab', image: campusComputer, description: 'Advanced computer laboratories' },
  { id: 7, name: 'Cafeteria', image: campusCafeteria, description: 'Hygienic multi-cuisine cafeteria' },
];

export const CampusSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotateToIndex = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const next = () => {
    rotateToIndex((activeIndex + 1) % campuses.length);
  };

  const prev = () => {
    rotateToIndex((activeIndex - 1 + campuses.length) % campuses.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        next();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-dps-green-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore Our Facilities
          </motion.span>
          <motion.h2
            className="display-2 text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our <span className="text-gradient-gold">Campus</span> Facilities
          </motion.h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            State-of-the-art infrastructure designed to nurture every aspect of student development
          </p>
        </div>

        {/* 3D Cylindrical Slider */}
        <div ref={sliderRef} className="relative h-[500px] md:h-[600px] perspective-1000">
          {/* Main Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <img
                  src={campuses[activeIndex].image}
                  alt={campuses[activeIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    className="text-3xl md:text-4xl font-heading font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {campuses[activeIndex].name}
                  </motion.h3>
                  <motion.p
                    className="text-white/80 text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {campuses[activeIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/90 text-secondary-foreground flex items-center justify-center shadow-gold hover:scale-110 transition-transform z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/90 text-secondary-foreground flex items-center justify-center shadow-gold hover:scale-110 transition-transform z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            {campuses.map((campus, index) => (
              <motion.button
                key={campus.id}
                onClick={() => rotateToIndex(index)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  index === activeIndex
                    ? 'border-secondary scale-110 shadow-gold'
                    : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
                whileHover={{ scale: index === activeIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
