import SideNavbar from '../app/components/SideNavbar';
import Header from '../app/components/Header';
import LeftColumn from '../app/components/LeftColumn';

export default function Home() {
  return (
    <div className="flex w-screen bg-amber-500">
      <SideNavbar />
      <div className='flex-1 h-screen relative'>
      <Header />
      <LeftColumn />
      </div>
    </div>
  );
}
