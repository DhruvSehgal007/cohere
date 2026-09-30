import UpperSection from "@/components/sections/Calender/uppersection";
import UpcomingEvents from "@/components/sections/Calender/UpcomingEvents";
import PastEvents from "@/components/sections/Calender/Pastevents";

export default function CalenderPage() {
  return (
    <>
      <UpperSection />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}