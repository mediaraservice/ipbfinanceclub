import avatar8 from '@/assets/images/avatars/img-8.jpg';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const Statistics = () => {
  return <>
      <section className="relative overflow-hidden">
        <div className="container">
          <div className="flex">
            <div className="w-full">
              <h3 className="text-xl text-default-800 mt-2">Hi Greeva</h3>
              <p className="mt-1 font-medium mb-4">Welcome to Prompt!</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-2">
            <div className="lg:col-span-5 col-span-12">
              <div className="bg-white rounded">
                <div className="p-6">
                  <div className="flex">
                    <div className="grow">
                      <div className="flex">
                        <img src={avatar8} className="img-fluid w-12 h-12 rounded me-3" alt="..." />
                        <div className="grow">
                          <h4 className="tetx-lg text-default-800 mb-1 mt-0 font-semibold">Ms. Greeva Navadiya</h4>
                          <p className="text-default-400 pb-0 text-sm mb-4 font-medium">Web &amp; Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="shrink text-end">
                      <div className="hs-dropdown relative [--placement:bottom-right] inline-flex">
                        <button type="button" className="hs-dropdown-toggle text-default-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                          <Icon icon="tabler:dots" className="size-6" />
                        </button>
                        <div className="hs-dropdown-menu transition-[opacity,margin] z-10 duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 mt-2 bg-white shadow-md border border-default-200 rounded" role="menu" aria-orientation="vertical">
                          <div className="p-1 space-y-1">
                            <a className="flex items-center py-1.5 px-3 text-base text-default-500 hover:bg-default-100 hover:text-default-700 rounded" href="">
                              <Icon icon="tabler:edit" className="size-4 me-2.5" />
                              <span>Share</span>
                            </a>
                            <a className="flex items-center py-1.5 px-3 text-base text-default-500 hover:bg-default-100 hover:text-default-700 rounded" href="">
                              <Icon icon="tabler:refresh" className="size-4 me-2.5" />
                              <span>Refresh</span>
                            </a>
                            <hr className="my-2 -mx-1 border-default-200" />
                            <Link className="flex items-center py-1.5 px-3 text-base text-red-500 hover:bg-default-100 rounded" to="">
                              <Icon icon="tabler:trash" className="size-4 me-2.5" />
                              <span>Deactivate</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mb-2 flex-wrap py-4 border-b border-default-200">
                    <Link to="#" className="flex gap-0.5 text-default-400 text-sm">
                      <Icon icon="tabler:mail" className="size-5 me-2" />
                      greeva@coderthemes.com
                    </Link>
                    <Link to="#" className="flex gap-0.5 text-default-400 text-sm">
                      <Icon icon="tabler:phone" className="size-5 me-2" />
                      +00 123-456-789
                    </Link>
                  </div>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="md:w-1/2 w-full">
                      <div className="flex justify-between mb-3">
                        <h6 className="fw-medium my-0">Project Completion</h6>
                        <p className="float-end mb-0">85%</p>
                      </div>
                      <div className="flex w-full h-1.5 bg-default-200 rounded-full overflow-hidden dark:bg-default-700 ">
                        <div className="flex flex-col justify-center overflow-hidden bg-primary" role="progressbar" style={{
                        width: '85%'
                      }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                      <div className="flex justify-between mb-3">
                        <h6 className="fw-medium my-0">Overall Rating</h6>
                        <p className="float-end mb-0">7.5</p>
                      </div>
                      <div className="flex w-full h-1.5 bg-default-200 rounded-full overflow-hidden dark:bg-default-700 ">
                        <div className="flex flex-col justify-center overflow-hidden bg-orange-500" role="progressbar" style={{
                        width: '85%'
                      }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 col-span-12 space-y-6">
              <div className="bg-white">
                <div className="flex items-center p-6">
                  <div>
                    <div className="inline-flex items-center justify-center h-12 w-12 bg-green-500/10 rounded me-3">
                      <Icon icon="tabler:square-rounded-check" className="size-6 text-green-500" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="text-xl text-default-800">21</h3>
                    <p className="text-muted mb-0">Tasks Completed</p>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="flex items-center p-6">
                  <div>
                    <div className="inline-flex items-center justify-center h-12 w-12 bg-sky-500/10 rounded me-3">
                      <Icon icon="tabler:edit" className="size-6 text-sky-500" />
                    </div>
                  </div>
                  <div className="grow">
                    <h3 className="text-xl text-default-800">21</h3>
                    <p className="text-muted mb-0">Tasks Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className="bg-white">
                <div className="p-6">
                  <div className="flex justify-between">
                    <div className="grow">
                      <h4 className="text-base font-semibold text-default-800">Revenue</h4>
                    </div>
                    <div className="shrink text-end">
                      <div className="hs-dropdown relative [--placement:bottom-right] inline-flex">
                        <button type="button" className="hs-dropdown-toggle text-default-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                          <Icon icon="tabler:dots" className="size-6" />
                        </button>
                        <div className="hs-dropdown-menu transition-[opacity,margin] z-10 duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 mt-2 bg-white shadow-md border border-default-200 rounded" role="menu" aria-orientation="vertical">
                          <div className="p-1 space-y-1">
                            <a className="flex items-center py-1.5 px-3 text-base text-default-500 hover:bg-default-100 hover:text-default-700 rounded" href="">
                              <Icon icon="tabler:edit" className="size-4 me-2.5" />
                              <span>Share</span>
                            </a>
                            <a className="flex items-center py-1.5 px-3 text-base text-default-500 hover:bg-default-100 hover:text-default-700 rounded" href="">
                              <Icon icon="tabler:refresh" className="size-4 me-2.5" />
                              <span>Refresh</span>
                            </a>
                            <hr className="my-2 -mx-1 border-default-200" />
                            <a className="flex items-center py-1.5 px-3 text-base text-red-500 hover:bg-default-100 rounded" href="">
                              <Icon icon="tabler:trash" className="size-4 me-2.5" />
                              <span>Deactivate</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-3xl text-default-800 my-2.5">$2,100.00</h1>
                  <p className="text-default-400 text-sm">Last Week</p>
                  <hr className="my-3.5 border-default-200" />
                  <div className="flex items-center">
                    <div className="lg:w-1/2">
                      <div className="flex items-center">
                        <div className="me-4 shrink">
                          <Icon icon="tabler:trending-up" className="size-6 text-green-500" />
                        </div>
                        <div className="grow">
                          <h5 className="mt-0 mb-0">15%</h5>
                          <p className="text-muted mb-0 fs-13">Prev Week</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <div className="flex items-center">
                        <div className="me-3 flex-shrink-0">
                          <Icon icon="tabler:trending-down" className="size-6 text-red-500" />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mt-0 mb-0">10%</h5>
                          <p className="text-muted mb-0 fs-13">Prev Month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Statistics;