import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CampusLifeSection } from '@/components/home/CampusLifeSection';
import { PrincipalMessageSection } from '@/components/home/PrincipalMessageSection';
import { NewsSection } from '@/components/home/NewsSection';
import { AchievementsSection } from '@/components/home/AchievementsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CampusLifeSection />
      <PrincipalMessageSection />
      <NewsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Index;
