import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const ViceChairmanMessage = () => {
  return (
    <>
      <PageHero
        title="Pro-Vice Chairman's Message"
        subtitle="Leadership with a vision for the future"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: "Pro-Vice Chairman's Message" }]}
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
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Dear Members of the DPS Hyderabad Family,</p>
                <p>
                  It is my pleasure to address you as the Pro-Vice Chairman of this esteemed institution. DPS Hyderabad has been a labor of love, and watching it flourish over the years has been a deeply fulfilling experience.
                </p>
                <p>
                  Our school stands as a testament to what can be achieved when vision meets dedication. The collaborative efforts of our management, faculty, staff, parents, and students have created an environment where excellence is not just encouraged but expected.
                </p>
                <p>
                  We remain committed to investing in infrastructure, technology, and human resources to ensure that DPS Hyderabad continues to be at the forefront of educational innovation.
                </p>
                <p>
                  I encourage all our students to make the most of the opportunities available to them and to always strive for excellence in everything they do.
                </p>
                <p className="font-semibold text-foreground mt-8">
                  With warm regards,<br />
                  Pro-Vice Chairman<br />
                  DPS Hyderabad
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViceChairmanMessage;
