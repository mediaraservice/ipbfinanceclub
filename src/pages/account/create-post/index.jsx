import Header from '@/components/dashboard/Header';
import Footer from '@/components/dashboard/Footer';
import CreatePost from './components/CreatePost';
const Page = () => {
  return (
    <>
      <Header />
      <div className="bg-default-100 pt-[77px]  py-3 px-3">
        <CreatePost />
      </div>
      <Footer />
    </>
  )
};
export default Page;
