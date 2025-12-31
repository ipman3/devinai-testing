const properties = [
  {
    id: 'p1',
    name: 'Memoire Palace Resort & Spa',
    address: '54 Sivuth Blv st, Central area Siem Reap, City 17355',
    discountLabel: '50% OFF',
    oldPrice: 60,
    newPrice: 30,
    imageUrl:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p2',
    name: "Memoire D'Angkor Boutique Hotel",
    address: '54 Sivuth Blv st, Central area Siem Reap, City 17355',
    discountLabel: '50% OFF',
    oldPrice: 60,
    newPrice: 30,
    imageUrl:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p3',
    name: 'Memoire Siem Reap Hotel',
    address: '54 Sivuth Blv st, Central area Siem Reap, City 17355',
    discountLabel: '50% OFF',
    oldPrice: 60,
    newPrice: 30,
    imageUrl:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
  },
]

const searchState = {
  dateRange: 'Wed 17 Dec - Thu 18 Dec',
  guestsText: '1 room · 2 adults · 0 children',
}

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

function CalendarIcon() {
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
      className="text-slate-500"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function UsersIcon() {
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
      className="text-slate-500"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ChevronDownIcon() {
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
      className="text-slate-400"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
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

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#6B5A1E] h-14 px-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-2">
        <button className="p-1" aria-label="Go back">
          <BackArrowIcon />
        </button>
        <span className="font-semibold text-sm">Memoire Hotels & Resorts</span>
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

function GreetingSection() {
  return (
    <div className="px-4 pt-4 pb-3">
      <p className="text-sm text-slate-500">Hello James, 👋</p>
      <h1 className="text-lg font-extrabold text-slate-900 mt-1">
        3 Hotels in Siem Reap – Save up to 50% Off!
      </h1>
    </div>
  )
}

function PromoBanner() {
  return (
    <div className="px-4">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
          alt="Promotional banner for hotel deals"
          className="w-full h-40 object-cover"
        />
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
          </div>
          <span className="text-xs text-slate-400">
            Terms & Conditions may Apply
          </span>
        </div>
      </div>
    </div>
  )
}

function SearchInputs() {
  return (
    <div className="px-4 space-y-3 mt-4">
      <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3">
        <CalendarIcon />
        <span className="text-sm text-slate-700">{searchState.dateRange}</span>
      </div>

      <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3">
        <div className="flex items-center gap-3">
          <UsersIcon />
          <span className="text-sm text-slate-700">{searchState.guestsText}</span>
        </div>
        <ChevronDownIcon />
      </div>

      <button className="w-full py-3 rounded-lg bg-[#6B5A1E] text-white font-semibold hover:bg-[#5a4a18] transition-colors">
        Search
      </button>
    </div>
  )
}

function PropertyCard({
  property,
}: {
  property: (typeof properties)[number]
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <div className="relative">
        <img
          src={property.imageUrl}
          alt={property.name}
          className="h-44 w-full object-cover rounded-xl"
        />
        <span className="absolute top-3 left-3 bg-[#FF5A3C] text-white font-bold text-sm px-3 py-2 rounded-md">
          {property.discountLabel}
        </span>
      </div>

      <h3 className="mt-3 text-base font-bold text-slate-900">
        {property.name}
      </h3>

      <div className="flex items-start gap-2 text-sm text-slate-500 mt-1">
        <LocationIcon />
        <span>{property.address}</span>
      </div>

      <div className="flex items-center justify-between mt-3">
        <button className="px-5 py-2 rounded-lg bg-[#6B5A1E] text-white font-semibold text-sm hover:bg-[#5a4a18] transition-colors">
          Book Now
        </button>
        <div className="text-right">
          <span className="line-through text-slate-400 font-semibold text-sm">
            ${property.oldPrice.toFixed(2)}
          </span>{' '}
          <span className="text-[#FF5A3C] font-extrabold text-lg">
            ${property.newPrice.toFixed(2)}
          </span>
          <span className="text-slate-400 text-sm">/night</span>
        </div>
      </div>
    </div>
  )
}

function PropertiesSection() {
  return (
    <div className="mt-4">
      <h2 className="px-4 pt-4 pb-2 text-base font-bold text-slate-900">
        Properties
      </h2>
      <div className="px-4 space-y-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Header />
      <main className="max-w-md mx-auto">
        <GreetingSection />
        <PromoBanner />
        <SearchInputs />
        <PropertiesSection />
      </main>
    </div>
  )
}
