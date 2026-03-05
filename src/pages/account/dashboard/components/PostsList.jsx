import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import { Link } from 'react-router-dom'
import Icon from '@/components/wrappers/Icon'

const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('Projects')

  useEffect(() => {
    fetchPosts()
  }, [activeTab])

  const fetchPosts = async () => {
    setLoading(true)
    const filterType = activeTab === 'Projects' ? 'Project' : 'News'

    const { data, error } = await supabase
      .from('posts')
      .select(`*, profiles(full_name)`)
      .eq('type', filterType)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching posts:', error.message)
    } else {
      setPosts(data)
    }
    setLoading(false)
  }

  // --- DELETE FUNCTION ---
  const handleDelete = async (id, title) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${title}"?`)
    if (!confirmDelete) return

    const { error } = await supabase.from('posts').delete().eq('id', id)

    if (error) {
      alert('Error deleting post: ' + error.message)
    } else {
      // Update local state so the post disappears immediately
      setPosts(posts.filter((post) => post.id !== id))
    }
  }

  // --- SHARE FUNCTION ---
  const handleShare = (post) => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          url: `${window.location.origin}/post/${post.id}`,
        })
        .catch(console.error)
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/post/${post.id}`)
      alert('Link copied to clipboard!')
    }
  }

  // Helper to format the status and date
  const getPublishStatus = (post) => {
    if (post.status === 'published') return { label: 'Published', color: 'text-green-600' }
    if (post.status === 'unpublished') return { label: 'Unpublished', color: 'text-red-600' }

    const now = new Date()
    const scheduledDate = new Date(post.published_at)

    if (now >= scheduledDate) {
      return { label: 'Published', color: 'text-green-600' }
    }

    // Format date like: "13.00, 1 May 2026"
    const formattedDate = scheduledDate
      .toLocaleString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .replace(',', '')

    return { label: `Scheduled at ${formattedDate}`, color: 'text-orange-500' }
  }

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-default-900">Posts List</h1>
        <Link
          to="/account/create-post"
          className="bg-white border-2 border-default-900 px-6 py-2 rounded-xl font-bold hover:bg-default-900 hover:text-white transition-all">
          Create
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 mb-6 border-b border-default-200">
        {['Projects', 'News'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-bold transition-all ${activeTab === tab ? 'border-b-4 border-default-900 text-default-900' : 'text-default-400'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Icon icon="tabler:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-default-400 size-5" />
          <input
            type="text"
            placeholder="Cari..."
            className="w-full pl-10 pr-4 py-3 border-2 border-default-200 rounded-xl focus:border-default-900 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* List Items */}
      <div className="space-y-4">
        {loading ? (
          <p>Loading posts...</p>
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post) => {
            const statusInfo = getPublishStatus(post)
            return (
              <div key={post.id} className="flex items-center gap-4 p-3 bg-white border border-default-100 rounded-xl hover:shadow-sm transition-all">
                {/* Thumbnail */}
                <div className="size-20 bg-gray-100 border border-default-200 rounded-lg overflow-hidden shrink-0">
                  {post.thumbnail_url ? (
                    <img src={post.thumbnail_url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-default-300">
                      <Icon icon="tabler:photo" className="size-8" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-default-900 truncate">{post.title}</h3>
                  <div className="flex flex-col text-sm">
                    <span className="text-default-500 font-medium">By {post.profiles?.full_name || 'Unknown'}</span>
                    <span className={`font-bold mt-1 ${statusInfo.color}`}>{statusInfo.label}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1">
                  <button onClick={() => handleShare(post)} className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg" title="Share">
                    <Icon icon="tabler:share" className="size-6" />
                  </button>
                  <Link to={`/account/create-post/${post.id}`} className="p-2 hover:bg-gray-100 text-default-700 rounded-lg" title="Edit">
                    <Icon icon="tabler:pencil" className="size-6" />
                  </Link>
                  <button onClick={() => handleDelete(post.id, post.title)} className="p-2 hover:bg-red-50 text-red-500 rounded-lg" title="Delete">
                    <Icon icon="tabler:trash" className="size-6" />
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <div className="text-center py-20 text-default-400 italic">No posts found in this category.</div>
        )}
      </div>
    </div>
  )
}

export default PostsList
