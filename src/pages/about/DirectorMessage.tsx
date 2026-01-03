import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const DirectorMessage = () => {
  return (
    <>
      <PageHero
        title="Director's Message"
        subtitle="A vision for educational excellence"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: "Director's Message" }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-3xl border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-xl">Ms. Rekha Aggarwala</h3>
                <p className="text-muted-foreground">Founder Principal & Academic Director</p>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Dear Students, Parents, and Educators,</p>
                <p>
                  As the founder principal and now academic director of DPS Hyderabad, I have had the privilege of witnessing the remarkable journey of our institution over the past 23 years.
                </p>
                <p>
                  When we started in 2002, our vision was to create a school that would not just impart knowledge but would shape the character and personality of every student who walked through our doors. Today, as I look back, I am humbled by how far we have come.
                </p>
                <p>
                  Education, to me, is not just about academic achievement. It is about developing the whole person - intellectually, emotionally, socially, and morally. At DPS Hyderabad, we have always strived to maintain this balance.
                </p>
                <p>
                  The success of our students - whether in board examinations, competitive tests, sports championships, or cultural events - is a testament to the dedication of our faculty and the support of our parent community.
                </p>
                <p>
                  As we look forward to our Silver Jubilee and beyond, I am confident that DPS Hyderabad will continue to set new benchmarks in educational excellence.
                </p>
                <p className="font-semibold text-foreground mt-8">
                  With best wishes,<br />
                  Ms. Rekha Aggarwala<br />
                  Academic Director
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectorMessage;
