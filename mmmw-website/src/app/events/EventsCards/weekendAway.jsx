import Image from 'next/image';
import weekendImage from '../../../../public/img/Conservatorium-Hotel-Romance-Suite-4.jpg';

export default function WeekendAway() {
  return(
    <div className='w-full px-10 mx-auto'>     
        <div className='flex flex-col w-full'>
            <h1 className='text-white mt-10 mb-10 text-4xl md:text-6xl text-center'>Extraordinary Love Weekend Away</h1>
            <div className='flex flex-col md:flex-row w-full gap-5 md:gap-10'>
              <div className='relative w-full min-h-[200px] xs:min-h-[300px] sm:max-w-[500px] mx-auto'>
                <Image
                  className='rounded-xl shadow-2xl'
                  src={weekendImage}
                  alt="Weekend Away"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className='flex flex-col w-full text-white text-center md:text-left gap-5'>
                <h2 className='text-3xl font-bold'> A Weekend of Romance and Connection. </h2>
                <p className='text-lg'> MMMW's Weekend Away is a luxurious celebration of love, growth, and connection. Held every Valentine's weekend at a premium hotel, this three-day retreat offers couples the chance to reconnect, rebuild, and reignite their bond. Enjoy an elegant dinner and dance, intimate moments with other couples, and inspiring guest speakers who share invaluable insights into building not only lasting love but a thriving life together.  </p>
              </div>
            </div>
            <a target='_blank' href="https://www.eventbrite.com/cc/mmmw-weekend-away-3918453" className='bg-pink font-bold text-darkpurple text-center rounded-xl p-3 text-base md:text-2xl max-w-[250px] w-full mx-auto mt-10 hover:shadow-2xl shadow-xl hover:underline hover:decoration-solid hover:decoration-2'> Attend Now </a>
            
        </div>
        <div>
        </div>

    </div>
  );
}