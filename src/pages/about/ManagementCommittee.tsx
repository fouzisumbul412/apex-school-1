import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const ManagementCommittee = () => {
  const members = [
    { name: 'Mr. XYZ', role: 'Chairman', qualification: 'Industry Leader' },
    { name: 'Mr. ABC', role: 'Pro-Vice Chairman', qualification: 'Business Executive' },
    { name: 'Ms. Rekha Aggarwala', role: 'Academic Director', qualification: 'M.Ed., B.Ed.' },
    { name: 'Mrs. Sandhya Prathap', role: 'Principal', qualification: 'M.A., B.Ed.' },
    { name: 'Mr. PQR', role: 'Secretary', qualification: 'MBA' },
    { name: 'Ms. LMN', role: 'Treasurer', qualification: 'CA' },
  ];

  return (
    <>
      <PageHero
        title="Management Committee"
        subtitle="The leaders guiding our institution"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'Management Committee' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our management committee comprises distinguished professionals committed to educational excellence and the holistic development of our students.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-elegant transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-1">{member.qualification}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagementCommittee;
