import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Smile, Star, Palette, Music, BookOpen, Heart } from 'lucide-react';

import gallery1 from '@/assets/gallery/gallery-6.jpg';

const activities = [
  {
    id: 1,
    title: 'Story Time Adventures',
    description: 'Interactive storytelling sessions that spark imagination and creativity in our youngest learners.',
    icon: BookOpen,
    image: gallery1,
  },
  {
    id: 2,
    title: 'Art & Craft Corner',
    description: 'Hands-on creative activities that develop fine motor skills and artistic expression.',
    icon: Palette,
    image: gallery1,
  },
  {
    id: 3,
    title: 'Music & Movement',
    description: 'Fun-filled sessions with rhymes, songs, and dance that build rhythm and coordination.',
    icon: Music,
    image: gallery1,
  },
  {
    id: 4,
    title: 'Show & Tell',
    description: 'Encouraging public speaking and confidence through sharing favorite toys and experiences.',
    icon: Star,
    image: gallery1,
  },
];

const LittleLearnersLounge = () => {
  return (
    <>
      <PageHero
        title="Little Learners Lounge"
        subtitle="A world of wonder for our youngest stars"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Little Learners Lounge' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6"
            >
              <Smile className="w-5 h-5" />
              <span className="font-medium">Pre-Primary Special</span>
            </motion.div>
            <h2 className="display-3 mb-4">Where Learning Meets Fun</h2>
            <p className="text-muted-foreground text-lg">
              Welcome to the Little Learners Lounge – a dedicated space celebrating the achievements, 
              activities, and magical moments of our pre-primary students at DPS Hyderabad.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <activity.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-2xl text-center"
          >
            <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-2xl mb-3">A Message for Parents</h3>
            <p className="text-muted-foreground">
              At DPS Hyderabad, we believe every child is unique and special. Our pre-primary program 
              is designed to nurture curiosity, build confidence, and create a love for learning that 
              lasts a lifetime. Stay connected with your child's journey through this special corner 
              dedicated to our little learners.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LittleLearnersLounge;
