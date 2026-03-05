import { useState } from 'react' // Import state hook
import { supabase } from '@/supabaseClient' // Import the client you created earlier
import { useNavigate } from 'react-router-dom' // To redirect after login
import logoDark from '@/assets/images/logo-dark.png'
import Icon from '@/components/wrappers/Icon'
import { Link } from 'react-router-dom'
import Testimonial from './components/Testimonial'

const Page = () => {
  // 1. Define states for inputs and loading status
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // 2. Handle the Login logic
  const handleLogin = async (e) => {
    e.preventDefault() // Prevent page refresh
    setLoading(true)

    // Call Supabase sign in method
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert(error.message) // Show error (e.g., "Invalid login credentials")
    } else {
      navigate('/') // Redirect to home/dashboard on success
    }
    setLoading(false)
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container">
          <div>
            <div className="bg-white shadow rounded mb-6">
              <div className="grid md:grid-cols-12">
                <div className="bg-white shadow-md p-12 rounded-s xl:col-span-5 md:col-span-6">
                  <div className="mb-12">
                    <Link to="/">
                      <img src={logoDark} alt="logo-img" className="h-8" width={126} height={32} />
                    </Link>
                  </div>
                  <h6 className="text-base/[1.6] font-semibold text-default-600 mb-0 mt-4">Welcome back!</h6>
                  <p className="text-default-500 text-sm/[1.6] mt-1 mb-6">Enter your email address and password to access admin panel.</p>

                  {/* 3. Attach handleLogin to onSubmit */}
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-default-600">
                        Email <small>*</small>
                      </label>
                      {/* 4. Bind value and onChange */}
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="mb-4">
                      <Link to="/auth/forget-pass" className="float-right text-default-500 text-xs border-b border-dashed pb-1 ms-1">
                        Forgot your password?
                      </Link>
                      <label htmlFor="password" className="block text-sm font-medium mb-1 text-default-600">
                        Password <small>*</small>
                      </label>
                      {/* 5. Bind value and onChange */}
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center mb-4">
                      <input id="remember" type="checkbox" className="shrink-0 border-default-400 rounded text-blue-600" />
                      <label htmlFor="remember" className="text-xs/none text-default-700 font-medium ms-3">
                        Remember me
                      </label>
                    </div>
                    <div className="mb-0 text-center">
                      {/* 6. Update button to show loading state */}
                      <button
                        className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md transition-all hover:shadow-lg disabled:opacity-50"
                        type="submit"
                        disabled={loading}>
                        {loading ? 'Logging in...' : 'Log In'}
                      </button>
                    </div>
                  </form>
                  {/* ... rest of your code ... */}
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
