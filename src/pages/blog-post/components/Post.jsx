import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '@/supabaseClient'
import Icon from '@/components/wrappers/Icon'
import { toast } from 'react-hot-toast'

const SinglePostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [author, setAuthor] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPostAndAuthor = async () => {
      // 1. Ambil data post (kolom sesuai gambar: title, body, thumbnail_url, type)
      const { data: postData, error: postError } = await supabase
        .from('posts')
        .select('title, body, thumbnail_url, type, created_at, author_id')
        .eq('id', id)
        .single()

      if (postData) {
        setPost(postData)

        // 2. Ambil data author dari tabel profil berdasarkan author_id
        const { data: authorData } = await supabase
          .from('profiles') // sesuaikan nama tabel profilmu
          .select('full_name, avatar_url')
          .eq('id', postData.author_id)
          .single()

        if (authorData) setAuthor(authorData)
      }
      setLoading(false)
    }

    fetchPostAndAuthor()
  }, [id])

  // Fungsi Share (Aktif)
  const sharePost = (platform) => {
    const url = window.location.href
    const text = post?.title || 'Check this out!'
    const shareLinks = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      whatsapp: `https://api.whatsapp.com/send?text=${text} ${url}`,
    }
    window.open(shareLinks[platform], '_blank')
  }

  if (loading) return <div className="py-40 text-center">Loading...</div>
  if (!post) return <div className="py-40 text-center">Post not found</div>

  const copyToClipboard = async () => {
    const url = window.location.href // Di dashboard, ganti dengan URL post spesifik
    try {
      await navigator.clipboard.writeText(url)
      alert('Link berhasil disalin ke clipboard!')
      // Jika pakai react-hot-toast: toast.success('Link disalin!')
    } catch (err) {
      console.error('Gagal menyalin link:', err)
    }
  }

  return (
    <article className="pb-20">
      <section className="pt-24">
        <div className="container">
          {/* Breadcrumb sederhana */}
          <div className="flex items-center gap-2 text-sm text-default-500 mb-8 bg-default-100 p-3 rounded">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{' '}
            / <span>{post.title}</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-default-900 mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8 mb-10">
            <div className="flex items-center gap-3">
              <img src={author?.avatar_url || 'https://via.placeholder.com/100'} className="h-12 w-12 rounded-full object-cover" alt="Author" />
              <div>
                <p className="font-medium text-default-900">{author?.full_name || 'Admin'}</p>
                <p className="text-sm text-default-500">{new Date(post.created_at).toLocaleDateString('id-ID')}</p>
              </div>
            </div>

            {/* Share Buttons Aktif */}
            <div className="flex gap-3 items-center">
              <p className="text-sm font-bold">SHARE:</p>
              <button onClick={copyToClipboard} title="Salin Link">
                <Icon icon="tabler:link" className="size-6 text-default-600" />
              </button>
              <button onClick={() => sharePost('facebook')}>
                <Icon icon="tabler:brand-facebook" className="size-6 text-blue-600" />
              </button>
              <button onClick={() => sharePost('twitter')}>
                <Icon icon="tabler:brand-x" className="size-6 text-black" />
              </button>
              <button onClick={() => sharePost('whatsapp')}>
                <Icon icon="tabler:brand-whatsapp" className="size-6 text-green-500" />
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {post.thumbnail_url && <img src={post.thumbnail_url} className="w-full rounded-2xl mb-10 shadow-sm" alt="Thumbnail" />}

            {/* Rendering kolom 'body' dari Tiptap */}
            <div className="tiptap-content" dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </div>
      </section>
    </article>
  )
}

export default SinglePostPage
