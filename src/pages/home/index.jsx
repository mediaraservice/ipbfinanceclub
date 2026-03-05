import Header from '@/components/topbar';
import AdminPage from './components/AdminPage';
import AuthPage from './components/AuthPage';
import Demo from './components/Demo';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InnerPage from './components/InnerPage';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Demo />
      <AdminPage />
      <InnerPage />
      <AuthPage />
      <Feature />
      <Footer />
    </>;
};
export default Page;