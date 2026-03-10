import { useState, useEffect } from 'react'
import { supabase } from '@/supabaseClient'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/wrappers/Icon'

const UpdatePassword = () => {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        setError('Sesi tidak valid atau telah kadaluarsa. Silakan minta reset password lagi.')
      }
    }
    checkSession()
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (newPassword !== confirmPassword) {
      return setError('Konfirmasi password tidak cocok.')
    }

    if (newPassword.length < 6) {
      return setError('Password minimal harus 6 karakter.')
    }

    setLoading(true)
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) throw error

      setMessage('Password berhasil diperbarui! Mengalihkan...')
      setTimeout(() => {
        navigate('/auth/login')
      }, 2000)
    } catch (err) {
      setError(err.message || 'Gagal memperbarui password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container">
          <div>
            <div className="bg-white shadow rounded mb-6">
              <div className="grid">
                <div className="bg-white shadow-md p-12 rounded-s max-w-100 mx-auto">
                  <h6 className="text-base/[1.6] font-semibold text-default-600 mb-0 mt-4">Set New Password</h6>
                  <p className="text-default-500 text-sm/[1.6] mt-1 mb-6">Enter your new password below to secure your account.</p>

                  {/* Feedback Messages */}
                  {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}
                  {message && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">{message}</div>}

                  <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium mb-1 text-default-600">
                        New Password <small>*</small>
                      </label>
                      <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1 text-default-600">
                        Confirm New Password <small>*</small>
                      </label>
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="mb-0 text-center">
                      <button
                        className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md transition-all hover:shadow-lg disabled:opacity-50"
                        type="submit"
                        disabled={loading || !!message}>
                        {loading ? 'Updating...' : 'Update Password'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatePassword
