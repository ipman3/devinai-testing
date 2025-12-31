interface BookingQrCardProps {
  hotelName: string
  bookingRef: string
  checkIn: string
  checkOut: string
  qrSrc: string
}

export default function BookingQrCard({
  hotelName,
  bookingRef,
  checkIn,
  checkOut,
  qrSrc,
}: BookingQrCardProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">
            Booking Detail
          </h1>

          <div className="divide-y divide-slate-200">
            <div className="flex justify-between items-start py-4 first:pt-0">
              <div className="text-slate-700">
                <div className="font-medium">Hotel Name:</div>
                <div className="text-sm text-slate-400">{bookingRef}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-slate-900">{hotelName}</div>
              </div>
            </div>

            <div className="flex justify-between items-center py-4">
              <div className="text-slate-700 font-medium">Check-In date:</div>
              <div className="font-bold text-slate-900">{checkIn}</div>
            </div>

            <div className="flex justify-between items-center py-4 last:pb-0">
              <div className="text-slate-700 font-medium">Check-Out date:</div>
              <div className="font-bold text-slate-900">{checkOut}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8 leading-tight">
            Scan QR code below to
            <br />
            see booking detail.
          </h2>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72">
              <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-[#8B6B2E]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-[#8B6B2E]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-[#8B6B2E]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-[#8B6B2E]" />
            </div>

            <div className="border-2 border-[#8B6B2E] p-2 bg-white">
              <img
                src={qrSrc}
                alt="Booking QR"
                className="w-56 h-56 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
