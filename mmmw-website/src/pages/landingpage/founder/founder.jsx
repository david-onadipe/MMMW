export default function Founder() {
  return(
    <div className='w-full bg-pink relative '>
  		
      
      <div className='flex flex-col md:flex-row max-w-[1500px]  pt-16 px-10 mx-auto items-center'>
        <div className='flex flex-col w-full py-10 md:p-10'>
          <div className='text-center md:text-left text-3xl md:mt-2 lg:mt-0 md:text-[2.2rem] md:leading-[40px] lg:text-[2.5em] lg:leading-[49px] xl:text-[3.3rem] xl:leading-[1.1] text mb-8 '> Building Trust <br/> Nurturing Hope </div>
          <div className='mb-11 text-center md:text-left text-lg'> James Lindsey strives to customize therapy to meet his clients' individual needs. His education and experience with a wide variety of therapeutic techniques allows him to adapt counselling to meet his clients wherever they are at on the road to healing.</div>
          <div className='flex flex-col gap-7'>
            <div id='signature' className="justify-center flex md:justify-start"> <img className='w-[200px]' src='public\img\Signature.png'></img>  </div>
            <div className='text-center md:text-left'> Dr. Kemi Elizabeth Onadipe</div>
          </div>
          

        </div>
        <div className='flex w-full px-5 pb-16 md:py-10 md2:p-20'>
          <div className=' flex h-[200px] xs:h-[350px] mx-auto md:h-[300px]  lg:h-[400px] min-w-max rounded-xl justify-center'>
            <img src='../../../../public/img/kemiOnadipe1.jpg' className=' h-full shadow-xl rounded-xl mx-auto justify-center'/>
          </div>
          

          

        </div>

      </div>
      
    </div>
  );
}