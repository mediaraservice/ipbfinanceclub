import Header from '@/components/topbar';
// import Comment from './components/Comment';
import Footer from '@/components/footer';
import Hero from './components/Hero';
// import Navigation from './components/Navigation';
import Post from './components/Post';
const Page = () => {
  return <>
      <Header theme="light" />
      {/* <Hero /> */}
      <Post />
      {/* <Navigation />
      <Comment /> */}
      <Footer />
    </>;
};
export default Page;