import BookingQrCard from '@/components/BookingQrCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demo/detail')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BookingQrCard bookingRef='dasd' checkIn='0e2384623' checkOut='2378463242' hotelName='wwww' qrSrc='https://miro.medium.com/v2/resize:fit:960/1*R6P_gSp95YuL-FVtjh6J_A.png' key={1} />
}
