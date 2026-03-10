import img6 from '@/assets/images/photos/12.jpg';
import img9 from '@/assets/images/photos/13.jpg';
import img2 from '@/assets/images/photos/14.jpg';
import img3 from '@/assets/images/photos/15.jpg';
import img7 from '@/assets/images/photos/3.jpg';
import img8 from '@/assets/images/photos/4.jpg';
import img5 from '@/assets/images/photos/5.jpg';
import img4 from '@/assets/images/photos/6.jpg';
import Header from '@/components/topbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
const galleryItems = [{
  image: img9,
  title: 'Smart Desk v2.0',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['graphic']
}, {
  image: img2,
  title: 'Iphone App',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['graphic']
}, {
  image: img3,
  title: 'Iphone App2',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['photography']
}, {
  image: img4,
  title: 'Virtual Receptionist',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['graphic']
}, {
  image: img5,
  title: 'Task Manager',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['web']
}, {
  image: img5,
  title: 'Task Manager',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['']
}, {
  image: img6,
  title: 'Task Manager',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['']
}, {
  image: img9,
  title: 'Virtual Receptionist 2',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['illustrator']
}, {
  image: img3,
  title: 'Online Conference',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['web']
}, {
  image: img8,
  title: 'Smart Office v2.0',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['illustrator']
}, {
  image: img7,
  title: 'Portfolio Manager',
  description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
  category: ['photography']
}];
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Gallery galleryItems={galleryItems} />
      <Footer />
    </>;
};
export default Page;