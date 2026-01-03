import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Ramesh Kumar',
    role: 'Parent of Class XII Student',
    image: '/placeholder.svg',
    rating: 5,
    quote: 'DPS Hyderabad has been instrumental in shaping my child\'s future. The teachers are dedicated, and the infrastructure is world-class. Our son got admission to IIT Delhi, and we owe it to the excellent guidance he received here.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Alumna, Batch of 2022',
    image: '/placeholder.svg',
    rating: 5,
    quote: 'The years I spent at DPS Hyderabad were the best years of my life. The school not only focused on academics but also helped me discover my passion for music. Today, I\'m pursuing my dreams at Berklee College of Music.',
  },
  {
    id: 3,
    name: 'Mrs. Lakshmi Reddy',
    role: 'Parent of Class V Student',
    image: '/placeholder.svg',
    rating: 5,
    quote: 'The holistic approach to education at DPS is commendable. My daughter has grown not just academically but also in terms of confidence and social skills. The teachers are approachable and genuinely care about each child.',
  },
  {
    id: 4,
    name: 'Arjun Mehta',
    role: 'Alumnus, Batch of 2020',
    image: '/placeholder.svg',
    rating: 5,
    quote: 'DPS Hyderabad prepared me for the real world. The emphasis on sports, arts, and academics created a balanced environment. I\'m now at Stanford University, and I still apply the values I learned at DPS.',
  },
  {
    id: 5,
    name: 'Mr. Sanjay Patel',
    role: 'Parent of Class VIII Student',
    image: '/placeholder.svg',
    rating: 5,
    quote: 'We moved from Mumbai, and DPS Hyderabad made the transition seamless for our child. The welcoming environment and excellent faculty have made it our child\'s second home.',
  },
  {
    id: 6,
    name: 'Sneha Rao',
    role: 'Alumna, Batch of 2021',
    image: '/placeholder.svg',
    rating: 5,
    quote: 'The NCC training I received at DPS shaped my character and discipline. Today, I\'m a proud officer in the Indian Army. DPS Hyderabad will always be special to me.',
  },
];

const Testimonials = () => {
  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Voices of our DPS family"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Testimonials' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-gold">
                  <Quote className="w-5 h-5 text-secondary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
