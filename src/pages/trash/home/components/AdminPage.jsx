import account from '@/assets/images/demo/account.png';
import dashboard from '@/assets/images/demo/dashboard.png';
import { Link } from 'react-router-dom';
const AdminPage = () => {
  return <>
      <section className="lg:py-20 py-10" id="admindemo">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">New</span>
            <h1 className="text-4xl my-4">Admin Pages</h1>
            <p className="text-default-500 mb-14">Modern landing pages available for every need</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-duration={600}>
            <Link to="/account/dashboard">
              <div className="border border-default-200 p-2 rounded">
                <img src={dashboard} alt="dashboard" width={514} height={321} />
              </div>
              <h4 className="text-base text-center mt-4">Dashboard</h4>
            </Link>
            <Link to="/account/setting">
              <div className="border border-default-200 p-2 rounded">
                <img src={account} alt="account" width={514} height={321} />
              </div>
              <h4 className="text-base text-center mt-4">Account Settings</h4>
            </Link>
          </div>
        </div>
      </section>
    </>;
};
export default AdminPage;