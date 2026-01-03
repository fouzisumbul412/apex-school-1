import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const ChairmanMessage = () => {
  return (
    <>
      <PageHero
        title="Chairman's Message"
        subtitle="Words of wisdom from our Chairman"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: "Chairman's Message" }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-card p-8 md:p-12 rounded-3xl border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl md:text-3xl font-heading italic text-primary mb-8 leading-relaxed text-center">
                "The greatest gift we can give our children is the gift of education."
              </blockquote>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Dear Parents and Well-wishers,</p>
                <p>
                  It is with great pride and joy that I address you as the Chairman of Delhi Public School Hyderabad. Over the past two decades, our institution has grown from strength to strength, establishing itself as a beacon of educational excellence in the region.
                </p>
                <p>
                  The DPS Society has always believed in providing quality education that prepares students for the challenges of tomorrow. At DPS Hyderabad, we have created an ecosystem that fosters intellectual curiosity, creative thinking, and moral values.
                </p>
                <p>
                  Our commitment to excellence is reflected in the achievements of our students who have excelled not only in academics but also in sports, arts, and various co-curricular activities. Many of our alumni have gone on to prestigious institutions around the world and are making significant contributions to society.
                </p>
                <p>
                  I extend my heartfelt gratitude to our dedicated faculty, supportive parents, and enthusiastic students who have been instrumental in making DPS Hyderabad what it is today.
                </p>
                <p className="font-semibold text-foreground text-right mt-8">
                  With warm regards,<br />
                  Chairman<br />
                  DPS Society
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChairmanMessage;
