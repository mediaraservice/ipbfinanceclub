import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import PostsList from './PostsList'

export default function Posts() {
  const [isApproved, setIsApproved] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkStatus = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setChecking(false)
        return
      }

      // Change .single() to .maybeSingle()
      const { data, error } = await supabase.from('profiles').select('is_approved').eq('id', user.id).maybeSingle()

      if (error) {
        console.error('Database error:', error.message)
      } else if (!data) {
        // This means the user is logged in but has NO row in the 'profiles' table
        console.warn('No profile found for this user ID. Checking if trigger ran...')
        setIsApproved(false)
      } else {
        setIsApproved(data.is_approved)
      }

      setChecking(false)
    }

    checkStatus()
  }, [])

  if (checking) return <p>Checking permissions...</p>

  if (!isApproved) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold text-red-500">Access Denied</h2>
        <p>Your account is pending admin approval. You cannot create posts yet.</p>
      </div>
    )
  }

  return <PostsList />
  
  // ... rest of your CreatePost form code from earlier ...
}
