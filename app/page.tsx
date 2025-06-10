import SideNavbar from '../app/components/SideNavbar';
import Header from '../app/components/Header';
import LeftColumn from '../app/components/LeftColumn';
import Hero from '../app/components/Hero';
import Body from '../app/components/Body';

export default function Home() {
  return (
    <div className="flex w-screen bg-amber-500">

      <div className='flex-1 h-screen relative'>
      <Header />
      <Hero />
      <Body />
      </div>

    </div>
  );
}
