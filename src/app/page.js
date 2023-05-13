import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';
import WhatIDo from '@/components/WhatIDo/WhatIDo';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <WhatIDo />
    </div>
  );
}
