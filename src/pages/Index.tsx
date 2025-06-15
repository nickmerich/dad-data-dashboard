
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Community } from '@/components/Community';
import { GetStarted } from '@/components/GetStarted';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Hero />
      <Features />
      <Community />
      <GetStarted />
    </div>
  );
};

export default Index;
