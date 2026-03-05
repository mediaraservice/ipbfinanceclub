import Header from '@/components/dashboard/Header';
import Footer from '@/components/dashboard/Footer';
import Members from './components/Members';
const Page = () => {
  return (
    <>
      <Header />
      <div className="bg-default-100 pt-[77px]  py-3 px-3">
        <Members />
      </div>
      <Footer />
    </>
  )
};
export default Page;
