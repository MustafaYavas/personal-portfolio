import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
}
