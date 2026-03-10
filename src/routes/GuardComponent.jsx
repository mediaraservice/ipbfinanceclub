import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom' // <--- HARUS ADA INI
import { supabase } from '@/supabaseClient'

// Pembungkus untuk rute yang butuh LOGIN
export const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="p-10 text-center">Loading...</div>

  // Jika tidak ada session, arahkan ke /auth/login (sesuai route kamu)
  return session ? children : <Navigate to="/auth/login" replace />
}

// Pembungkus untuk rute yang dilarang jika SUDAH LOGIN
export const GuestRoute = ({ children }) => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="p-10 text-center">Loading...</div>

  // Jika sudah login, arahkan ke dashboard
  return !session ? children : <Navigate to="/account/dashboard" replace />
}
