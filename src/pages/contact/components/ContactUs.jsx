import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return <>
      <section className="lg:pb-24 py-6 relative">
        <div className="container">
          <div className="lg:flex align-items-center">
            <div className="lg:w-1/2">
              <div className="mb-6 relative bg-clip-border rounded-[0.1875rem]">
                <div className="py-12">
                  <h2 className="mb-4 text-2xl/6 mt-0 font-medium">Let&apos;s Talk Further</h2>
                  <p className="mb-12 text-base/6">Please fill out the following form and we will get back to you shortly</p>
                  <form>
                    <div className="flex gap-6">
                      <div className="md:w-1/2">
                        <div className="mb-5">
                          <label htmlFor="exampleInputName1" className="block text-sm font-medium mb-1 text-default-600">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input type="text" className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="exampleInputName1" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <div className="mb-5">
                          <label htmlFor="exampleInputName" className="block text-sm font-medium mb-1 text-default-600">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input type="text" className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="exampleInputName" placeholder="Your Name" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mb-5">
                        <label htmlFor="exampleInputEmail1" className="block text-sm font-medium mb-1 text-default-600">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input type="email" className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="exampleInputEmail1" placeholder="Your Email" />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="exampleFormControlTextarea1" className="block text-sm font-medium mb-1 text-default-600">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="exampleFormControlTextarea1" rows={4} placeholder="Type Your Massage..." />
                      </div>
                    </div>
                    <button type="submit" className="inline-flex items-center text-sm bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 rounded-md transition-all hover:shadow-lg hover:shadow-primary/80">
                      Send
                      <Icon icon="tabler:send-2" className="size-4 ms-1" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 ms-auto overflow-x-hidden">
              <div className="h-[520px]">
                <div id="marker-map5" className="h-100" data-toggle="map" data-map='{"mapCenter": [40.749179, -73.989276], "zoom": 12, "useTextIcon": false, "interactive": true, "geojson": "/assets/sample-listing-geojson.json" }'>
                  <iframe className="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569" frameBorder={0} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4 mb-3">
              <span className="flex items-center justify-center size-12 bg-primary/20 rounded-lg relative shrink-0">
                <Icon icon="solar:letter-opened-bold-duotone" className="size-7 text-primary" />
              </span>
              <div className="grow">
                <h5 className="text-base text-default-700">Email</h5>
                <Link to="#" className="text-default-500 my-1">
                  youremail@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex gap-4 mb-3">
              <span className="flex items-center justify-center size-12 bg-orange-500/20 rounded-lg relative shrink-0">
                <Icon icon="solar:incoming-call-rounded-bold-duotone" className="size-7 text-orange-500" />
              </span>
              <div className="grow">
                <h5 className="text-base text-default-700">Phone</h5>
                <Link to="#" className="text-default-500 my-1">
                  +00 123 456 7890
                </Link>
              </div>
            </div>
            <div className="flex gap-4 mb-3">
              <span className="flex items-center justify-center size-12 bg-teal-500/20 rounded-lg relative shrink-0">
                <Icon icon="solar:map-point-bold-duotone" className="size-7 text-teal-500" />
              </span>
              <div className="grow">
                <h5 className="text-base text-default-700">Address</h5>
                <Link to="#" className="text-default-500 my-1">
                  565 Brrom Str, NY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default ContactUs;