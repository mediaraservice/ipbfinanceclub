import avatar8 from '@/assets/images/avatars/img-8.jpg';
const Account = () => {
  return <>
      <div id="tabs-account" role="tabpanel" className="min-h-[650px]">
        <h4 className="text-base text-default-800">Account Information</h4>
        <form action="#">
          <h6 className="mt-6 mb-2.5 text-sm text-default-800">Your Avatar</h6>
          <div className="flex items-center gap-6">
            <div className="sharink">
              <div className="w-16 h-16">
                <img src={avatar8} className="max-w-full max-h-full rounded-full shadow" alt="..." />
              </div>
            </div>
            <div className="grow flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded text-xs font-semibold border border-primary text-primary transition-all hover:shadow-lg hover:bg-primary hover:text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3 py-2">
                Upload
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded text-xs font-semibold border border-red-500 text-red-500 transition-all hover:shadow-lg hover:bg-red-500 hover:text-white hover:shadow-red-500/30 focus:shadow-none focus:outline focus:outline-red-500/40 px-3 py-2">
                Remove
              </a>
            </div>
          </div>
          <hr className="my-6 border-default-200" />
          <div className="grid grid-cols-2 items-center gap-6">
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold mb-1 text-default-600">
                  Name<small>*</small>
                </label>
                <input type="text" className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="name" placeholder="Your Name" name="name" defaultValue="Greeva Navadiya" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-1 text-default-600">
                  Email<small>*</small>
                </label>
                <input type="email" className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="email" placeholder="Email" name="email" defaultValue="greeva@coderthemes.com" />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="display_name" className="block text-sm font-semibold mb-1 text-default-600">
                  Display name
                </label>
                <input type="text" className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="display_name" aria-describedby="display_name" placeholder="Display Name" name="display_name" defaultValue="Greeva N" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 text-default-600">
                  Phone<small>*</small>
                </label>
                <input type="text" className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="phone" name="phone" placeholder="Phone number" defaultValue="+1 254 024 5400" />
              </div>
            </div>
          </div>
          <hr className="mb-3 border-default-200" />
          <div className="flex flex-wrap my-4">
            <div className="w-full">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 text-default-600">Profile Visibility</label>
                <div className="flex gap-4 my-2">
                  <div className="flex items-center gap-2">
                    <input type="radio" className="h-4 w-4 rounded-full border-default-300 text-primary shadow-sm focus:border-primary/30 focus:ring focus:ring-primary/20 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-default-400" id="visibilityPublic" name="visibility" defaultChecked />
                    <label className="text-sm font-medium text-default-700" htmlFor="visibilityPublic">
                      Public
                    </label>
                  </div>
                  <div className="flex items-center gap-2 ms-3">
                    <input type="radio" className="h-4 w-4 rounded-full border-default-300 text-primary shadow-sm focus:border-primary/30 focus:ring focus:ring-primary/20 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-default-400" name="visibility" id="visibilityPrivate" />
                    <label className="text-sm font-medium text-default-700" htmlFor="visibilityPrivate">
                      Private
                    </label>
                  </div>
                </div>
                <small className="text-xs text-default-500 mt-3">Making your profile public means anyone can see your information</small>
              </div>
            </div>
            <div className="w-full mt-2">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 text-default-600">Contact Info Visibility</label>
                <div className="flex gap-4 my-2">
                  <div className="flex items-center gap-2">
                    <input type="radio" className="h-4 w-4 rounded-full border-default-300 text-primary shadow-sm focus:border-primary/30 focus:ring focus:ring-primary/20 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-default-400" id="visibilityPublic1" name="visibility1" defaultChecked />
                    <label className="text-sm font-medium text-default-700" htmlFor="visibilityPublic1">
                      Public
                    </label>
                  </div>
                  <div className="flex items-center gap-2 ms-3">
                    <input type="radio" className="h-4 w-4 rounded-full border-default-300 text-primary shadow-sm focus:border-primary/30 focus:ring focus:ring-primary/20 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-default-400" name="visibility1" id="visibilityPrivate1" />
                    <label className="text-sm font-medium text-default-700" htmlFor="visibilityPrivate1">
                      Private
                    </label>
                  </div>
                </div>
                <small className="text-xs text-default-500 mt-3">
                  Making your contact info public means anyone can see your email and phone number
                </small>
              </div>
            </div>
          </div>
          <hr className="mb-3 border-default-200" />
          <div className="flex">
            <div className="w-full">
              <div className="flex items-center my-2">
                <div className="shrink">
                  <label className="inline text-sm font-semibold mb-1 text-default-800">Remove account</label>
                  <small className="text-xs text-default-500">your account you will lose all your data</small>
                </div>
                <div className="grow text-end">
                  <button type="button" className="inline-flex items-center justify-center rounded text-xs font-semibold border border-red-500 text-red-500 transition-all hover:shadow-lg hover:bg-red-500 hover:text-white hover:shadow-red-500/30 focus:shadow-none focus:outline focus:outline-red-500/40 px-3 py-2">
                    Remove Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 border-default-200" />
          <div className="flex mt-3">
            <div className="w-full">
              <button type="submit" className="inline-flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold transition-all hover:shadow-lg bg-primary text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 ">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>;
};
export default Account;