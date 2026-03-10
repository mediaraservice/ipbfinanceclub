import avatar1 from '@/assets/images/avatars/img-1.jpg';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <>
      <section className="pt-20">
        <div className="container">
          <div className="py-14">
            <div className="flex flex-wrap items-center gap-2 bg-default-100 py-2 px-3">
              <Link to="#" className="transition-all hover:text-primary">
                Home
              </Link>
              /
              <Link to="#" className="transition-all hover:text-primary">
                Blog
              </Link>
              /<p className="text-default-500">Announcing-the-free-upgrade</p>
            </div>
          </div>
          <div className="lg:w-4/5">
            <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
              <Link to="#">Announcement</Link>
            </span>
            <h1 className="lg:text-5xl/snug text-3xl/snug mt-3">Announcing the free upgrae for the subscribed plans</h1>
          </div>
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3 mt-7">
                <img src={avatar1} alt="avatar" className="h-11 w-11 rounded-full" />
                <div>
                  <h6 className="text-sm transition-all hover:text-primary">
                    <Link to="#">Emily Blunt</Link>
                  </h6>
                  <p className="text-sm text-default-500">11 Mar, 2020 · 3 min read</p>
                </div>
              </div>
              <div className="flex gap-2">
                <p className="text-sm text-default-500">SHARE:</p>
                <div className="flex gap-3">
                  <span>
                    <Link to="#">
                      <Icon icon="tabler:brand-facebook" className="size-5 text-blue-500" />
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <Icon icon="tabler:brand-x" className="size-5 text-teal-500" />
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <Icon icon="tabler:brand-instagram" className="size-5 text-red-500" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;