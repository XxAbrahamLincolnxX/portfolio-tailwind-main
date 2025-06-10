import SideNavbar from '../app/components/SideNavbar';
import Header from '../app/components/Header';
import LeftColumn from '../app/components/LeftColumn';

export default function Home() {
  return (
    <div className="flex">
      <SideNavbar />
      <div className='flex-1 md:flex h-screen relative'>
      <Header />
      <LeftColumn />
      </div>
    </div>
  );
}
