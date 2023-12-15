import { Outlet } from 'react-router-dom';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

export default function RootLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
