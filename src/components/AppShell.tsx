import { useState } from 'react'
import BottomNav from './BottomNav'
import HomeScreen from './HomeScreen'

type NavItem = 'home' | 'booking' | 'faqs' | 'profile'

export default function AppShell() {
  const [activeNav, setActiveNav] = useState<NavItem>('home')

  return (
    <>
      {activeNav === 'home' && <HomeScreen />}
      {activeNav === 'booking' && (
        <div className="min-h-screen bg-slate-50 pb-24 flex items-center justify-center">
          <p className="text-slate-500">Booking page coming soon</p>
        </div>
      )}
      {activeNav === 'faqs' && (
        <div className="min-h-screen bg-slate-50 pb-24 flex items-center justify-center">
          <p className="text-slate-500">FAQs page coming soon</p>
        </div>
      )}
      {activeNav === 'profile' && (
        <div className="min-h-screen bg-slate-50 pb-24 flex items-center justify-center">
          <p className="text-slate-500">Profile page coming soon</p>
        </div>
      )}
      <BottomNav active={activeNav} onChange={setActiveNav} />
    </>
  )
}
