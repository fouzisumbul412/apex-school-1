import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdmissionProcess = () => {
  const steps = [
    { step: 1, title: 'Online Application', desc: 'Fill and submit the online application form with required details' },
    { step: 2, title: 'Document Submission', desc: 'Upload all necessary documents as per guidelines' },
    { step: 3, title: 'Interaction/Assessment', desc: 'Attend the scheduled interaction or entrance assessment' },
    { step: 4, title: 'Result Declaration', desc: 'Check admission status on the portal' },
    { step: 5, title: 'Fee Payment', desc: 'Complete fee payment to confirm admission' },
  ];

  return (
    <>
      <PageHero
        title="Admission Process"
        subtitle="Join the DPS Hyderabad family"
        breadcrumbs={[{ label: 'Admissions', href: '#' }, { label: 'Admission Process' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="display-3 text-foreground mb-4">Admissions Open 2026-27</h2>
              <p className="text-muted-foreground">Follow these simple steps to apply for admission</p>
            </div>

            <div className="space-y-6 mb-12">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-card p-6 rounded-2xl border border-border">
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg">
                Apply Online <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/faq"><HelpCircle className="w-4 h-4 mr-2" /> FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionProcess;
