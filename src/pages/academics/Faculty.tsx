import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from 'lucide-react';

const Faculty = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const departments = ['All', 'Science', 'Mathematics', 'Languages', 'Social Studies', 'Commerce', 'Arts', 'Physical Education'];

  const faculty = [
    { name: 'Dr. Priya Sharma', dept: 'Science', subject: 'Physics', qualification: 'Ph.D., M.Sc.' },
    { name: 'Mr. Rajesh Kumar', dept: 'Mathematics', subject: 'Mathematics', qualification: 'M.Sc., B.Ed.' },
    { name: 'Mrs. Anjali Verma', dept: 'Languages', subject: 'English', qualification: 'M.A., B.Ed.' },
    { name: 'Mr. Suresh Reddy', dept: 'Social Studies', subject: 'History', qualification: 'M.A., B.Ed.' },
    { name: 'Dr. Kavitha Rao', dept: 'Science', subject: 'Chemistry', qualification: 'Ph.D., M.Sc.' },
    { name: 'Mrs. Lakshmi Devi', dept: 'Languages', subject: 'Hindi', qualification: 'M.A., B.Ed.' },
    { name: 'Mr. Amit Singh', dept: 'Physical Education', subject: 'Sports', qualification: 'M.P.Ed.' },
    { name: 'Ms. Sneha Patel', dept: 'Commerce', subject: 'Accountancy', qualification: 'M.Com., B.Ed.' },
  ];

  const filteredFaculty = faculty.filter((f) => {
    const matchesFilter = filter === 'all' || f.dept.toLowerCase() === filter.toLowerCase();
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.subject.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <PageHero
        title="Our Faculty"
        subtitle="Meet our dedicated team of educators"
        breadcrumbs={[{ label: 'Academics', href: '#' }, { label: 'Faculty' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === dept.toLowerCase()
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search faculty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-elegant transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-heading font-semibold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.subject}</p>
                <p className="text-muted-foreground text-xs mt-1">{member.qualification}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                  {member.dept}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
