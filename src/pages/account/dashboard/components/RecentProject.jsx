import avatar5 from '@/assets/images/avatars/img-5.jpg';
import avatar8 from '@/assets/images/avatars/img-8.jpg';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const projects = [{
  date: 'Aug 09, 2020',
  title: 'Shreyu - Design Updates',
  variant: 'bg-primary/10 text-primary',
  catagory: 'Designing',
  description: 'Update shreyu with modern and latest trends...',
  progress: '75%',
  progressVariant: 'bg-green-500',
  image: [avatar8, avatar5]
}, {
  date: 'Aug 10, 2020',
  title: 'Prompt v2.0',
  variant: 'bg-orange-500/10 text-orange-500',
  catagory: 'Planning',
  description: 'Plan new features and functionality for prompt...',
  progress: '50%',
  progressVariant: 'bg-red-500',
  image: [avatar8, avatar5]
}, {
  date: 'Aug 11, 2020',
  title: 'Hyper React v4.0',
  variant: 'bg-sky-500/10 text-sky-500',
  catagory: 'Development',
  description: 'Update shreyu with modern and latest trends...',
  progress: '60%',
  progressVariant: 'bg-amber-500',
  image: [avatar8, avatar5]
}];
const RecentProject = () => {
  return <>
      <section className="relative overflow-hidden">
        <div className="container">
          <div className="flex items-center justify-between my-6">
            <div>
              <h4 className="text-base text-default-800">Recent Projects</h4>
            </div>
            <div className="text-end">
              <Link to="" className="font-semibold flex items-center gap-2 text-primary text-sm">
                View All
                <Icon icon="tabler:arrow-right" className="size-5" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-3">
            {projects.map((item, idx) => <div className="bg-white rounded" key={idx}>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="grow">
                      <p className="text-default-400 text-sm font-medium">{item.date}</p>
                    </div>
                    <div className="shrink text-end">
                      <div className="hs-dropdown relative [--placement:bottom-right] inline-flex">
                        <button type="button" className="hs-dropdown-toggle text-default-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                          <Icon icon="tabler:dots" className="size-6" />
                        </button>
                        <div className="hs-dropdown-menu transition-[opacity,margin] z-10 duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 mt-2 bg-white shadow-md border border-default-200 rounded" role="menu" aria-orientation="vertical">
                          <div className="p-1 space-y-1">
                            <a className="flex items-center py-1.5 px-3 text-base text-default-500 hover:bg-default-100 hover:text-default-700 rounded" href="">
                              <Icon icon="tabler:edit" className=" size-4 me-2.5" />
                              <span>Share</span>
                            </a>
                            <a className="flex items-center py-1.5 px-3 text-base text-default-500 hover:bg-default-100 hover:text-default-700 rounded" href="">
                              <Icon icon="tabler:refresh" className=" size-4 me-2.5" />
                              <span>Refresh</span>
                            </a>
                            <hr className="my-2 -mx-1 border-default-200" />
                            <Link className="flex items-center py-1.5 px-3 text-base text-red-500 hover:bg-default-100 rounded" to="">
                              <Icon icon="tabler:trash" className=" size-4 me-2.5" />
                              <span>Deactivate</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="mt-0 mb-1">
                      <Link className="text-lg text-default-600 hover:text-primary" to="#">
                        {item.title}
                      </Link>
                    </h4>
                    <span className={`inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold ${item.variant}`}>
                      {item.catagory}
                    </span>
                    <p className="text-default-400 text-sm my-4">{item.description}</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex mb-3">
                      <div className="grow">
                        <h6 className="mt-0">Progress</h6>
                      </div>
                      <div className="shrink text-end">
                        <small className="fw-semibold">{item.progress}</small>
                      </div>
                    </div>
                    <div className="flex w-full h-1.5 bg-default-200 rounded-full overflow-hidden dark:bg-default-700 ">
                      <div className={`flex flex-col justify-center overflow-hidden ${item.progressVariant}`} role="progressbar" style={{
                    width: `${item.progress}`
                  }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="flex -space-x-2 mt-3">
                    {item.image.map((item, idx) => <img key={idx} className="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-default-800" src={item} alt="Image Description" />)}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};
export default RecentProject;