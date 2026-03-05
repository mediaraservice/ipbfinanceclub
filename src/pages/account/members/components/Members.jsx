import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/wrappers/Icon'

const MembersList = () => {
  const navigate = useNavigate()
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    checkAdminAndFetch()
  }, [])

  const checkAdminAndFetch = async () => {
    setLoading(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      navigate('/login')
      return
    }

    // Cek apakah user adalah admin
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()

    if (profile?.role !== 'admin') {
      alert('Akses Ditolak: Halaman ini hanya untuk Admin.')
      navigate('/account/dashboard')
      return
    }

    setIsAdmin(true)
    fetchMembers()
  }

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, avatar_url, role, is_approved')
      .order('full_name', { ascending: true })

    if (!error) {
      setMembers(data)
    }
    setLoading(false)
  }

  // Fungsi untuk toggle is_approved
  const handleToggleApproved = async (userId, currentStatus) => {
    const { error } = await supabase.from('profiles').update({ is_approved: !currentStatus }).eq('id', userId)

    if (error) {
      alert('Gagal mengubah status: ' + error.message)
    } else {
      // Update state lokal agar tampilan langsung berubah
      setMembers(members.map((m) => (m.id === userId ? { ...m, is_approved: !currentStatus } : m)))
    }
  }

  const filtered = members.filter((m) => m.full_name?.toLowerCase().includes(search.toLowerCase()))

  if (loading && !isAdmin) return <div className="p-20 text-center">Checking Permissions...</div>

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-default-900">Member Approval</h1>
          <p className="text-default-500">Approve atau blokir akses posting member.</p>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Cari nama member..."
            className="w-full border-2 border-default-200 rounded-xl p-3 ps-10 outline-none focus:border-default-900"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Icon icon="tabler:search" className="absolute left-3 top-3.5 size-5 text-default-400" />
        </div>
      </div>

      <div className="space-y-4">
        {loading ? (
          <p className="text-center py-10">Loading members...</p>
        ) : filtered.length > 0 ? (
          filtered.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4 border-2 border-default-100 rounded-2xl hover:border-default-200 transition-all bg-white">
              <div className="flex items-center gap-4">
                <img src={member.avatar_url || 'https://via.placeholder.com/150'} className="size-12 rounded-xl object-cover bg-gray-100" alt="" />
                <div>
                  <h4 className="font-bold text-default-900">{member.full_name || 'Anonymous'}</h4>
                  <div className="flex gap-2 items-center">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase ${member.role === 'admin' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                      {member.role || 'No Role'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right mr-2">
                  <p className="text-xs font-bold text-default-400 uppercase">Status</p>
                  <p className={`text-sm font-black ${member.is_approved ? 'text-green-500' : 'text-red-500'}`}>
                    {member.is_approved ? 'APPROVED' : 'PENDING'}
                  </p>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => handleToggleApproved(member.id, member.is_approved)}
                  className={`p-2 px-4 rounded-xl font-bold text-sm transition-all ${
                    member.is_approved ? 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white' : 'bg-green-600 text-white hover:bg-green-700'
                  }`}>
                  {member.is_approved ? 'Revoke' : 'Approve'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-10 text-default-400">Tidak ada member ditemukan.</p>
        )}
      </div>
    </div>
  )
}

export default MembersList
