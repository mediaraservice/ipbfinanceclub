const About = () => {
  return (
    <>
      <section className="lg:py-24 py-16">
        <div className="container" data-aos="fade-up">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            {/* Judul Seksi */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="border-t-2 border-primary w-1/5 mb-7" />
              <h1 className="text-3xl font-bold text-default-900">Tentang IFC</h1>
            </div>

            {/* Kolom Deskripsi 1 */}
            <div>
              <p className="text-sm/relaxed tracking-wider text-default-600">
                IPB Finance Club (IFC) merupakan kelompok peminatan mahasiswa yang memiliki ketertarikan di bidang keuangan dan investasi. IFC berada
                di bawah asuhan Divisi Keuangan dan Akuntansi Departemen Manajemen, Fakultas Ekonomi dan Manajemen IPB University. Kegiatan kami
                berpusat di Galeri Investasi, Auditorium FEM IPB.
              </p>
            </div>

            {/* Kolom Deskripsi 2 */}
            <div>
              <p className="text-sm/relaxed tracking-wider text-default-600">
                Kami bertujuan memberikan literasi keuangan dan investasi baik bagi internal pengurus maupun masyarakat umum. Melalui pelatihan,
                company visit, dan seminar, kami berupaya meningkatkan softskill serta pengalaman nyata mahasiswa dalam berinteraksi dengan
                stakeholder industri keuangan.
              </p>
            </div>
          </div>

          <div className="lg:mt-10 mt-8">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
              <div /> {/* Kolom kosong untuk offset sesuai desain asli */}
              <div className="lg:col-span-2">
                <p className="text-sm/relaxed tracking-wider text-default-600 bg-default-50 p-6 rounded-2xl border-l-4 border-primary italic">
                  "IFC juga menjadi wadah persiapan dan pembinaan kontingen kompetisi nasional seperti KBMK (Kompetisi Mahasiswa Nasional Bidang Ilmu
                  Bisnis, Manajemen, dan Keuangan), Trading Competition, hingga Perencanaan Bisnis."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
