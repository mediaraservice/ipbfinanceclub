import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '@/supabaseClient'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const Blog = () => {
  const { type } = useParams() // Mengambil 'news' atau 'projects' dari URL
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [type])

  const fetchPosts = async () => {
    setLoading(true)

    // Mapping: URL 'projects' -> DB 'Project', URL 'news' -> DB 'News'
    const filterType = type === 'projects' ? 'Project' : 'News'

    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`*, profiles(full_name)`)
        .eq('type', filterType) // Menggunakan kolom 'type' sesuai referensi dashboard kamu
        .eq('status', 'published') // Hanya tampilkan yang sudah dipublish
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="py-24 text-center">Loading {type}...</div>

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8 lg:py-16 py-14" data-aos="fade-up">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="group border border-default-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                {/* Thumbnail menggunakan thumbnail_url sesuai referensi dashboard */}
                <div className="h-52 overflow-hidden bg-gray-100">
                  {post.thumbnail_url ? (
                    <img
                      src={post.thumbnail_url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-default-300 bg-default-50">No Image</div>
                  )}
                </div>

                <div className="p-5">
                  <h1 className="text-xl font-bold mb-3 transition-all hover:text-primary">
                    <Link to={`/pages/${type}/${post.id}`}>{post.title}</Link>
                  </h1>

                  <div className="flex items-center gap-2 mb-4 text-xs text-default-500">
                    <span className="font-semibold text-primary">By {post.profiles?.full_name || 'Admin'}</span>
                    <span>•</span>
                    <span>{new Date(post.created_at).toLocaleDateString('id-ID')}</span>
                  </div>

                  <p className="text-sm/relaxed text-default-600 line-clamp-3 mb-4">
                    {/* Menghapus tag HTML jika konten berupa rich text */}
                    {post.content?.replace(/<[^>]*>?/gm, '')}
                  </p>

                  <Link to={`/pages/${type}/${post.id}`} className="text-primary font-bold text-sm inline-flex items-center gap-1">
                    Read More <FaArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-default-400 italic">Belum ada {type} yang tersedia saat ini.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {posts.length > 0 && (
          <div className="flex justify-center items-center gap-2">
            <button className="border border-default-300 rounded-md py-2 px-4 hover:bg-default-50 transition-all text-sm font-medium">
              Previous
            </button>
            <button className="border border-default-300 rounded-md py-2 px-4 hover:bg-default-50 transition-all text-sm font-medium">Next</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
