import { useState } from 'react'
import { supabase } from '@/supabaseClient'
import { useNavigate } from 'react-router-dom'
import logoDark from '@/assets/images/logo-dark.png'
import Icon from '@/components/wrappers/Icon'
import { Link } from 'react-router-dom'
import Testimonial from './components/Testimonial'

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('') // State for name
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name, // Saves the name to the user's metadata
        },
      },
    })

    if (error) {
      alert(error.message)
    } else {
      // alert('Success! Check your email for a verification link.')
      navigate('/auth/confirm', { state: { email: email } })
    }
    setLoading(false)
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container">
          <div>
            <div className="bg-white shadow rounded mb-6">
              <div className="grid">
                <div className="bg-white shadow-md p-12 rounded-s max-w-100 mx-auto">
                  {/* ... logo section ... */}
                  <h6 className="text-base/[1.6] font-semibold text-default-600 mb-0 mt-4">Create Your Account</h6>
                  <p className="text-default-500 text-sm/[1.6] mt-1 mb-6">
                    Don&apos;t have an account? Create your account, it takes less than a minute.
                  </p>

                  <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1 text-default-600">
                        Your Name <small>*</small>
                      </label>
                      <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        className="py-2 px-4 block w-full border-default-300 rounded text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1 text-default-600">
                        Email <small>*</small>
                      </label>
                      <input
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-2 px-4 block w-full border-default-300 rounded text-sm"
                        placeholder="example@mail.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1 text-default-600">
                        Password <small>*</small>
                      </label>
                      <input
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="py-2 px-4 block w-full border-default-300 rounded text-sm"
                        placeholder="Min 6 characters"
                      />
                    </div>
                    <div className="mb-0 text-center">
                      <button className="w-full bg-primary text-white py-2 px-4 rounded-md disabled:opacity-50" type="submit" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Register'}
                      </button>
                    </div>
                  </form>
                  {/* ... rest of code ... */}
                  <div className="mt-6 text-center">
                    <p className="text-default-500 text-sm">
                      Already have an account?{' '}
                      <Link to="/auth/login" className="text-primary font-semibold hover:underline">
                        Log In
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page
