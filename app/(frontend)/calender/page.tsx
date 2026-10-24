import UpperSection from "@/components/sections/Calender/uppersection";
import UpcomingEvents from "@/components/sections/Calender/UpcomingEvents";
import PastEvents from "@/components/sections/Calender/Pastevents";
import Upcomingprogram from "@/components/sections/Calender/Upcomingprogram";
import Featuredprogram from "@/components/sections/Calender/Featuredprogram";
import Programmes from "@/components/sections/Calender/Programmes";


export default function CalenderPage() {
  return (
    <>
      <UpperSection />
      <Upcomingprogram />
      <Programmes />
      <UpcomingEvents />
      <PastEvents />
      <Featuredprogram />
    </>
  );
}