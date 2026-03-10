import whiteWave from '@/assets/images/shapes/white-wave.svg';
import CountUp from 'react-countup';
const Counter = () => {
  return <>
      <section className="bg-gradient-to-r from-default-200/50 to-default-100/50 relative lg:py-24 py-16">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whiteWave} alt="white-wave-svg" className="w-full -scale-x-100" />
        </div>
        <div className="py-10">
          <div className="container" data-aos="fade-up">
            <div className="text-center">
              <span className="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">Stats</span>
              <h1 className="text-3xl/tight font-medium mt-3">Prompt In Numbers</h1>
            </div>
            <div className="mt-14">
              <div className="grid xl:grid-cols-4 sm:grid-cols-2 text-center gap-10 lg:gap-6">
                <div>
                  <span className="text-3xl">
                    <CountUp start={0} end={100} duration={10} suffix="+" />
                  </span>
                  <h1 className="mt-3 mb-1">Products Built </h1>
                  <p className="text-default-500">helped clients across the globe</p>
                </div>
                <div>
                  <span className="text-3xl">
                    <CountUp start={0} end={21} duration={5} prefix="$" suffix="M+" />
                  </span>
                  <h1 className="mt-3 mb-1">Revenue Generated</h1>
                  <p className="text-default-500">across 10+ countries</p>
                </div>
                <div>
                  <span className="text-3xl">
                    <CountUp start={0} end={100} duration={10} suffix="+" />
                  </span>
                  <h1 className="mt-3 mb-1">Satisfied Clients</h1>
                  <p className="text-default-500">across 100+ locations</p>
                </div>
                <div>
                  <span className="text-3xl">
                    <CountUp start={0} end={10} duration={5} suffix="+" />
                  </span>
                  <h1 className="mt-3 mb-1">Awards Won </h1>
                  <p className="text-default-500">on Awwwards, CSS Design Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Counter;