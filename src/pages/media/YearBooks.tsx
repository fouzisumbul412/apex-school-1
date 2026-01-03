import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Book, Download, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const yearBooks = [
  { year: '2024-25', pages: 120, highlights: 'Silver Jubilee Special Edition' },
  { year: '2023-24', pages: 98, highlights: 'Sports Championship Year' },
  { year: '2022-23', pages: 94, highlights: 'Back to Campus Edition' },
  { year: '2021-22', pages: 86, highlights: 'Digital Learning Era' },
  { year: '2020-21', pages: 78, highlights: 'Resilience Edition' },
  { year: '2019-20', pages: 102, highlights: 'Excellence in Academics' },
];

const YearBooks = () => {
  return (
    <>
      <PageHero
        title="Year Books"
        subtitle="Preserving memories, celebrating achievements"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Year Books' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {yearBooks.map((book, index) => (
                <motion.div
                  key={book.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-center gap-6 bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
                >
                  {/* Book Cover */}
                  <div className="w-32 h-40 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <div className="text-center text-primary-foreground">
                      <Book className="w-10 h-10 mx-auto mb-2" />
                      <span className="text-sm font-semibold">{book.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      DPS Hyderabad Year Book {book.year}
                    </h3>
                    <p className="text-secondary font-medium mb-2">{book.highlights}</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {book.pages} Pages
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Academic Year {book.year}
                      </span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <Button variant="outline" className="flex-shrink-0">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YearBooks;
