import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, Shield } from 'lucide-react';

const StudentCare = () => {
  return (
    <>
      <PageHero
        title="Student Care"
        subtitle="Supporting every student's emotional and academic well-being"
        breadcrumbs={[{ label: 'Academics', href: '#' }, { label: 'Student Care' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                At DPS Hyderabad, we believe that every student deserves personalized attention and support. Our comprehensive student care program addresses academic, emotional, and social needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Counseling Services',
                  desc: 'Professional counselors available for academic guidance, emotional support, and career counseling.',
                  features: ['Individual counseling', 'Group sessions', 'Parent consultations', 'Crisis intervention'],
                },
                {
                  icon: Heart,
                  title: 'Health & Wellness',
                  desc: 'Comprehensive health programs including regular check-ups, first aid, and wellness education.',
                  features: ['Medical room with nurse', 'Annual health check-ups', 'Mental health awareness', 'Nutrition guidance'],
                },
                {
                  icon: Users,
                  title: 'Peer Support',
                  desc: 'Student-led initiatives fostering a supportive community and peer mentoring.',
                  features: ['Buddy system', 'Peer mentoring', 'Student support groups', 'Anti-bullying programs'],
                },
                {
                  icon: Shield,
                  title: 'Safety & Security',
                  desc: 'A safe learning environment with comprehensive safety protocols.',
                  features: ['CCTV surveillance', 'Trained security staff', 'Emergency protocols', 'Safe transport'],
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-card p-8 rounded-2xl border border-border"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentCare;
