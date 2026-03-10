import logoDark from '@/assets/images/logo-dark.png';
import Icon from '@/components/wrappers/Icon';
import { Link, useLocation } from 'react-router-dom';
const Page = () => {
  const location = useLocation()
  // Ambil email dari state, jika tidak ada pakai placeholder
  const email = location.state?.email || 'your email address'

  return <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container">
          <div>
            <div className="lg:w-1/2 mx-auto mb-6">
              <div className="flex justify-center mb-6">
                {/* <Link to="">
                  <img src={logoDark} alt="logo-img" className="h-7" />
                </Link> */}
              </div>
              <div className="bg-white shadow-md text-center p-6 rounded-s col-span-6">
                <h6 className="text-base/[1.6] font-semibold text-default-600 mb-0 mt-4">Please check your inbox</h6>
                <div className="text-sky-500 py-5">
                  <Icon icon="solar:letter-opened-bold-duotone" className="size-20 text-primary mx-auto" />
                </div>
                <p className="text-default-500 text-sm font-medium mb-6">
                  We sent a confirmation link to you at 
                  <span className="text-default-800 fw-medium">{email}</span>
                </p>
                <p className="text-default-500 text-sm font-medium">Simply click on the link available in the email to confirm your account.</p>
              </div>
            </div>
            <div className="w-full text-center">
              <p className="text-default-500 leading-6 text-base">
                Back to
                <Link to="/auth/login" className="text-primary font-semibold ms-1">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Page;