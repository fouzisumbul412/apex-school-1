import { useAOS } from '@/hooks/useAOS';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransition } from './PageTransition';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  useAOS();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};
