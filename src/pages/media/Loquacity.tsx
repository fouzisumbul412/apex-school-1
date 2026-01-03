import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Mic, Trophy, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const debates = [
  {
    id: 1,
    title: 'Annual Inter-House Debate Championship',
    date: 'November 2025',
    participants: '24 students',
    topic: 'AI in Education: Boon or Bane?',
    winner: 'House Courage',
    bestSpeaker: 'Ananya Sharma, Class XI',
  },
  {
    id: 2,
    title: 'MUN Conference 2025',
    date: 'October 2025',
    participants: '60 delegates',
    topic: 'Climate Change & Global Policies',
    winner: 'Best Delegation: DPS Hyderabad',
    bestSpeaker: 'Arjun Reddy, Class XII',
  },
  {
    id: 3,
    title: 'State Level Elocution Competition',
    date: 'September 2025',
    participants: '15 finalists',
    topic: 'Youth Leadership in Modern India',
    winner: '1st Place - DPS Hyderabad',
    bestSpeaker: 'Priya Mehta, Class X',
  },
  {
    id: 4,
    title: 'Junior Debate League',
    date: 'August 2025',
    participants: '32 students',
    topic: 'Should Homework Be Abolished?',
    winner: 'House Integrity',
    bestSpeaker: 'Rohan Gupta, Class VII',
  },
];

const Loquacity = () => {
  return (
    <>
      <PageHero
        title="Loquacity"
        subtitle="The art of eloquent expression"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Loquacity' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Mic className="w-5 h-5" />
              <span className="font-medium">Public Speaking & Debates</span>
            </motion.div>
            <h2 className="display-3 mb-4">Where Words Come Alive</h2>
            <p className="text-muted-foreground text-lg">
              Loquacity is DPS Hyderabad's platform for nurturing the next generation of orators, 
              debaters, and public speakers. From classroom discussions to national competitions, 
              we help students find their voice.
            </p>
          </div>

          {/* Debates List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {debates.map((debate, index) => (
              <motion.div
                key={debate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">{debate.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {debate.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {debate.participants}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full">
                    <Trophy className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Featured Event</span>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-xl mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Topic:</p>
                  <p className="font-medium">{debate.topic}</p>
                </div>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="text-muted-foreground">Winner: </span>
                    <span className="font-medium text-primary">{debate.winner}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Best Speaker: </span>
                    <span className="font-medium">{debate.bestSpeaker}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="gold" size="lg">
              View All Events <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loquacity;
