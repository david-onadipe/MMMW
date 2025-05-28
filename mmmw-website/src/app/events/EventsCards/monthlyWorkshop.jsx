import Image from 'next/image';
import workshopImage from '../../../../public/img/Conservatorium-Hotel-Romance-Suite-4.jpg';

export default function MonthlyWorkshop() {
  return(
    <div className='w-full px-10 mx-auto'>     
        <div className='flex flex-col w-full'>
            <h1 className='text-white mt-10 mb-10 text-4xl md:text-6xl text-center'>Monthly Workshop</h1>
            <div className='flex flex-col md:flex-row-reverse w-full gap-5 md:gap-10'>
              <div className='relative w-full min-h-[200px] xs:min-h-[300px] sm:max-w-[500px] mx-auto'>
                <Image
                  className='rounded-xl shadow-2xl'
                  src={workshopImage}
                  alt="Monthly Workshop"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              

              <div className='flex flex-col w-full text-white text-center md:text-left gap-5'>
                <h2 className='text-3xl font-bold'> Because Love Needs Maintenance Too. </h2>
                <p className='text-lg' > MMMW's Monthly Workshop is a vibrant, interactive space for couples and singles who are passionate about building and sustaining love. Each month features a unique theme, with expert guest speakers and host Kemi Onadipe guiding the conversation. Whether you're in a relationship or single and ready to mingle, this is your chance to learn, laugh, and grow alongside like-minded people, while having fun and deepening your understanding of love.</p>
              </div>
            </div>
            <a target='_blank' href="https://www.eventbrite.com/cc/mmmw-monthly-workshop-3918423" className='bg-pink font-bold text-darkpurple text-center rounded-xl p-3 text-base md:text-2xl max-w-[250px] w-full mx-auto mt-10 hover:shadow-2xl shadow-xl hover:underline hover:decoration-solid hover:decoration-2'> Attend Now </a>
            
        </div>
        <div>
        </div>

    </div>
  );
}