import HotelDetailPage from "@/components/HotelDetailPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hotel-detail")({
  component: RouteComponent,
});

function RouteComponent() {
  return <HotelDetailPage />;
}
