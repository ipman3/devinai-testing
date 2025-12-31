import BookingConfirmationPage from "@/components/BookingConfirmationPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/BookingConfirmed")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BookingConfirmationPage />;
}
