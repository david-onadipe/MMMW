import WhiteUp from "../../../components/Spacers/white-spacer-up";


export default function Counselling() {
  

  return(
    <div id="counsel-sect-cont" className='w-full relative bg-purple z-50'>
      
      
      <div className='max-w-[1500px]  px-10 flex flex-col mx-auto'>
        <div className='flex flex-col pb-11 pt-4 gap-5'>
          <div id="counsel-sect-title" className='mx-auto mt-6 text-center text-2xl md:text-4xl font-bold text-white md:mt-6'>
            The Quiet Strength of Counselling
          </div>
          <div id="counsel-sect-subtitle" className='mx-auto  text-lg text-pink xs:px-[30px] md:px-[100px] text-center font-bold'>
            Explore the significance of counseling in promoting mental health,
            emotional well-being, and personal growth.
          </div>
        </div>
        <div id="counsel-sect-items" className=' grid grid-cols-2 gap-[10px] xs:gap-[30px] md:gap-[70px] lg:gap-[40px] lg2:gap-[70px] mx-auto lg:flex lg:justify-between '>
          
          <a href=' https://calendly.com/kemie72/couples' target='_blank' className='relative hover:drop-shadow-2xl rounded-xl bg-purple h-[120px] w-[120px] xs:h-[130px] xs:w-[130px] sm:h-[150px] sm:w-[150px] md:h-60 md:w-60 lg:h-[200px] lg:w-[200px] xl:h-60 xl:w-60 '>
          <div id='counsel-card-gradient' className='h-20 rounded-xl absolute bottom-0 left-0 right-0 w-full text-center'> <p className='absolute bottom-5 left-0 right-0 w-full font-bold text-white text-base md:text-xl px-2 '>Couples Counseling</p>
          </div>
          <img src="./public/img/happycouple.jpg" alt="" className='rounded-xl' />
          </a>
          
          <a href=' https://calendly.com/kemie72/singles' target='_blank' className='relative hover:drop-shadow-2xl rounded-xl bg-purple h-[120px] w-[120px] xs:h-[130px] xs:w-[130px] sm:h-[150px] sm:w-[150px] md:h-60 md:w-60 lg:h-[200px] lg:w-[200px] xl:h-60 xl:w-60 '>
          <div id='counsel-card-gradient' className='h-20 rounded-xl absolute bottom-0 left-0 right-0 w-full text-center'> <p className='absolute bottom-5 left-0 right-0 w-full font-bold text-white text-base md:text-xl px-2 '>Singles Counseling</p>
          </div>
          <img src="./public/img/happysingleman.jpg" alt="" className='rounded-xl' />
          </a>

          <a href=' https://calendly.com/kemie72/family' target='_blank' className='relative hover:drop-shadow-2xl rounded-xl bg-purple h-[120px] w-[120px] xs:h-[130px] xs:w-[130px] sm:h-[150px] sm:w-[150px] md:h-60 md:w-60 lg:h-[200px] lg:w-[200px] xl:h-60 xl:w-60 '>
          <div id='counsel-card-gradient' className='h-20 rounded-xl absolute bottom-0 left-0 right-0 w-full text-center'> <p className='absolute bottom-5 left-0 right-0 w-full font-bold text-white text-base md:text-xl px-2 '>Family Counseling</p>
          </div>
          <img src="./public/img/happyfamily.jpg" alt="" className='rounded-xl' />
          </a>

          <a href=' https://calendly.com/kemie72/general' target='_blank' className='relative hover:drop-shadow-2xl rounded-xl bg-purple h-[120px] w-[120px] xs:h-[130px] xs:w-[130px] sm:h-[150px] sm:w-[150px] md:h-60 md:w-60 lg:h-[200px] lg:w-[200px] xl:h-60 xl:w-60 '>
          <div id='counsel-card-gradient' className='h-20 rounded-xl absolute bottom-0 left-0 right-0 w-full text-center'> <p className='absolute bottom-5 left-0 right-0 w-full font-bold text-white text-base md:text-xl px-2 '>General Counseling</p>
          </div>
          <img src="./public/img/takingnotes.jpg" alt="" className='rounded-xl' />
          </a>
          
        </div>
        <div id="counsel-sect-cta" className='flex flex-row gap-5 items-center mx-auto  py-10'>
          <a href='https://calendly.com/kemie72' target='_blank' className='hover:drop-shadow-xl w-[180px] bg-pink text-darkpurple rounded-xl p-4 font-bold'> Explore Counseling</a> 
          <div className='hidden xs2:flex h-12 w-[2px] bg-pink'> </div>
          <a className='hover:underline hidden xs2:flex p-5 w-[180px] rounded-xl text-pink font-bold'> Learn more</a>

        </div>
      </div>
    </div>
  );
}