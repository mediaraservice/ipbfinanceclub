import { useState } from 'react'
import { supabase } from '@/supabaseClient'

const Password = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdatePassword = async (e) => {
    e.preventDefault()

    // 1. Basic Validation
    if (formData.newPassword !== formData.confirmPassword) {
      return alert('New passwords do not match!')
    }

    if (formData.newPassword.length < 6) {
      return alert('Password must be at least 6 characters.')
    }

    setLoading(true)

    try {
      // 2. Verify Current Password First (Security Step)
      const {
        data: { user },
      } = await supabase.auth.getUser()
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: formData.currentPassword,
      })

      if (signInError) {
        throw new Error('Current password is incorrect.')
      }

      // 3. Update to New Password
      const { error: updateError } = await supabase.auth.updateUser({
        password: formData.newPassword,
      })

      if (updateError) throw updateError

      alert('Password updated successfully!')

      // Clear form
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      })
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="tabs-password" className="min-h-[650px]" role="tabpanel">
      <h4 className="text-base font-bold text-default-800">Change Password</h4>

      <form onSubmit={handleUpdatePassword} className="mt-6">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-default-600">
            Current Password<small>*</small>
          </label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            className="py-2 px-4 leading-6 block w-full text-default-700 border border-default-300 rounded text-sm focus:border-primary outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-default-600">
            New Password<small>*</small>
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="py-2 px-4 leading-6 block w-full text-default-700 border border-default-300 rounded text-sm focus:border-primary outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-default-600">
            Confirm Password<small>*</small>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="py-2 px-4 leading-6 block w-full text-default-700 border border-default-300 rounded text-sm focus:border-primary outline-none"
            required
          />
        </div>

        <hr className="my-6 border-default-200" />

        <div className="row mt-3">
          <div className="col-lg-12">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center py-3 px-6 rounded-lg text-sm font-semibold transition-all hover:shadow-lg bg-primary text-white hover:shadow-primary/30 disabled:bg-gray-400">
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Password
