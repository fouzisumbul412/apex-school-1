import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const VES = () => {
  return (
    <>
      <PageHero
        title="VES"
        subtitle="Vidya Educational Society"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'VES' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-3 text-foreground mb-8">Vidya Educational Society</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Vidya Educational Society (VES) is the managing body of DPS Hyderabad. Established with a vision to provide quality education to the children of Hyderabad, VES has been instrumental in building and nurturing DPS Hyderabad into the premier educational institution it is today.
                </p>
                <p>
                  The Society comprises distinguished professionals from various fields who bring their expertise and vision to guide the school's development. Their commitment to educational excellence has been the driving force behind the school's success.
                </p>
                <p>
                  VES continues to invest in state-of-the-art infrastructure, innovative teaching methodologies, and faculty development to ensure that DPS Hyderabad remains at the cutting edge of education.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VES;
