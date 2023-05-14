import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';
import MyWork from '@/components/MyWork/MyWork';
import Resume from '@/components/Resume/Resume';
import WhatIDo from '@/components/WhatIDo/WhatIDo';

export const metadata = {
  title: 'Mustafa - Personal Portfolio',
  description: 'Mustafa Yavaş personal website',
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <WhatIDo />
      <Resume />
      <MyWork />
    </div>
  );
}
