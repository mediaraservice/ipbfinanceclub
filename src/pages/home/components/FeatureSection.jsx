import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const FeatureSection = ({ type }) => {
  const [items, setItems] = useState([])
  const dbType = type === 'projects' ? 'Project' : 'News'

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('type', dbType)
        .eq('status', 'published')
        .limit(3) // Hanya tampilkan 3 teratas di landing page
        .order('created_at', { ascending: false })
      setItems(data || [])
    }
    fetchData()
  }, [dbType])

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4 capitalize">Our {type}</h2>
            <p className="text-default-500">Eksplorasi kontribusi dan informasi terbaru dari IPB Finance Club.</p>
          </div>
          <Link to={`/pages/${type}`} className="text-primary font-bold flex items-center gap-2 group">
            Lihat Lebih Banyak <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-default-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img src={item.thumbnail_url || 'https://via.placeholder.com/400x250'} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-default-500 text-sm line-clamp-3 mb-4">{item.content?.replace(/<[^>]*>?/gm, '')}</p>
                <Link to={`/pages/${type}/${item.id}`} className="text-primary text-sm font-semibold">
                  Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
