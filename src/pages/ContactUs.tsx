import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="bg-card p-8 rounded-3xl border border-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-4 text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" required />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" required />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Select Subject</option>
                  <option>Admissions</option>
                  <option>Academics</option>
                  <option>Transport</option>
                  <option>General Inquiry</option>
                </select>
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" required />
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="display-4 text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Address', info: 'Mahendra Hills, Secunderabad, Telangana 500026' },
                  { icon: Phone, title: 'Phone', info: '+91 40 2780 1234' },
                  { icon: Mail, title: 'Email', info: 'info@dpshyderabad.in' },
                  { icon: Clock, title: 'Office Hours', info: 'Mon - Sat: 8:00 AM - 4:00 PM' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2896!2d78.4983!3d17.4449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzQxLjYiTiA3OMKwMjknNTMuOSJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
