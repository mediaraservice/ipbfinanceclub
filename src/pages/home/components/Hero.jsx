import startup from '@/assets/images/hero/startup.svg'
import whitewave from '@/assets/images/shapes/white-wave.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-t from-yellow-50/80 relative">
      <section className="relative pt-44 pb-40">
        <div className="container">
          <div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1 text-center sm:text-start">
              <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                The Hub for
                <span className="relative z-0 ml-2 after:bg-yellow-200 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
                  Future Finance
                </span>
                & Investment Leaders
              </h1>
              <p className="text-default-500">
                IPB Finance Club (IFC) memberdayakan mahasiswa melalui literasi keuangan, riset investasi, dan persiapan kompetisi bisnis nasional.
              </p>
              <div className="flex gap-4 mt-16 justify-center sm:justify-start">
                <Link to="/pages/about" className="bg-primary text-white rounded-md hover:shadow-lg hover:shadow-primary/30 py-2 px-6 transition-all">
                  About Us
                </Link>
                <Link
                  to="/pages/news"
                  className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white py-2 px-6 transition-all">
                  Latest News
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2" data-aos="fade-left" data-aos-duration={1000}>
              <img src={startup} alt="IFC Illustration" />
            </div>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 inset-x-0 hidden sm:block">
        <img src={whitewave} alt="svg" className="w-full -scale-x-100 -scale-y-100" />
      </div>
    </section>
  )
}

export default Hero
