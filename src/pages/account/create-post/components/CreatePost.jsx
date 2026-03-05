import { useState, useEffect } from 'react'
import { supabase } from '@/supabaseClient'
import { useNavigate, useParams } from 'react-router-dom' // Ditambahkan useParams
import Icon from '@/components/wrappers/Icon'

// Tiptap Imports for Rich Text
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'

const CreatePost = () => {
  const navigate = useNavigate()
  const { id } = useParams() // Mengambil ID dari URL jika ada
  const isEditMode = Boolean(id)

  // Form States
  const [title, setTitle] = useState('')
  const [type, setType] = useState('Project')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailPreview, setThumbnailPreview] = useState(null)
  const [publishOption, setPublishOption] = useState('now')
  const [publishDateTime, setPublishDateTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [isApproved, setIsApproved] = useState(false)

  // 1. Initialize Tiptap Editor
  const editor = useEditor({
    extensions: [StarterKit, Image.configure({ allowBase64: true }), Link.configure({ openOnClick: false })],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[300px] p-4 max-w-none',
      },
    },
  })

  // 2. Load Data (Check Approval & Fetch Post if Edit Mode)
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        // Check Approval
        const { data: profile } = await supabase.from('profiles').select('is_approved').eq('id', user.id).maybeSingle()
        setIsApproved(profile?.is_approved || false)

        // If in Edit Mode, fetch existing post data
        if (isEditMode) {
          const { data: post, error } = await supabase.from('posts').select('*').eq('id', id).single()
          if (post) {
            setTitle(post.title)
            setType(post.type)
            setThumbnailPreview(post.thumbnail_url)
            setPublishOption(post.status === 'published' ? 'now' : post.status)
            if (post.published_at) {
              setPublishDateTime(new Date(post.published_at).toISOString().slice(0, 16))
            }
            editor?.commands.setContent(post.body)
          }
        }
      }
    }
    fetchData()
  }, [id, isEditMode, editor])

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setThumbnail(file)
      setThumbnailPreview(URL.createObjectURL(file))
    }
  }

  const uploadFile = async (file, folder) => {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${folder}/${fileName}`
    const { error } = await supabase.storage.from('blog-content').upload(filePath, file)
    if (error) throw error
    const { data } = supabase.storage.from('blog-content').getPublicUrl(filePath)
    return data.publicUrl
  }

  const addEditorImage = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async () => {
      const file = input.files[0]
      if (file) {
        try {
          const url = await uploadFile(file, 'content-images')
          editor.chain().focus().setImage({ src: url }).run()
        } catch (err) {
          alert('Editor image upload failed')
        }
      }
    }
    input.click()
  }

  // 3. Unified Submit Logic (Insert or Update)
  const handleSubmit = async () => {
    // Thumbnail hanya wajib jika post BARU. Jika edit, boleh pakai yang lama.
    if (!title || (!thumbnail && !isEditMode) || !editor.getHTML()) {
      return alert('Please fill in all required fields.')
    }

    setLoading(true)
    try {
      let thumbnailUrl = thumbnailPreview // Gunakan preview lama sebagai default

      // Jika ada file thumbnail baru yang dipilih, upload dulu
      if (thumbnail) {
        thumbnailUrl = await uploadFile(thumbnail, 'thumbnails')
      }

      const postData = {
        title,
        type,
        body: editor.getHTML(),
        thumbnail_url: thumbnailUrl,
        status: publishOption === 'now' ? 'published' : publishOption,
        published_at: publishOption === 'scheduled' ? publishDateTime : null,
      }

      let result
      if (isEditMode) {
        // UPDATE jika sedang edit
        result = await supabase.from('posts').update(postData).eq('id', id)
      } else {
        // INSERT jika post baru
        result = await supabase.from('posts').insert([postData])
      }

      if (result.error) throw result.error

      alert(isEditMode ? 'Post updated successfully!' : 'Post created successfully!')
      navigate('/account/dashboard') // Sesuaikan path dashboard Anda
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!isApproved) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-xl font-bold text-red-500">Access Denied</h2>
        <p>Your account is pending admin approval.</p>
      </div>
    )
  }

  return (
    <section className="bg-white min-h-screen pb-20">
      <div className="container max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold my-8 text-default-900">{isEditMode ? 'Edit Post' : 'Create Post'}</h1>

        <div className="mb-6">
          <label className="relative border-2 border-default-200 rounded-xl h-52 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:bg-gray-50 transition-all">
            <input type="file" accept="image/*" className="hidden" onChange={handleThumbnailChange} />
            {thumbnailPreview ? (
              <img src={thumbnailPreview} className="w-full h-full object-cover" alt="Preview" />
            ) : (
              <div className="text-center">
                <Icon icon="tabler:upload" className="size-10 mx-auto text-default-400 mb-2" />
                <span className="text-default-700 font-medium">Upload Thumbnail</span>
              </div>
            )}
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-default-200 rounded-xl p-3 focus:border-default-900 outline-none transition-all"
            placeholder="Blog Post Title"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Body</label>
          <div className="border-2 border-default-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 border-b-2 border-default-200 p-2 flex flex-wrap gap-1">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className="p-2 hover:bg-white rounded border border-transparent hover:border-default-200">
                <Icon icon="tabler:bold" className="size-5" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className="p-2 hover:bg-white rounded border border-transparent hover:border-default-200">
                <Icon icon="tabler:h-2" className="size-5" />
              </button>
              <button onClick={addEditorImage} className="p-2 hover:bg-white rounded border border-transparent hover:border-default-200">
                <Icon icon="tabler:photo" className="size-5" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className="p-2 hover:bg-white rounded border border-transparent hover:border-default-200">
                <Icon icon="tabler:list" className="size-5" />
              </button>
            </div>
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="flex border-2 border-default-900 rounded-xl overflow-hidden mb-6">
          <button
            onClick={() => setType('Project')}
            className={`flex-1 py-3 font-bold transition-all ${type === 'Project' ? 'bg-default-900 text-white' : 'bg-white text-default-900'}`}>
            Project
          </button>
          <button
            onClick={() => setType('News')}
            className={`flex-1 py-3 font-bold transition-all ${type === 'News' ? 'bg-default-900 text-white' : 'bg-white text-default-900'}`}>
            News
          </button>
        </div>

        <div className="mb-8 border-2 border-default-200 rounded-xl p-6">
          <h4 className="text-lg font-bold mb-4">Publish status:</h4>
          <div className="space-y-4 mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="publish_option"
                value="now"
                checked={publishOption === 'now'}
                onChange={(e) => setPublishOption(e.target.value)}
                className="size-5 accent-default-900"
              />
              <span className="text-base font-medium text-default-800">Now (Public)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="publish_option"
                value="scheduled"
                checked={publishOption === 'scheduled'}
                onChange={(e) => setPublishOption(e.target.value)}
                className="size-5 accent-default-900"
              />
              <span className="text-base font-medium text-default-800">Scheduled</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="publish_option"
                value="unpublished"
                checked={publishOption === 'unpublished'}
                onChange={(e) => setPublishOption(e.target.value)}
                className="size-5 accent-default-900"
              />
              <span className="text-base font-medium text-default-800">Draft (Private)</span>
            </label>
          </div>

          {publishOption === 'scheduled' && (
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Time and Date</label>
              <input
                type="datetime-local"
                value={publishDateTime}
                onChange={(e) => setPublishDateTime(e.target.value)}
                className="w-full border-2 border-default-200 rounded-xl p-3 focus:border-default-900 outline-none"
              />
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-default-900 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all">
          <Icon icon={isEditMode ? 'tabler:device-floppy' : 'tabler:send'} className="size-6" />
          {loading ? 'Processing...' : isEditMode ? 'Update Post' : 'Finish Post'}
        </button>
      </div>
    </section>
  )
}

export default CreatePost
