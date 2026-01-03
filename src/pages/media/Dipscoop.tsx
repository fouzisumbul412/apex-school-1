import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const newsletters = [
  {
    id: 1,
    title: 'Science Week Special',
    issue: 'Vol. 23, Issue 12',
    date: 'December 2025',
    author: 'Editorial Team',
    excerpt: 'Explore the exciting discoveries and innovations from our annual Science Week, featuring student projects that won national recognition.',
  },
  {
    id: 2,
    title: 'Sports Champions Edition',
    issue: 'Vol. 23, Issue 11',
    date: 'November 2025',
    author: 'Sports Desk',
    excerpt: 'Celebrating our athletes who brought glory to DPS Hyderabad in state and national competitions this season.',
  },
  {
    id: 3,
    title: 'Diwali Celebrations',
    issue: 'Vol. 23, Issue 10',
    date: 'October 2025',
    author: 'Cultural Committee',
    excerpt: 'A colorful recap of the Diwali festivities at school, including the rangoli competition and cultural performances.',
  },
  {
    id: 4,
    title: 'Independence Day Special',
    issue: 'Vol. 23, Issue 8',
    date: 'August 2025',
    author: 'Editorial Team',
    excerpt: 'Patriotic fervor filled the campus as we celebrated 79 years of India\'s independence with special programs.',
  },
];

const Dipscoop = () => {
  return (
    <>
      <PageHero
        title="Dipscoop"
        subtitle="The official newsletter of DPS Hyderabad"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Dipscoop' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {newsletters.map((newsletter, index) => (
                <motion.article
                  key={newsletter.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Newspaper className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-secondary font-medium">{newsletter.issue}</span>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {newsletter.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {newsletter.author}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-2xl mb-3">{newsletter.title}</h3>
                  <p className="text-muted-foreground mb-4">{newsletter.excerpt}</p>

                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Read Full Issue <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dipscoop;
