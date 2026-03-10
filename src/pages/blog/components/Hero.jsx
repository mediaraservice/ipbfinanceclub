import { useParams } from 'react-router-dom'

const Hero = () => {
  const { type } = useParams()
  const title = type === 'news' ? 'Our News' : 'Our Projects'
  const description =
    type === 'news'
      ? 'Informasi terbaru seputar kegiatan, pencapaian, dan aktivitas yang diselenggarakan oleh IPB Finance Club.'
      : 'Kumpulan inisiatif dan riset strategis yang dilakukan oleh anggota IFC.'

  return (
    <section className="pt-36 pb-20 relative overflow-hidden">
      <div className="container">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 h-96 bg-cover bg-no-repeat bg-center bg-[url('../images/blog/hero.png')] -z-10">
          <div className="relative w-full h-full z-30 bg-black/40" />
        </div>

        <div className="relative lg:w-3/5 mx-auto z-30">
          <div className="text-center text-white">
            <h2 className="text-5xl font-semibold mb-8 capitalize">{title}</h2>
            <p className="text-base/relaxed tracking-wide opacity-90">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
