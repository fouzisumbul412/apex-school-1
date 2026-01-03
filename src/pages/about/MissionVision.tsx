import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Target, Eye, Compass, Star } from 'lucide-react';

const MissionVision = () => {
  return (
    <>
      <PageHero
        title="Mission & Vision"
        subtitle="Guiding principles that drive our educational excellence"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'Mission & Vision' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 rounded-3xl border border-primary/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="display-3 text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To provide quality education that nurtures the intellectual, physical, emotional, and social development of every child, preparing them to be responsible global citizens.
              </p>
              <ul className="space-y-3">
                {[
                  'Foster academic excellence through innovative teaching methods',
                  'Develop critical thinking and problem-solving skills',
                  'Encourage creativity and self-expression',
                  'Build character through value-based education',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Star className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 md:p-12 rounded-3xl border border-secondary/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="display-3 text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be a world-class educational institution that inspires students to achieve their full potential and become leaders who contribute positively to society.
              </p>
              <ul className="space-y-3">
                {[
                  'Create lifelong learners with a global perspective',
                  'Embrace technology and innovation in education',
                  'Promote sustainable and responsible citizenship',
                  'Celebrate diversity and foster inclusivity',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-3 text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The pillars that guide our educational philosophy and shape the character of our students
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Excellence', desc: 'Striving for the best in everything we do' },
              { icon: '🤝', title: 'Integrity', desc: 'Upholding honesty and ethical standards' },
              { icon: '💡', title: 'Innovation', desc: 'Embracing new ideas and technologies' },
              { icon: '❤️', title: 'Compassion', desc: 'Caring for others and giving back' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-elegant transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
