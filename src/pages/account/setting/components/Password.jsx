const Password = () => {
  return <>
      <div id="tabs-password" className="hidden min-h-[650px]" role="tabpanel">
        <h4 className="text-base text-default-800">Password</h4>
        <form action="#" className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1 text-default-600">
              Current Password<small>*</small>
            </label>
            <input type="password" className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="current_password" aria-describedby="current_password" name="current_password" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1 text-default-600">
              New Password<small>*</small>
            </label>
            <input type="password" className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="new_password" aria-describedby="current_password" name="new_password" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1 text-default-600">
              Confirm Password<small>*</small>
            </label>
            <input type="password" className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0" id="confirm_password" aria-describedby="current_password" name="confirm_password" />
          </div>
          <hr className="my-6 border-default-200" />

          <div className="row mt-3">
            <div className="col-lg-12">
              <button type="submit" className="inline-flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold transition-all hover:shadow-lg bg-primary text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40">
                Update Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </>;
};
export default Password;