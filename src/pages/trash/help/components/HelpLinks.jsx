import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
const HelpLinks = () => {
  return <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div>
          <Icon icon="solar:code-square-line-duotone" className="size-12 text-primary" />
          <h4 className="text-lg my-4">Getting started</h4>
          <div className="grid gap-y-4 mb-4">
            <Link to="#" className="font-medium text-default-400">
              General information
            </Link>
            <Link to="#" className="font-medium text-default-400">
              Signup help
            </Link>
            <Link to="#" className="font-medium text-default-400">
              Preparing the documents
            </Link>
          </div>
          <Link to="#">
            <div className="flex items-center gap-3">
              <p className="text-primary font-medium">View More</p>
              <FaAngleRight className="text-primary" />
            </div>
          </Link>
        </div>
        <div>
          <Icon icon="solar:shield-user-bold-duotone" className="size-12 text-primary" />
          <h4 className="text-lg my-4">Managing my account</h4>
          <div className="grid gap-y-4 mb-4">
            <Link to="#" className="font-medium text-default-400">
              Managing my account
            </Link>
            <Link to="#" className="font-medium text-default-400">
              Identity verification
            </Link>
            <Link to="#" className="font-medium text-default-400">
              Linking a paymeny method
            </Link>
          </div>
          <Link to="#">
            <div className="flex items-center gap-3">
              <p className="text-primary font-medium">View More</p>
              <FaAngleRight className="text-primary" />
            </div>
          </Link>
        </div>
        <div>
          <Icon icon="solar:sort-horizontal-line-duotone" className="size-12 text-primary" />
          <h4 className="text-lg my-4">API &amp; Integrations</h4>
          <div className="grid gap-y-4 mb-4">
            <Link to="#" className="font-medium text-default-400">
              Rest API Integrations
            </Link>
            <Link to="#" className="font-medium text-default-400">
              API SDKs
            </Link>
            <Link to="#" className="font-medium text-default-400">
              Embed scripts
            </Link>
          </div>
          <Link to="#">
            <div className="flex items-center gap-3">
              <p className="text-primary font-medium">View More</p>
              <FaAngleRight className="text-primary" />
            </div>
          </Link>
        </div>
      </div>
    </>;
};
export default HelpLinks;