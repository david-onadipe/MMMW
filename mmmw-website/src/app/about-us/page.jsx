import TeamSection from "./TeamSection/team";
import Corevalues from "./CoreValues"
import PurpleDown from "../../components/Spacers/purple-spacer-down";

export default function AboutUs() {
  return(
    <div className='w-full bg-purple h-fit flex flex-col'>
      <div className='max-w-[1500px] mx-auto flex flex-col'>
        <div className='flex flex-col gap-3 w-full justify-center p-5 '>
          <div className='flex w-full justify-center text-white text-center text-4xl md:text-5xl font-bold mt-14 overflow-hidden py-2'>Our Philosophy</div>
          <div className='flex w-full justify-center text-white mx-auto text-center text-lg md:text-2xl max-w-[1200px] overflow-hidden  '>Marriage is a serious promise, not a casual arrangement. We believe every marriage is worth fighting for, no matter what challenges come up. Many pressures try to pull couples apart, but we refuse to give in to conflict, outside voices, or easy shortcuts. <br/><br/>
          With hard work, open communication, resilience, and practical support, couples can overcome obstacles and stay strong.
          </div>
        </div>

        
        {/* <Corevalues/> */}
        <TeamSection/>
        


      </div>

    </div>
  );
}