import Aos from 'aos'
import { useEffect, useState } from 'react' // Added useState
import { supabase } from '@/supabaseClient' // Import your client
import AllRoutes from './routes/Routes'
import AppProviders from './components/wrappers/AppProviders'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'jarallax/dist/jarallax.min.css'
import 'swiper/swiper-bundle.css'
import '@/assets/css/style.css'

function App() {
  // 1. Create a state to hold the user session
  const [session, setSession] = useState(null)

  useEffect(() => {
    Aos.init()

    // 2. Get existing session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // 3. Listen for changes (Sign in, Sign out, Token Refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    // 4. Cleanup subscription on component unmount
    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      <AppProviders>
        {/* Pass the session down if your routes need to check auth, 
          or use a Context Provider (often inside AppProviders) 
        */}
        <AllRoutes session={session} />
      </AppProviders>
    </>
  )
}

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUser = async () => {
      // 1. Get the session from local storage/Supabase
      const {
        data: { session },
      } = await supabase.auth.getSession()

      // 2. If session exists, set the user; otherwise, it remains null
      setUser(session?.user ?? null)
    }

    checkUser()
  }, [])

  return <div>{user ? `Logged in as: ${user.email}` : 'Not logged in'}</div>
}

export default App
