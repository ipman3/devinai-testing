interface Hotel {
  name: string
  address: string
  discount: string
  heroImages: string[]
  description: string
  facilities: string[]
  amenities: string[]
  gallery: string[]
  rooms: {
    id: string
    title: string
    blurb: string
    images: string[]
    oldPrice: number
    newPrice: number
  }[]
}

interface TabOverviewProps {
  hotel: Hotel
}

function WifiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  )
}

function ShuttleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}

function SpaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M12 22c-4.97 0-9-2.24-9-5v-.5c0-1.38.56-2.63 1.46-3.54A5.02 5.02 0 0 1 8 11.5c0-1.38-.56-2.63-1.46-3.54A5.02 5.02 0 0 1 3 4.5V4c0-2.76 4.03-5 9-5s9 2.24 9 5v.5c0 1.38-.56 2.63-1.46 3.54A5.02 5.02 0 0 1 16 11.5c0 1.38.56 2.63 1.46 3.54A5.02 5.02 0 0 1 21 18.5v.5c0 2.76-4.03 5-9 5z" />
    </svg>
  )
}

function MeetingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function BarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M8 22h8" />
      <path d="M12 11v11" />
      <path d="m19 3-7 8-7-8Z" />
    </svg>
  )
}

function FitnessIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M6.5 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
      <path d="M2 21h20" />
      <path d="M18 21V8a2 2 0 0 0-2-2h-1" />
      <path d="M6 21V8a2 2 0 0 1 2-2h1" />
    </svg>
  )
}

function PoolIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M2 12h20" />
      <path d="M2 16h20" />
      <path d="M2 20h20" />
      <path d="M6 8v4" />
      <path d="M18 8v4" />
    </svg>
  )
}

function ParkingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
}

function PlaygroundIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  )
}

function RoomsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function CoffeeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  )
}

function RobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18" />
      <path d="M10 22V10h4v12" />
    </svg>
  )
}

function GymIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
      <path d="M6.5 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
      <path d="M2 21h20" />
      <path d="M18 21V8a2 2 0 0 0-2-2h-1" />
      <path d="M6 21V8a2 2 0 0 1 2-2h1" />
    </svg>
  )
}

const facilityIcons: Record<string, () => React.ReactNode> = {
  'Free WiFi': WifiIcon,
  'Airport shuttle': ShuttleIcon,
  'Spa and wellness centre': SpaIcon,
  'Meeting room': MeetingIcon,
  'Bar': BarIcon,
  'Fitness centre': FitnessIcon,
  'Swimming Pool': PoolIcon,
  'Parking': ParkingIcon,
  'Playground': PlaygroundIcon,
  '60 rooms': RoomsIcon,
}

const amenityIcons: Record<string, () => React.ReactNode> = {
  'Coffee Kit': CoffeeIcon,
  'Free Wi-Fi Internet': WifiIcon,
  'Bathrobes & Slippers': RobeIcon,
  'Gym & Fitness center': GymIcon,
}

export default function TabOverview({ hotel }: TabOverviewProps) {
  return (
    <div className="px-4 py-4 space-y-6">
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-2">Description</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {hotel.description}
        </p>
      </div>

      <div>
        <h3 className="text-base font-bold text-slate-900 mb-3">Facilities</h3>
        <div className="grid grid-cols-2 gap-2">
          {hotel.facilities.map((facility, index) => {
            const IconComponent = facilityIcons[facility] || WifiIcon
            return (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                <IconComponent />
                <span>{facility}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="text-base font-bold text-slate-900 mb-3">Amenities</h3>
        <div className="grid grid-cols-2 gap-2">
          {hotel.amenities.map((amenity, index) => {
            const IconComponent = amenityIcons[amenity] || CoffeeIcon
            return (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                <IconComponent />
                <span>{amenity}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
