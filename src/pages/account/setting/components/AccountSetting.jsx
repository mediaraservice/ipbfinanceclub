import Account from './Account';
import Password from './Password';
const AccountSetting = () => {
  return <>
      <div className="bg-default-100 h-full pt-[77px] py-3 px-3">
        <section className="relative overflow-hidden">
          <div className="container">
            <div className="flex">
              <div className="w-full">
                <h3 className="text-xl text-default-800 mt-2">Account Settings</h3>
                <p className="mt-1 font-medium mb-4">Change your account settings</p>
              </div>
            </div>
            <div className="flex mt-2">
              <div className="w-full">
                <div className="bg-white rounded">
                  <div className="p-6">
                    <div className="grid lg:grid-cols-4 gap-6">
                      <div className="col-span-1">
                        <nav className="flex flex-row lg:flex-col gap-2 w-auto lg:w-full bg-default-100 p-1.5 rounded-md lg:justify-start" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                          <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-primary text-start py-2 px-4 rounded bg-transparent transition-all active" aria-selected="true" data-hs-tab="#tabs-account" aria-controls="tabs-account" role="tab">
                            Account
                          </button>
                          <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-primary text-start py-2 px-4 rounded bg-transparent transition-all" aria-selected="false" data-hs-tab="#tabs-password" aria-controls="tabs-password" role="tab">
                            Password
                          </button>
                        </nav>
                      </div>

                      <div className="lg:col-span-3 transition-all px-4 h-full">
                        <Account />
                        <Password />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default AccountSetting;