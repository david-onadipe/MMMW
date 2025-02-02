export default function Events() {
  return(
    <div className='w-full bg-purple relative'>
      <div className='max-w-[1500px] w-full px-10 flex pt-6 flex-col mx-auto '>
        <div className='  opacity-20 bg-pink w-[90%] h-1 rounded-xl mx-auto mb-24'></div>
        <div className='flex flex-col w-full '> 
          <div className='flex flex-col w-full md:flex-row'>
            <img className='opacity-[95%] shadow-xl rounded-xl object-cover max-w-[500px] mb-6 md:my-0 mx-auto md:max-w-full h-[200px] md:h-[400px] w-full md:justify-between' src='../../../../public/img/ws23.jpg' alt=''/> 

            
            <div className='flex flex-col w-full pb-4 lg:px-10 md:px-5'> 
              <div className=' text-white text-sm xs:text-base md:text-lg uppercase text-center md:text-left'> Get your Testimony</div>
              <div className=' text-2xl xs:text-3xl md:mt-2 lg:mt-0 md:text-[1.9rem] md:leading-[36px] lg:text-[2.5em] lg:leading-[40px] xl:text-[3.3rem] xl:leading-[1.1] mb-6 text-center md:text-left text-white'> MMMW Events are <br/> <span className='text-pink'>Simply <span className='font-bold'>Life-changing.</span></span></div>
              <div className='px-5 md:px-0 mb-8 text-center md:text-left text-white'> Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</div>
              <a href='/events' className='bg-white text-darkpurple p-4 mx-auto md:ml-0 md:mr-auto rounded-xl font-bold'> Attend our Events</a>

            </div>
          </div>


          <div className='flex flex-row py-3 gap-3 justify-between pb-20 opacity-[85%]'>
            <img className=' rounded-xl shadow-xl h-28 md:h-40 w-full object-cover' src='../../../../public/img/ws15.jpg' alt=''/>

            <img className=' rounded-xl shadow-xl h-28 md:h-40 w-full object-cover hidden xs:flex' src='../../../../public/img/ws22.jpg' alt=''/> 

            <img className=' rounded-xl shadow-xl h-28 md:h-40 w-full object-cover hidden sm:flex' src='../../../../public/img/ws12.jpg' alt=''/>

            <img className=' rounded-xl shadow-xl h-28 md:h-40 w-full object-cover hidden md2:flex' src='../../../../public/img/ws24.jpg' alt=''/>
           
          </div>



        </div>

      </div>

    </div>
  );
}