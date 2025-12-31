import { useState } from 'react'
import BottomNav from './BottomNav'
import TabOverview from './TabOverview'
import TabPhotos from './TabPhotos'
import TabRoomType from './TabRoomType'

const hotel = {
  name: 'Memoire Palace Resort & Spa',
  address: '026, Psar Kraoum Road Siem Reap, City 17252',
  discount: '50%OFF',
  heroImages: [
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  ],
  description:
    'Lorem ipsum dolor sit amet consectetur. Vel pharetra scelerisque mattis pretium suspendisse turpis lacinia. Massa eu nulla in sagittis ipsum aliquam pharetra turpis. Erat duis phasellus lorem tempor pharetra orci eros massa massa. Eget ac ornare sit mauris eget fermentum.',
  facilities: [
    'Free WiFi',
    'Airport shuttle',
    'Spa and wellness centre',
    'Meeting room',
    'Bar',
    'Fitness centre',
    'Swimming Pool',
    'Parking',
    'Playground',
    '60 rooms',
  ],
  amenities: [
    'Coffee Kit',
    'Free Wi-Fi Internet',
    'Bathrobes & Slippers',
    'Gym & Fitness center',
  ],
  gallery: [
    'https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551887373-6a42d4c0f4c1?auto=format&fit=crop&w=800&q=80',
  ],
  rooms: [
    {
      id: 'r1',
      title: 'TWIN VIEW ROOM',
      blurb:
        'Oceanfront rooms and studios offering unparalleled beachfront living.',
      images: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      ],
      oldPrice: 93,
      newPrice: 65,
    },
    {
      id: 'r2',
      title: 'DELUXE KING ROOM',
      blurb: 'Spacious deluxe room with modern décor and pool view.',
      images: [
        'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a77?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
      ],
      oldPrice: 120,
      newPrice: 89,
    },
  ],
}

type TabType = 'room' | 'overview' | 'photos'

function BackArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5 text-slate-400"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-40 bg-[#6B5A1E] h-14 px-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-2">
        <button className="p-1" aria-label="Go back">
          <BackArrowIcon />
        </button>
        <span className="font-semibold">{title}</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-1" aria-label="Info">
          <InfoIcon />
        </button>
        <button className="p-1" aria-label="Close">
          <CloseIcon />
        </button>
      </div>
    </header>
  )
}

function HeroSection({
  heroIndex,
  onPrev,
  onNext,
}: {
  heroIndex: number
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className="px-4 pt-4">
      <div className="relative">
        <img
          src={hotel.heroImages[heroIndex]}
          alt={hotel.name}
          className="w-full h-48 object-cover rounded-xl"
        />

        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 border border-white/50 flex items-center justify-center text-white hover:bg-white/50 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeftIcon />
        </button>

        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 border border-white/50 flex items-center justify-center text-white hover:bg-white/50 transition-colors"
          aria-label="Next image"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="mt-4">
        <span className="inline-block bg-[#FF5A3C] text-white font-bold text-sm px-4 py-2 rounded-full">
          {hotel.discount}
        </span>
      </div>

      <h1 className="mt-3 text-xl font-bold text-slate-900">{hotel.name}</h1>

      <div className="flex items-start gap-2 text-sm text-slate-500 mt-1">
        <LocationIcon />
        <span>{hotel.address}</span>
      </div>
    </div>
  )
}

function TabSwitcher({
  activeTab,
  onTabChange,
}: {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}) {
  const tabs: { key: TabType; label: string }[] = [
    { key: 'room', label: 'Room Type' },
    { key: 'overview', label: 'Overview' },
    { key: 'photos', label: 'Photos' },
  ]

  return (
    <div className="px-4 mt-4">
      <div className="flex rounded-lg border border-slate-200 overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              activeTab === tab.key
                ? 'bg-[#6B5A1E] text-white'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function HotelDetailPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [heroIndex, setHeroIndex] = useState(0)

  const handlePrevHero = () => {
    setHeroIndex((prev) =>
      prev === 0 ? hotel.heroImages.length - 1 : prev - 1
    )
  }

  const handleNextHero = () => {
    setHeroIndex((prev) =>
      prev === hotel.heroImages.length - 1 ? 0 : prev + 1
    )
  }

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'room':
        return 'Room Type'
      case 'overview':
        return 'Overview'
      case 'photos':
        return 'Photo Gallery'
      default:
        return 'Overview'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Header title={getHeaderTitle()} />

      <main className="max-w-md mx-auto">
        <HeroSection
          heroIndex={heroIndex}
          onPrev={handlePrevHero}
          onNext={handleNextHero}
        />

        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'overview' && <TabOverview hotel={hotel} />}
        {activeTab === 'photos' && <TabPhotos hotel={hotel} />}
        {activeTab === 'room' && <TabRoomType hotel={hotel} />}
      </main>

      <BottomNav active="home" onChange={() => {}} />
    </div>
  )
}
