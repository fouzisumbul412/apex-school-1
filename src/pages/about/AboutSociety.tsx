import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const AboutSociety = () => {
  return (
    <>
      <PageHero
        title="DPS Society"
        subtitle="The foundation of educational excellence across India"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'DPS Society' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-3 text-foreground mb-8">About DPS Society</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The Delhi Public School Society was founded in 1949 with the aim of providing quality education to children. Today, the DPS Society oversees a network of over 200 schools across India and abroad, making it one of the largest chains of schools in the world.
                </p>
                <p>
                  The Society's philosophy is based on the belief that education should be holistic, developing not just academic skills but also physical fitness, creative thinking, and moral values. This philosophy guides every DPS school in its endeavor to provide the best possible education to its students.
                </p>
                <p>
                  DPS Hyderabad, established in 2002, is proud to be part of this prestigious network. We adhere to the high standards set by the DPS Society while also incorporating innovations that address the unique needs of our students.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  { value: '200+', label: 'Schools Worldwide' },
                  { value: '75+', label: 'Years of Excellence' },
                  { value: '1M+', label: 'Students Educated' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-primary/5 p-6 rounded-2xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSociety;
