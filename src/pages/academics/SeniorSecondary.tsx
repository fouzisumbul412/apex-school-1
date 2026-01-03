import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Beaker, Calculator, Briefcase, Palette } from 'lucide-react';

const SeniorSecondary = () => {
  const streams = [
    {
      title: 'Science - PCM',
      icon: Calculator,
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Computer Science/Physical Education'],
      color: 'primary',
    },
    {
      title: 'Science - PCB',
      icon: Beaker,
      subjects: ['Physics', 'Chemistry', 'Biology', 'English', 'Mathematics/Physical Education'],
      color: 'dps-teal',
    },
    {
      title: 'Commerce',
      icon: Briefcase,
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'English', 'Mathematics/Informatics Practices'],
      color: 'secondary',
    },
    {
      title: 'Humanities',
      icon: Palette,
      subjects: ['History', 'Political Science', 'Economics/Geography', 'English', 'Psychology/Sociology'],
      color: 'dps-orange',
    },
  ];

  return (
    <>
      <PageHero
        title="Senior Secondary School"
        subtitle="Preparing students for higher education and careers"
        breadcrumbs={[{ label: 'Academics', href: '#' }, { label: 'Curriculum' }, { label: 'Senior Secondary' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Classes XI and XII offer specialized streams aligned with CBSE curriculum, preparing students for competitive examinations and higher education.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {streams.map((stream, index) => (
                <motion.div
                  key={stream.title}
                  className="bg-card p-6 rounded-2xl border border-border hover:shadow-elegant transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-${stream.color}/10 flex items-center justify-center`}>
                      <stream.icon className={`w-6 h-6 text-${stream.color}`} />
                    </div>
                    <h3 className="font-heading font-bold text-xl">{stream.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {stream.subjects.map((subject) => (
                      <div key={subject} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {subject}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeniorSecondary;
