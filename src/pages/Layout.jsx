import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import useCheckAuth from '../utils/hooks/useCheckAuth';

const Layout = () => {
  useCheckAuth();

  return (
    <div className='flex flex-col min-h-[100vh] w-full relative overflow-hidden'>
      <div className='gradient' />
      <Header />
      <main className='flex flex-grow justify-center'>{<Outlet />}</main>
      <Footer />
    </div>
  );
};

export default Layout;
