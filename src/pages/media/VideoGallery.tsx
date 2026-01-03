import { useState } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Play, Calendar, Eye } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Annual Day 2025 Highlights',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    category: 'Events',
    date: 'Dec 2025',
    views: '2.5K',
  },
  {
    id: 2,
    title: 'Sports Day 2025 - Complete Coverage',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    category: 'Sports',
    date: 'Nov 2025',
    views: '1.8K',
  },
  {
    id: 3,
    title: 'Science Exhibition 2025',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    category: 'Academic',
    date: 'Oct 2025',
    views: '1.2K',
  },
  {
    id: 4,
    title: 'Independence Day Celebrations',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    category: 'Events',
    date: 'Aug 2025',
    views: '3.1K',
  },
  {
    id: 5,
    title: 'Campus Tour - DPS Hyderabad',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    category: 'Campus',
    date: 'Jul 2025',
    views: '5.2K',
  },
  {
    id: 6,
    title: 'Graduation Ceremony 2024',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    category: 'Events',
    date: 'Mar 2024',
    views: '2.8K',
  },
];

const VideoGallery = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <>
      <PageHero
        title="Video Gallery"
        subtitle="Watch our school journey unfold"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Gallery' }, { label: 'Video Gallery' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer mb-4"
                  onClick={() => setPlayingVideo(video.videoId)}
                >
                  {playingVideo === video.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-12 h-12 text-muted-foreground mb-2 mx-auto" />
                          <p className="text-sm text-muted-foreground">Video Thumbnail</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-gold">
                          <Play className="w-7 h-7 text-secondary-foreground ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    {video.category}
                  </span>
                </div>
                
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {video.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {video.views} views
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoGallery;
