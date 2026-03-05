import img8 from '@/assets/images/avatars/img-8.jpg';
import { default as logodark, default as logoDark } from '@/assets/images/logo-dark.png';
import logolight from '@/assets/images/logo-light.png';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';
const Header = () => {
  return <>
      <header className="@@link-color fixed top-0 inset-x-0 flex items-center z-40 w-full bg-white transition-all py-3.5">
        <div className="container">
          <nav className="flex items-center">
            <Link to="/">
              <img src={logodark} className="h-8 logo-dark" alt="Logo Dark" width={126} height={32} />
              <img src={logolight} className="h-8 logo-light" alt="Logo Light" />
            </Link>

            <div className="hidden lg:block mx-auto grow">
              <ul id="navbar-navlist" className="grow flex flex-col lg:flex-row lg:items-center lg:justify-center mt-4 lg:mt-0">
                <li className="nav-item pe-4">
                  <Link className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-primary" to="/account/dashboard">
                    <Icon icon="solar:widget-5-bold-duotone" className="size-5 me-2" />
                    <span className="grow">Home</span>
                  </Link>
                </li>
                <li className="nav-item pe-4">
                  <a className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-default-700 hover:text-primary transition-all" href="/account/dashboard">
                    <Icon icon="solar:folder-2-bold-duotone" className="size-5 me-2" />
                    <span className="grow">Projects</span>
                  </a>
                </li>
                <li className="nav-item pe-4">
                  <a className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-default-700 hover:text-primary transition-all" href="/account/dashboard">
                    <Icon icon="solar:hamburger-menu-bold-duotone" className="size-5 me-2" />
                    <span className="grow">Tasks</span>
                  </a>
                </li>
                <li className="nav-item pe-4">
                  <a className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-default-700 hover:text-primary transition-all" href="/account/dashboard">
                    <Icon icon="solar:chart-square-bold-duotone" className="size-5 me-2" />
                    <span className="grow">Reports</span>
                  </a>
                </li>
                <li className="nav-item pe-4">
                  <a className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-default-700 hover:text-primary transition-all" href="/account/setting">
                    <Icon icon="solar:tuning-square-2-bold-duotone" className="size-5 me-2" />
                    <span className="grow">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="block grow ms-auto lg:shrink me-4 lg:me-0">
              <ul className="navbar-nav flex gap-x-3 items-center justify-end lg:justify-center">
                <li className="nav-item">
                  <div className="hs-dropdown [--trigger:hover] [--placement:bottom] relative">
                    <Link to="" className="nav-link hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0">
                      <span className="h-full hover:text-primary">
                        <Icon icon="solar:notification-unread-lines-bold-duotone" className="size-6" />
                      </span>
                    </Link>
                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hs-dropdown-open:translate-y-0 translate-y-3 origin-center opacity-0 hidden w-72 min-w-72 border border-default-200 p-2 bg-white shadow-lg rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-default">
                      <div className="space-y-0.5">
                        <div className="nav-item">
                          <Link className="nav-link p-3 hover:bg-default-100" to="#">
                            <div className="flex items-center -ms-1.5">
                              <span className="bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                <Icon icon="tabler:user-plus" className="text-blue-600 size-6" />
                              </span>
                              <div className="flex-grow-1">
                                <p className="text-xs/none">New User Registered</p>
                                <span className="text-default-400 text-xs">
                                  <small>2 min ago</small>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="nav-item">
                          <Link className="nav-link p-3 hover:bg-default-100" to="#">
                            <div className="flex items-center -ms-1.5">
                              <span className="bg-orange-400/10 text-orange-400 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                <Icon icon="tabler:photo-plus" className="size-6" />
                              </span>
                              <div className="flex-grow-1">
                                <p className="text-xs/none">A new comment on your post</p>
                                <span className="text-default-400 text-xs">
                                  <small>3 minago</small>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="nav-item">
                          <Link className="nav-link p-3 hover:bg-default-100" to="#">
                            <div className="flex items-center -ms-1.5">
                              <span className="bg-green-400/10 text-green-400 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                <Icon icon="tabler:mail-plus" className="size-6" />
                              </span>
                              <div className="flex-grow-1">
                                <p className="text-xs/none">A new comment on your post</p>
                                <span className="text-default-400 text-xs">
                                  <small>3 min ago</small>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="nav-item">
                          <Link className="nav-link p-3 hover:bg-default-100" to="#">
                            <div className="flex items-center -ms-1.5">
                              <span className="bg-red-400/10 text-red-400 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                <Icon icon="tabler:thumb-up" className="size-6" />
                              </span>
                              <div className="flex-grow-1">
                                <p className="text-xs/none">A new comment on your post</p>
                                <span className="text-default-400 text-xs">
                                  <small>3 min ago</small>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <Link to="#" className="w-full bg-default-100 inline-flex items-center justify-center text-sm text-default-800 py-1.5 px-3">
                          View All
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="hs-dropdown [--trigger:hover] [--placement:bottom] relative">
                    <Link to="" className="nav-link hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0">
                      <div className="flex items-center">
                        <div className="shrink">
                          <div className="h-8 w-8 me-2">
                            <img src={img8} className="avatar h-full w-full rounded-full me-2" alt="" />
                          </div>
                        </div>
                        <div className="hidden lg:block grow ms-1 leading-normal">
                          <span className="block text-sm font-medium">Greeva N</span>
                          <span className="block text-default-400 text-xs">Admin</span>
                        </div>
                      </div>
                    </Link>
                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hs-dropdown-open:translate-y-0 translate-y-3 origin-center opacity-0 hidden w-48 min-w-48 border border-default-200 p-2 bg-white shadow-lg rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-default">
                      <div className="flex flex-col gap-0.5">
                        <div className="nav-item rounded hover:bg-default-100 transition-all">
                          <Link className="nav-link !p-2" to="#">
                            <Icon icon="tabler:user" className="size-4 me-2" />
                            Profile
                          </Link>
                        </div>

                        <div className="nav-item rounded hover:bg-default-100 transition-all">
                          <Link className="nav-link !p-2" to="#">
                            <Icon icon="tabler:settings" className="size-4 me-2" />
                            Settings
                          </Link>
                        </div>

                        <div className="nav-item rounded hover:bg-default-100 transition-all">
                          <Link className="nav-link !p-2" to="#">
                            <Icon icon="tabler:aperture" className="size-4 me-2" />
                            Support
                          </Link>
                        </div>
                        <hr className="-mx-2 my-1 border-default-200" />

                        <div className="nav-item rounded hover:bg-default-100 transition-all">
                          <Link className="nav-link !p-2" to="#">
                            <Icon icon="tabler:lock" className="size-4 me-2" />
                            Sign Out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button type="button" className="py-3 px-4 inline-flex items-center" aria-haspopup="dialog" aria-expanded="false" aria-controls="adminMobileMenu" data-hs-overlay="#adminMobileMenu">
                <FaBars className="text-2xl text-default-500" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div id="adminMobileMenu" className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-80 bg-white border-e border-default-200" role="dialog" tabIndex={-1} aria-labelledby="adminMobileMenu-label">
        <div className="flex flex-col h-full divide-y-2 divide-default-200">
          <div className="p-6 flex items-center justify-between">
            <Link to="/">
              <img src={logoDark} className="h-8" alt="Logo" width={126} height={32} />
            </Link>
            <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#adminMobileMenu">
              <span className="sr-only">Close</span>
              <FaXmark className="text-xl" />
            </button>
          </div>

          <div className="p-6 overflow-scroll h-full">
            <ul className="navbar-nav flex flex-col gap-2">
              <li className="nav-item">
                <Link to="/account/dashboard" className="nav-link">
                  <Icon icon="solar:widget-5-bold-duotone" className="size-5 me-2" />
                  <span className="grow">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/account/dashboard" className="nav-link">
                  <Icon icon="solar:folder-2-bold-duotone" className="size-5 me-2" />
                  <span className="grow">Projects</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/account/dashboard" className="nav-link">
                  <Icon icon="solar:hamburger-menu-bold-duotone" className="size-5 me-2" />
                  <span className="grow">Tasks</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/account/dashboard" className="nav-link">
                  <Icon icon="solar:chart-square-bold-duotone" className="size-5 me-2" />
                  <span className="grow">Reports</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/account/setting" className="nav-link">
                  <Icon icon="solar:tuning-square-2-bold-duotone" className="size-5 me-2" />
                  <span className="grow">Settings</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="px-6 py-4 flex items-center">
            <button className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm">Download</button>
          </div>
        </div>
      </div>
    </>;
};
export default Header;