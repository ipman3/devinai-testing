import { useState } from 'react'

interface Room {
  id: string
  title: string
  blurb: string
  images: string[]
  oldPrice: number
  newPrice: number
}

interface Hotel {
  name: string
  address: string
  discount: string
  heroImages: string[]
  description: string
  facilities: string[]
  amenities: string[]
  gallery: string[]
  rooms: Room[]
}

interface TabRoomTypeProps {
  hotel: Hotel
}

function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  )
}

function RoomCard({ room }: { room: Room }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === room.images.length - 1 ? 0 : prev + 1))
  }

  const handleBookNow = () => {
    alert(`Book room ${room.id}`)
  }

  const handleShowMore = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="mb-6">
      <div className="relative">
        <img
          src={room.images[imageIndex]}
          alt={room.title}
          className="w-full h-52 object-cover rounded-xl"
        />

        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/30 border border-white/50 flex items-center justify-center text-white hover:bg-white/50 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeftIcon />
        </button>

        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/30 border border-white/50 flex items-center justify-center text-white hover:bg-white/50 transition-colors"
          aria-label="Next image"
        >
          <ChevronRightIcon />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {imageIndex + 1}/{room.images.length}
        </div>
      </div>

      <div className="px-1 mt-3">
        <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
          {room.title}
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          {room.blurb}
        </p>

        {expanded && (
          <p className="text-sm text-slate-500 mt-2">
            Additional room details: This room features modern amenities, air conditioning, 
            flat-screen TV, minibar, and a private bathroom with complimentary toiletries.
          </p>
        )}

        <button
          onClick={handleShowMore}
          className="flex items-center gap-1 text-sm text-slate-600 mt-2 hover:text-slate-900 transition-colors"
        >
          <span>Show {expanded ? 'Less' : 'More'}</span>
          <span className={`transform transition-transform ${expanded ? 'rotate-180' : ''}`}>
            <ChevronDownIcon />
          </span>
        </button>

        <div className="mt-3">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            BEST AVAILABLE RATE
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-2">
            <span className="line-through text-slate-400 font-semibold text-sm">
              ${room.oldPrice.toFixed(2)}
            </span>
            <span className="text-[#FF5A3C] font-extrabold text-lg">
              ${room.newPrice.toFixed(2)}
            </span>
            <span className="text-slate-400 text-sm">/night</span>
          </div>

          <button
            onClick={handleBookNow}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B5A1E] text-white font-semibold text-sm hover:bg-[#5a4a18] transition-colors"
          >
            Book Now
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function TabRoomType({ hotel }: TabRoomTypeProps) {
  return (
    <div className="py-4">
      <h2 className="text-center text-lg font-bold text-slate-900 uppercase tracking-widest mb-4">
        ROOMS
      </h2>

      <div className="px-4">
        {hotel.rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}
