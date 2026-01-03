import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Calendar } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: 'Best School Award - Telangana',
    category: 'Excellence',
    year: '2025',
    description: 'Recognized as the Best CBSE School in Telangana for overall academic excellence and infrastructure.',
    icon: Trophy,
    color: 'bg-dps-gold',
  },
  {
    id: 2,
    title: 'National Science Olympiad - Gold',
    category: 'Academics',
    year: '2025',
    description: '15 students won Gold medals in the National Science Olympiad, ranking among top 100 nationwide.',
    icon: Medal,
    color: 'bg-primary',
  },
  {
    id: 3,
    title: 'State Athletics Championship',
    category: 'Sports',
    year: '2025',
    description: 'DPS Hyderabad secured the overall championship in Telangana State Athletics Meet.',
    icon: Award,
    color: 'bg-dps-orange',
  },
  {
    id: 4,
    title: 'National Youth Parliament - First Prize',
    category: 'Co-curricular',
    year: '2024',
    description: 'Our students won first prize in the National Youth Parliament competition.',
    icon: Star,
    color: 'bg-dps-blue',
  },
  {
    id: 5,
    title: 'Green School Award',
    category: 'Environment',
    year: '2024',
    description: 'Awarded for sustainable practices and environmental conservation initiatives.',
    icon: Award,
    color: 'bg-dps-teal',
  },
  {
    id: 6,
    title: 'CBSE Board Toppers',
    category: 'Academics',
    year: '2024',
    description: '5 students secured positions in top 1% of CBSE Class XII Board Examinations.',
    icon: Trophy,
    color: 'bg-secondary',
  },
];

const Awards = () => {
  return (
    <>
      <PageHero
        title="Awards & Achievements"
        subtitle="Celebrating our journey of excellence"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Awards & Achievements' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 bg-card p-6 rounded-2xl border border-border hover:shadow-xl transition-shadow"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${award.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <award.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {award.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {award.year}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-2">{award.title}</h3>
                    <p className="text-muted-foreground">{award.description}</p>
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

export default Awards;
