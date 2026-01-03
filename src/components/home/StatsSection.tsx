import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, GraduationCap, Globe, Trophy, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Students Enrolled' },
  { icon: GraduationCap, value: 250, suffix: '+', label: 'Expert Faculty' },
  { icon: Trophy, value: 500, suffix: '+', label: 'Awards Won' },
  { icon: Globe, value: 50, suffix: '+', label: 'Countries Represented' },
  { icon: Award, value: 98, suffix: '%', label: 'Board Pass Rate' },
  { icon: Briefcase, value: 25, suffix: '+', label: 'Years Excellence' },
];

export const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    countersRef.current.forEach((counter, index) => {
      if (!counter) return;

      const stat = stats[index];
      const obj = { value: 0 };

      gsap.to(obj, {
        value: stat.value,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          counter.textContent = Math.round(obj.value).toString();
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 mb-4">
                <stat.icon className="w-7 h-7 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                <span ref={(el) => (countersRef.current[index] = el)}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
