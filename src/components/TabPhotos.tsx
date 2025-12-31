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

interface TabPhotosProps {
  hotel: Hotel
}

export default function TabPhotos({ hotel }: TabPhotosProps) {
  const handlePhotoClick = (index: number) => {
    alert(`Open photo: ${index}`)
  }

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-3 gap-2">
        {hotel.gallery.map((photo, index) => (
          <button
            key={index}
            onClick={() => handlePhotoClick(index)}
            className="aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5A1E]"
          >
            <img
              src={photo}
              alt={`Gallery photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
