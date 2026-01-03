import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Palette, Music, Calculator, Globe, Microscope } from 'lucide-react';

const PrePrimary = () => {
  return (
    <>
      <PageHero
        title="Pre-Primary & Primary"
        subtitle="Building strong foundations for lifelong learning"
        breadcrumbs={[{ label: 'Academics', href: '#' }, { label: 'Curriculum' }, { label: 'Pre-Primary & Primary' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="pre-primary" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-12">
              <TabsTrigger value="pre-primary">Pre-Primary</TabsTrigger>
              <TabsTrigger value="primary">Primary</TabsTrigger>
            </TabsList>

            <TabsContent value="pre-primary">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="display-3 text-foreground mb-6 text-center">Pre-Primary Education</h2>
                <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                  Our pre-primary program (Nursery, LKG, UKG) focuses on activity-based learning that nurtures curiosity and creativity while building foundational skills.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Palette, title: 'Creative Arts', desc: 'Drawing, painting, and craft activities to develop fine motor skills' },
                    { icon: Music, title: 'Music & Movement', desc: 'Rhymes, songs, and dance to enhance rhythm and coordination' },
                    { icon: BookOpen, title: 'Language Development', desc: 'Phonics, storytelling, and vocabulary building' },
                    { icon: Calculator, title: 'Early Math', desc: 'Number recognition, counting, and basic concepts' },
                    { icon: Globe, title: 'Environmental Awareness', desc: 'Learning about nature, seasons, and the world around us' },
                    { icon: Microscope, title: 'Discovery Learning', desc: 'Hands-on exploration and sensory activities' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="bg-card p-6 rounded-2xl border border-border"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="primary">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="display-3 text-foreground mb-6 text-center">Primary Education</h2>
                <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                  Our primary curriculum (Classes I-V) follows the CBSE framework while incorporating innovative teaching methodologies.
                </p>

                <div className="bg-card p-8 rounded-2xl border border-border">
                  <h3 className="font-heading font-semibold text-xl mb-6">Subjects Offered</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'Computer Science', 'Art & Craft', 'Music', 'Physical Education', 'Value Education'].map((subject) => (
                      <div key={subject} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default PrePrimary;
