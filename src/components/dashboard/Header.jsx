import { useState, useEffect } from 'react'
import logodark from '@/assets/images/logo-dark.png'
import logolight from '@/assets/images/logo-light.png'
import Icon from '@/components/wrappers/Icon'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { supabase } from '@/supabaseClient'

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [userProfile, setUserProfile] = useState({ name: 'User', avatar: null })

  useEffect(() => {
    const getUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase.from('profiles').select('full_name, avatar_url, role').eq('id', user.id).single()

        if (data) {
          setUserProfile({ name: data.full_name, avatar: data.avatar_url })
          setIsAdmin(data.role === 'admin') // Assumes you have a 'role' column
        }
      }
    }
    getUserData()
  }, [])

  return (
    <>
      <header className="fixed top-0 inset-x-0 flex items-center z-40 w-full bg-white border-b border-default-200 transition-all py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Branding / Logo */}
            <Link to="/account/dashboard" className="flex items-center gap-2">
              <img src={logodark} className="h-8 w-auto" alt="IPB Finance Club" />
              <span className="hidden sm:block font-bold text-lg text-default-900">IPB Finance Club</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                <li>
                  <Link to="/account/dashboard" className="flex items-center font-medium text-default-700 hover:text-primary transition-all">
                    <Icon icon="solar:notes-bold-duotone" className="size-5 me-1.5" />
                    Posts
                  </Link>
                </li>
                <li>
                  <Link to="/account/setting" className="flex items-center font-medium text-default-700 hover:text-primary transition-all">
                    <Icon icon="solar:user-bold-duotone" className="size-5 me-1.5" />
                    Profile
                  </Link>
                </li>
                {isAdmin && (
                  <li>
                    <Link to="/account/members" className="flex items-center font-medium text-default-700 hover:text-primary transition-all">
                      <Icon icon="solar:users-group-two-rounded-bold-duotone" className="size-5 me-1.5" />
                      Members
                    </Link>
                  </li>
                )}
                <li>
                  <LogoutButton />
                </li>
              </ul>
            </div>
            <button type="button" className="lg:hidden p-2 text-default-500" data-hs-overlay="#adminMobileMenu">
              <FaBars className="text-xl" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        id="adminMobileMenu"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e border-default-200"
        role="dialog"
        tabIndex={-1}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between border-b border-default-200">
            <span className="font-bold text-primary">IPB Finance Club</span>
            <button type="button" className="p-2 text-default-500" data-hs-overlay="#adminMobileMenu">
              <FaXmark className="text-xl" />
            </button>
          </div>

          <div className="p-4 flex-grow">
            <ul className="space-y-2">
              <li>
                <Link to="/account/dashboard" className="flex items-center p-3 rounded-lg text-default-700 hover:bg-default-100">
                  <Icon icon="solar:notes-bold-duotone" className="size-5 me-3" /> Posts
                </Link>
              </li>
              <li>
                <Link to="/account/setting" className="flex items-center p-3 rounded-lg text-default-700 hover:bg-default-100">
                  <Icon icon="solar:user-bold-duotone" className="size-5 me-3" /> Profile
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link to="/account/members" className="flex items-center p-3 rounded-lg text-default-700 hover:bg-default-100">
                    <Icon icon="solar:users-group-two-rounded-bold-duotone" className="size-5 me-3" /> Members
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="p-4 border-t border-default-200">
            <LogoutButton className="w-full flex items-center justify-center gap-2 p-3 bg-red-50 text-red-600 rounded-lg font-medium" />
          </div>
        </div>
      </div>
    </>
  )
}

const LogoutButton = ({ className }) => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/auth/login')
  }

  return (
    <button onClick={handleLogout} className={className || 'w-full flex items-center gap-2 p-2 rounded hover:bg-red-50 text-sm text-red-600'}>
      <Icon icon="tabler:logout" className="size-4" />
      <span>Logout</span>
    </button>
  )
}

export default Header
