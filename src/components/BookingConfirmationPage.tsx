const booking = {
  bookingId: 'MRH00838322',
  status: 'Confirmed',
  hotelName: 'Memoire Palace Resort & Spa',
  address: '026, Psar Kraoum Road Siem Reap, City 17252',
  hotelImage:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  checkIn: {
    date: 'Saturday, Nov 6, 2025',
    time: 'From 2:00pm',
  },
  checkOut: {
    date: 'Monday, Nov 8, 2025',
    time: 'Until 12:00 PM',
  },
  roomType: 'Junior Garden Suite',
  adults: '2 guests',
  children: '0 child',
  rooms: '1 Room',
  totalAmount: '$93.00',
  paymentMethod: 'ABA PAY',
  paymentStatus: 'Done',
  qrSrc:
    'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://example.com/booking/MRH00838322',
  support: {
    phone: '(855) 69 285 888',
    email: 'reservation@memoirepalace.com',
  },
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
      className="flex-shrink-0 mt-0.5"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function DownloadIcon() {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function PhoneIcon() {
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
      className="text-[#6B5A1E]"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon() {
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
      className="text-[#6B5A1E]"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#6B5A1E] h-14 px-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-2">
        <button className="p-1" aria-label="Go back">
          <BackArrowIcon />
        </button>
        <span className="font-semibold">Booking Confirmation</span>
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

function BookingConfirmationCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <h2 className="text-lg font-bold text-[#6B5A1E] mb-3">
        Booking Confirmation
      </h2>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-700">Booking ID:</div>
          <div className="text-sm text-slate-500">{booking.bookingId}</div>
        </div>
        <span className="px-4 py-2 rounded-full bg-yellow-100 text-slate-700 font-semibold text-sm">
          {booking.status}
        </span>
      </div>
    </div>
  )
}

function HotelInformationCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <h2 className="text-lg font-bold text-[#6B5A1E] mb-3">
        Hotel Information
      </h2>
      <img
        src={booking.hotelImage}
        alt="Memoire Palace Resort & Spa pool view"
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="mt-3 text-base font-bold text-slate-900">
        {booking.hotelName}
      </h3>
      <div className="flex items-start gap-2 text-sm text-slate-500 mt-1">
        <LocationIcon />
        <span>{booking.address}</span>
      </div>
    </div>
  )
}

function BookingDetailCard() {
  const rows = [
    {
      label: 'Check-In',
      subtext: booking.checkIn.time,
      value: booking.checkIn.date,
    },
    {
      label: 'Check-Out',
      subtext: booking.checkOut.time,
      value: booking.checkOut.date,
    },
    { label: 'Room Type', value: booking.roomType },
    { label: 'Adults', value: booking.adults },
    { label: 'Children', value: booking.children },
    { label: 'Room', value: booking.rooms },
  ]

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <h2 className="text-lg font-bold text-[#6B5A1E] mb-2">Booking Detail</h2>
      <div className="divide-y divide-slate-200">
        {rows.map((row, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
          >
            <div>
              <div className="text-sm font-semibold text-slate-700">
                {row.label}
              </div>
              {row.subtext && (
                <div className="text-xs text-slate-400">{row.subtext}</div>
              )}
            </div>
            <div className="text-sm font-semibold text-slate-700 text-right">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PaymentInformationCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <h2 className="text-lg font-bold text-[#6B5A1E] mb-2">
        Payment Information
      </h2>
      <div className="divide-y divide-slate-200">
        <div className="flex items-center justify-between py-3 first:pt-0">
          <div className="text-sm font-semibold text-slate-700">
            Total Amount
          </div>
          <div className="text-sm font-bold text-slate-900">
            {booking.totalAmount}
          </div>
        </div>
        <div className="flex items-center justify-between py-3">
          <div className="text-sm font-semibold text-slate-700">
            Payment Method
          </div>
          <div className="text-sm font-semibold text-slate-700">
            {booking.paymentMethod}
          </div>
        </div>
        <div className="flex items-center justify-between py-3 last:pb-0">
          <div className="text-sm font-semibold text-slate-700">
            Payment Status
          </div>
          <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
            {booking.paymentStatus}
          </span>
        </div>
      </div>
    </div>
  )
}

function QRCodeCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <h2 className="text-lg font-bold text-[#6B5A1E] mb-4">QR Code</h2>

      <div className="relative flex items-center justify-center">
        <div className="absolute w-64 h-64">
          <div className="absolute top-0 left-0 w-6 h-6 border-l-3 border-t-3 border-[#6B5A1E]" style={{ borderLeftWidth: '3px', borderTopWidth: '3px' }} />
          <div className="absolute top-0 right-0 w-6 h-6 border-r-3 border-t-3 border-[#6B5A1E]" style={{ borderRightWidth: '3px', borderTopWidth: '3px' }} />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-3 border-b-3 border-[#6B5A1E]" style={{ borderLeftWidth: '3px', borderBottomWidth: '3px' }} />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-3 border-b-3 border-[#6B5A1E]" style={{ borderRightWidth: '3px', borderBottomWidth: '3px' }} />
        </div>

        <div className="border border-[#6B5A1E] p-2 bg-white">
          <img
            src={booking.qrSrc}
            alt="Booking QR Code"
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>

      <button className="w-full mt-6 py-3 rounded-lg bg-[#6B5A1E] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#5a4a18] transition-colors">
        <DownloadIcon />
        Download QR Code
      </button>
    </div>
  )
}

function NeedHelpSection() {
  return (
    <div className="mt-4">
      <h2 className="text-base font-bold text-slate-900 mb-3 px-1">
        Need Help?
      </h2>
      <div className="bg-[#FFF8E7] rounded-xl border border-slate-200 shadow-sm p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-16 h-12 flex items-center justify-center">
              <span className="text-3xl">👩‍💼</span>
              <span className="text-xl -ml-2">❓</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-slate-900 mb-2">
              Contact our support team
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
              <PhoneIcon />
              <span>{booking.support.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <EmailIcon />
              <span>{booking.support.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-md mx-auto py-4 px-4 space-y-4">
        <BookingConfirmationCard />
        <HotelInformationCard />
        <BookingDetailCard />
        <PaymentInformationCard />
        <QRCodeCard />
        <NeedHelpSection />
      </main>
    </div>
  )
}
