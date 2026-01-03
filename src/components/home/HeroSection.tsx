import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play, Award, Users, BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCampus from '@/assets/hero-campus.jpg';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textRef.current || !imageRef.current) return;

    const tl = gsap.timeline();

    // Initial animation
    tl.fromTo(
      textRef.current.querySelectorAll('.hero-text-animate'),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <img
          src={heroCampus}
          alt="DPS Hyderabad Campus"
          className="w-full h-[110%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dps-green-dark/90 via-dps-green/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dps-green-dark/50 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-secondary/20 blur-xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-dps-teal/20 blur-xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div ref={textRef} className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="hero-text-animate inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Award className="w-4 h-4" />
            CBSE Affiliated | Excellence Since 1996
          </motion.div>

          {/* Main Heading */}
          <h1 className="hero-text-animate display-1 text-primary-foreground mb-6">
            Nurturing{' '}
            <span className="text-gradient-gold">Future Leaders</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-text-animate body-lg text-primary-foreground/90 mb-8 max-w-2xl">
            Where academic excellence meets holistic development. Join us in shaping tomorrow's innovators, thinkers, and leaders at Delhi Public School, Hyderabad.
          </p>

          {/* CTA Buttons */}
          <div className="hero-text-animate flex flex-wrap gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/admission-process">
                Admissions 2026-27
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/infrastructure-our-campus">
                <Play className="w-5 h-5 mr-2" />
                Explore Campus
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <motion.div
            className="hero-text-animate grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-primary-foreground/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: Users, value: '5000+', label: 'Students' },
              { icon: BookOpen, value: '250+', label: 'Faculty' },
              { icon: Award, value: '25+', label: 'Years of Excellence' },
              { icon: Calendar, value: '15', label: 'Acre Campus' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 mb-2">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-primary-foreground/60 text-sm">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-secondary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
