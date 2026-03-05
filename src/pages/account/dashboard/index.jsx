import Footer from './components/Footer';
import Header from './components/Header';
import RecentProject from './components/RecentProject';
import Statistics from './components/Statistics';
import Task from './components/Task';
const Page = () => {
  return <>
      <Header />
      <div className="bg-default-100 mt-[77px]  py-3 px-3">
        <Statistics />
        <RecentProject />
        <Task />
      </div>
      <Footer />
    </>;
};
export default Page;