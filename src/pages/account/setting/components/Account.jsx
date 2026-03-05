import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import Icon from '@/components/wrappers/Icon'

const Account = () => {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({
    full_name: '',
    email: '',
    avatar_url: null,
  })
  const [uploading, setUploading] = useState(false)

  // 1. Fetch Profile Data
  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        const { data, error } = await supabase.from('profiles').select('full_name, avatar_url').eq('id', user.id).single()

        if (error) throw error
        setProfile({
          full_name: data.full_name || '',
          email: user.email || '',
          avatar_url: data.avatar_url,
        })
      }
    } catch (error) {
      console.error('Error loading user data:', error.message)
    } finally {
      setLoading(false)
    }
  }

  // 2. Handle Avatar Upload
  const uploadAvatar = async (event) => {
    try {
      setUploading(true)
      if (!event.target.files || event.target.files.length === 0) throw new Error('Select an image.')

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `avatars/${fileName}`

      const { error: uploadError } = await supabase.storage.from('blog-content').upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from('blog-content').getPublicUrl(filePath)

      setProfile({ ...profile, avatar_url: data.publicUrl })
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }

  // 3. Update Profile Info
  const updateProfile = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      const updates = {
        id: user.id,
        full_name: profile.full_name,
        avatar_url: profile.avatar_url,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading && !profile.email) return <div className="p-10 text-center">Loading...</div>

  return (
    <div id="tabs-account" role="tabpanel" className="min-h-[650px]">
      <h4 className="text-base text-default-800 font-bold">Account Information</h4>

      <form onSubmit={updateProfile}>
        <h6 className="mt-6 mb-2.5 text-sm text-default-800">Your Avatar</h6>
        <div className="flex items-center gap-6">
          <div className="shrink">
            <div className="w-16 h-16 border-2 border-default-200 rounded-full overflow-hidden">
              <img src={profile.avatar_url || 'https://via.placeholder.com/150'} className="w-full h-full object-cover" alt="Avatar" />
            </div>
          </div>
          <div className="grow flex items-center gap-3">
            <label className="cursor-pointer inline-flex items-center justify-center rounded text-xs font-semibold border border-primary text-primary transition-all hover:bg-primary hover:text-white px-3 py-2">
              {uploading ? 'Uploading...' : 'Upload'}
              <input type="file" className="hidden" accept="image/*" onChange={uploadAvatar} disabled={uploading} />
            </label>
            <button
              type="button"
              onClick={() => setProfile({ ...profile, avatar_url: null })}
              className="inline-flex items-center justify-center rounded text-xs font-semibold border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-3 py-2">
              Remove
            </button>
          </div>
        </div>

        <hr className="my-6 border-default-200" />

        <div className="grid gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-default-600">
                Name<small>*</small>
              </label>
              <input
                type="text"
                className="py-2 px-4 block w-full text-default-700 border-default-300 rounded text-sm focus:border-primary focus:ring-0 outline-none border"
                value={profile.full_name}
                onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-default-600">Email (Read Only)</label>
              <input
                type="email"
                className="py-2 px-4 block w-full text-default-500 border-default-200 bg-gray-50 rounded text-sm outline-none border cursor-not-allowed"
                value={profile.email}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="flex mt-3">
          <div className="w-full">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center py-3 px-6 rounded-lg text-sm font-semibold transition-all bg-primary text-white hover:shadow-lg hover:shadow-primary/30">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Account
