const Notification = () => {
  return <>
      <div id="tabs-notifications" className="hidden min-h-[650px]" role="tabpanel">
        <h4 className="text-base text-default-800">Password</h4>
        <div className="my-6">
          <h6 className="text-sm font-medium text-default-800 mb-4">Send me an email, when</h6>
          <div className="space-y-3">
            <div className="flex gap-2">
              <label htmlFor="check1" className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" id="check1" className="peer sr-only" defaultChecked />
                <div className="h-5 w-9 rounded-full bg-default-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-default-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-default-100 peer-disabled:after:bg-default-50"></div>
              </label>
              <span className="text-sm font-medium text-default-700">Someone mentions me</span>
            </div>
            <div className="flex gap-2">
              <label htmlFor="check2" className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" id="check2" className="peer sr-only" />
                <div className="h-5 w-9 rounded-full bg-default-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-default-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-default-100 peer-disabled:after:bg-default-50"></div>
              </label>
              <span className="text-sm font-medium text-default-700">Someone replies to me</span>
            </div>
            <div className="flex gap-2">
              <label htmlFor="check3" className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" id="check3" className="peer sr-only" defaultChecked />
                <div className="h-5 w-9 rounded-full bg-default-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-default-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-default-100 peer-disabled:after:bg-default-50"></div>
              </label>
              <span className="text-sm font-medium text-default-700">Someone shares the content</span>
            </div>
            <div className="flex gap-2">
              <label htmlFor="check4" className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" id="check4" className="peer sr-only" />
                <div className="h-5 w-9 rounded-full bg-default-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-default-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-default-100 peer-disabled:after:bg-default-50"></div>
              </label>
              <span className="text-sm font-medium text-default-700">There is a new published content</span>
            </div>
          </div>
        </div>
        <hr className="my-6 border-default-200" />
        <div className="my-6">
          <h6 className="text-sm font-medium text-default-800 mb-4">Send me an email, when</h6>
          <div className="space-y-3">
            <div className="flex gap-2">
              <label htmlFor="check5" className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" id="check5" className="peer sr-only" defaultChecked />
                <div className="h-5 w-9 rounded-full bg-default-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-default-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-default-100 peer-disabled:after:bg-default-50"></div>
              </label>
              <span className="text-sm font-medium text-default-700">Weekly newsletter</span>
            </div>
            <div className="flex gap-2">
              <label htmlFor="check6" className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" id="check6" className="peer sr-only" />
                <div className="h-5 w-9 rounded-full bg-default-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-default-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-default-100 peer-disabled:after:bg-default-50"></div>
              </label>
              <span className="text-sm font-medium text-default-700">Weekly jobs</span>
            </div>
            <div className="flex gap-2">
              <label htmlFor="check7" className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" id="check7" className="peer sr-only" defaultChecked />
                <div className="h-5 w-9 rounded-full bg-default-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-default-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-default-100 peer-disabled:after:bg-default-50"></div>
              </label>
              <span className="text-sm font-medium text-default-700">Events new me</span>
            </div>
          </div>
        </div>
        <hr className="my-6 border-default-200" />
        <div className="flex mt-4">
          <div className="w-full">
            <button type="submit" className="inline-flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold transition-all hover:shadow-lg bg-primary text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40">
              Update Preferences
            </button>
          </div>
        </div>
      </div>
    </>;
};
export default Notification;