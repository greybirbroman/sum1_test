import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-[100vh] w-full'>
      <Header />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default Layout;
