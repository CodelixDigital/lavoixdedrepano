import Hero from '@/components/sections/Hero';
import MissionSection from '@/components/sections/MissionSection';
import StatsSection from '@/components/sections/StatsSection';
import NewsSection from '@/components/sections/NewsSection';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <div>
      <Hero />
      <MissionSection />
      <StatsSection />
      <NewsSection />
      <CallToAction />
    </div>
  );
}