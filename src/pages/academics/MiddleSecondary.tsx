import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const MiddleSecondary = () => {
  const subjects = {
    middle: ['English', 'Hindi', 'Sanskrit', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Art', 'Music', 'Physical Education'],
    secondary: ['English', 'Hindi/Sanskrit', 'Mathematics', 'Science', 'Social Science', 'Computer Applications', 'Physical Education'],
  };

  return (
    <>
      <PageHero
        title="Middle & Secondary School"
        subtitle="Developing academic rigor and critical thinking"
        breadcrumbs={[{ label: 'Academics', href: '#' }, { label: 'Curriculum' }, { label: 'Middle & Secondary' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Middle School */}
              <motion.div
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border border-primary/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="display-4 text-foreground mb-4">Middle School</h2>
                <p className="text-muted-foreground mb-2">Classes VI - VIII</p>
                <p className="text-muted-foreground mb-6">
                  The middle school years focus on building a strong academic foundation while encouraging exploration and discovery.
                </p>
                <h3 className="font-heading font-semibold mb-4">Subjects</h3>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.middle.map((subject) => (
                    <div key={subject} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {subject}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Secondary School */}
              <motion.div
                className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-3xl border border-secondary/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="display-4 text-foreground mb-4">Secondary School</h2>
                <p className="text-muted-foreground mb-2">Classes IX - X</p>
                <p className="text-muted-foreground mb-6">
                  Preparing students for CBSE Board examinations with comprehensive coverage and exam-oriented practice.
                </p>
                <h3 className="font-heading font-semibold mb-4">Subjects</h3>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.secondary.map((subject) => (
                    <div key={subject} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {subject}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleSecondary;
