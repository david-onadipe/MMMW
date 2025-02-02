
import Hero from './hero/hero.jsx'
import Counselling from './counselling/counselling.jsx'
import Events from './events/events.jsx'
import Founder from './founder/founder.jsx'
import Testimonials from './testimonials/testimonials.jsx'
import Footer from '../../components/footer/footer.jsx'
import PinkDown from '../../components/Spacers/pink-spacer-down.jsx'
import WhiteDown from '../../components/Spacers/white-spacer-down.jsx'
import PurpleDown from '../../components/Spacers/purple-spacer-down.jsx'
import WhiteUp from '../../components/Spacers/white-spacer-up.jsx'

export default function Landingpage() {
  return(
    <div className='relative bg-pink'>
      <Hero/>
      
      
      <Counselling/>
      <Events/>
      <WhiteDown/>
      <Founder/>
      <Testimonials />
      <PurpleDown/>
      <Footer/>
    </div>
  );
}
