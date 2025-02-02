import WeekendAway from "./EventsCards/weekendAway";
import MonthlyWorkshop from "./EventsCards/monthlyWorkshop";

export default function Eventspage() {
  return(
    <div className='w-full bg-purple  pb-20'>
      <div className='max-w-[1500px] mx-auto'>
        
        <div className='flex flex-col gap-10 pt-20'>
          <WeekendAway/>
          <MonthlyWorkshop/>
        </div>
        



      </div>

    </div>
  );
}