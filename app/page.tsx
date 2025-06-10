import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Body from '../app/components/Body';

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-amber-500">

      <div className='flex-1 h-screen relative'>
      <Header />
      <Hero />
      <Body />
      </div>

    </div>
  );
}
