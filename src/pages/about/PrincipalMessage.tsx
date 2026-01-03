import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import principalImg from '@/assets/principal.jpg';

const PrincipalMessage = () => {
  return (
    <>
      <PageHero
        title="Principal's Message"
        subtitle="A message from our visionary leader"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: "Principal's Message" }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row gap-8 items-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <img
                  src={principalImg}
                  alt="Principal Mrs. Sandhya Prathap"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-elegant"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-heading font-bold text-lg">Mrs. Sandhya Prathap</h3>
                  <p className="text-muted-foreground">Principal</p>
                </div>
              </div>
              <div className="flex-1">
                <blockquote className="text-2xl md:text-3xl font-heading italic text-primary mb-6 leading-relaxed">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </blockquote>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dear Parents and Students,
                  </p>
                  <p>
                    It gives me immense pleasure to welcome you to Delhi Public School Hyderabad. As we celebrate 23 years of educational excellence, I am proud to lead an institution that has consistently upheld the highest standards of academic achievement and holistic development.
                  </p>
                  <p>
                    At DPS Hyderabad, we believe that every child is unique and has the potential to excel. Our dedicated team of educators works tirelessly to create a nurturing environment where students can explore their interests, develop their talents, and build the skills they need to succeed in an ever-changing world.
                  </p>
                  <p>
                    We are committed to providing a well-rounded education that goes beyond textbooks. Our focus on sports, arts, technology, and community service ensures that our students grow into responsible, compassionate, and confident individuals.
                  </p>
                  <p>
                    I invite you to explore our school and discover the many opportunities we offer. Together, let us embark on a journey of learning, growth, and discovery.
                  </p>
                  <p className="font-semibold text-foreground">
                    Warm regards,<br />
                    Mrs. Sandhya Prathap<br />
                    Principal, DPS Hyderabad
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrincipalMessage;
