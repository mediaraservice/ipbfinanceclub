import { FaArrowRight, FaBitcoin, FaDiamond, FaDochub, FaDropbox, FaEthereum, FaLock, FaT, FaTiktok } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const coins = [{
  icon: FaBitcoin,
  name: 'Bitcoin',
  size: 'text-5xl',
  variant: 'bg-orange-400'
}, {
  icon: FaEthereum,
  name: 'Ethereum',
  size: 'text-3xl',
  variant: 'bg-blue-500'
}, {
  icon: FaT,
  name: 'Tether',
  variant: 'bg-emerald-700'
}, {
  icon: FaLock,
  name: 'Chainlink',
  variant: 'bg-sky-500',
  isSolid: true
}, {
  icon: FaDiamond,
  name: 'Basic Attention Token',
  variant: 'bg-red-500',
  isSolid: true
}, {
  icon: FaDochub,
  name: 'Dash',
  variant: 'bg-sky-500'
}, {
  icon: FaDropbox,
  name: 'Binance Coin',
  variant: 'bg-amber-300'
}, {
  icon: FaTiktok,
  name: 'Tezos',
  variant: 'bg-green-500'
}];
const Coins = () => {
  return <>
      <section className="py-20" data-aos="fade-up">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl font-medium">Supported coins</h1>
            <p className="font-medium text-default-500 mt-5 mb-4">
              Fastest way to buy or sell
              <span className="text-default-900">popular</span> crypto coins.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-14 mt-16">
            {coins.map((coin, idx) => {
            const Icon = coin.icon;
            return <div key={idx} className="flex items-center gap-5">
                  <div className={`h-12 w-12 ${coin.variant}  rounded-full flex items-center justify-center`}>
                    <Icon className="text-white text-3xl" />
                  </div>
                  <h4 className="text-base">{coin.name}</h4>
                </div>;
          })}
          </div>
          <div className="text-center mt-16">
            <Link to="#" className="inline-flex items-center py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
              View complete list <FaArrowRight className="ms-2" />
            </Link>
          </div>
        </div>
      </section>
    </>;
};
export default Coins;