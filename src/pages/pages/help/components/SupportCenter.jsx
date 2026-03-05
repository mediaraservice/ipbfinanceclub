import Icon from '@/components/wrappers/Icon';
const SupportCenter = () => {
  return <>
      <div>
        <div className="sticky top-24 border border-default-200 rounded-md px-12 py-6">
          <div className="flex items-center gap-4">
            <Icon icon="tabler:lifebuoy" className="size-7 text-default-500" />
            <h4 className="text-lg">Support center</h4>
          </div>
          <h5 className="font-medium mt-3 text-default-400">
            <span className="font-semibold">Can&apos;t find the answer? </span>
            We are here to help you all the time.
          </h5>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Icon icon="tabler:message" className="size-5 text-default-500" />
            <h4 className="text-default-400">Talk to Support Team</h4>
          </div>
          <div className="flex flex-wrap items-center gap-4 my-3">
            <Icon icon="tabler:mail" className="size-5 text-default-500" />
            <h4 className="text-default-400">help@coderthemes.com</h4>
          </div>
          <div className="flex flex-wrap items-center gap-4 my-3">
            <Icon icon="tabler:brand-x" className="size-5 text-default-500" />
            <h4 className="text-default-400">@coderthemes</h4>
          </div>
        </div>
      </div>
    </>;
};
export default SupportCenter;