import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export const WelcomeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.welcome-animate'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="w-8 h-8 text-secondary/20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Quote Banner */}
        <motion.div
          ref={quoteRef}
          className="welcome-animate text-center mb-16"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10 px-8 py-6 rounded-2xl border border-secondary/20 shadow-elegant">
            <blockquote className="text-lg md:text-xl lg:text-2xl font-heading italic text-foreground/80 leading-relaxed">
              "Education breeds Confidence, Confidence breeds Hope,
              <br className="hidden md:block" />
              And Hope breeds Peace"
            </blockquote>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <div className="welcome-animate inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Celebrating 23 Years of Excellence
            </div>

            <h2 className="welcome-animate display-2 text-foreground mb-4">
              Welcome to{' '}
              <span className="text-gradient-gold">APEX</span>
            </h2>

            <div className="welcome-animate text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              The School of Excellence
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="welcome-animate">
                APEX - The School of Excellence stands as a beacon of quality education, nurturing young minds to become future leaders. Our commitment to academic excellence, combined with holistic development, makes us a premier educational institution.
              </p>
              <p className="welcome-animate">
                With state-of-the-art infrastructure, dedicated faculty, and a curriculum designed for 21st-century learners, we provide an environment where every student can discover their potential and achieve their dreams.
              </p>
              <p className="welcome-animate">
                Our alumni have excelled in prestigious universities across India and the world, a testament to our unwavering commitment to quality education and character building.
              </p>
              <p className="welcome-animate font-medium text-foreground">
                At APEX, we believe in shaping not just students, but future leaders who will make a positive impact on the world.
              </p>
            </div>

            <motion.div
              className="welcome-animate mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="gold" size="lg" asChild>
                <Link to="/our-school">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '2002', label: 'Established', icon: '🏫' },
              { value: '23+', label: 'Years of Excellence', icon: '⭐' },
              { value: '5000+', label: 'Students', icon: '👨‍🎓' },
              { value: '100%', label: 'Board Results', icon: '📊' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="welcome-animate bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-elegant transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
