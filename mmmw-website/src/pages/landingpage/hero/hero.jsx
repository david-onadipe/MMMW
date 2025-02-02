import PolkaDots from "../../../components/Spacers/polkadots";
import WhiteUp from '../../../components/Spacers/white-spacer-up.jsx'




export default function Hero() {
  return(

    <main className=' z-10 bg-pink pb-10 pt-6 h-fit lg:pt-20 lg:pb-52 relative'>

      <svg className='absolute w-full top-0 opacity-[10%] -z-20' id="visual" viewBox="0 0 900 600"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g fill="#FF4D80"><circle r="159" cx="871" cy="291"></circle><circle r="60" cx="35" cy="74"></circle><circle r="106" cx="501" cy="426"></circle><circle r="93" cx="574" cy="113"></circle><circle r="111" cx="45" cy="397"></circle></g></svg>
    
    
      <svg className='absolute top-0 opacity-[5%] -z-10' id="visual" viewBox="0 0 900 600"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g fill="#4E4187"><circle r="82" cx="538" cy="180"></circle><circle r="31" cx="711" cy="469"></circle><circle r="58" cx="898" cy="254"></circle><circle r="31" cx="10" cy="391"></circle><circle r="33" cx="338" cy="465"></circle><circle r="50" cx="537" cy="397"></circle><circle r="62" cx="628" cy="14"></circle><circle r="34" cx="403" cy="6"></circle><circle r="55" cx="92" cy="179"></circle><circle r="55" cx="898" cy="437"></circle><circle r="65" cx="399" cy="285"></circle><circle r="51" cx="187" cy="319"></circle><circle r="61" cx="840" cy="61"></circle><circle r="58" cx="226" cy="73"></circle><circle r="69" cx="704" cy="251"></circle><circle r="68" cx="39" cy="22"></circle><circle r="53" cx="161" cy="481"></circle>  </g></svg>
       
      <WhiteUp/>

      <section id="hero-section" className='max-w-[1500px] px-10 flex flex-col mx-auto relative'>
        
        <div id="hero-title" className=' relative text-purple max-w-[1000px] text-4xl xl2:max-w-[1200px] xl2:text-7xl xs2:text-5xl sm:text-6xl font-bold text-center pt-11 pb-6 sm:py-11 sm:px-11 mx-auto'>
        <span className='hidden xxs:inline '>Because a</span> <span className='xxs:hidden justify-center'> A </span> Good Marriage is Worth Fighting For.
        <img className='  opacity-80  w-[70px] absolute left-[-px] top-[-20px] rounded-b-full' src="./public/img/happycouple1.png" alt="" />
        <img className='  opacity-80  w-[90px] absolute left-[-180px] top-[20px] rounded-b-full' src="./public/img/happycouple1.png" alt="" />
        <img className='opacity-80  w-[50px] absolute right-[-30px] top-[10px] rounded-b-full' src="./public/img/happycouple2.png" alt="" />
        
        </div>
        <div id="hero-subtitle" className='text-center text-xl text-darkpurple relative max-w-max mx-auto mb-4'>
          Discover the secrets to a fulfiling and unshakeable love.
          <img className='opacity-80  w-[150px] absolute left-[-290px] top-[-50px] rounded-b-full' src="./public/img/happycouple3.png" alt="" />
          <img className='opacity-80  w-[40px] absolute left-[-30px] top-[-50px] rounded-b-full' src="./public/img/happycouple3.png" alt="" />
          <img className='opacity-80  w-[60px] absolute right-[-10px] bottom-[-60px] rounded-b-full' src="./public/img/happycouple4.png" alt="" />
          <img className='opacity-80  w-[150px] absolute right-[-200px] bottom-[-170px] rounded-b-full' src="./public/img/happycouple2.png" alt="" />
          <img className=' opacity-80  w-[250px] absolute left-[-670px] top-[50px] rounded-b-full' src="./public/img/happycouple3.png" alt="" />
          <img className=' opacity-80  w-[250px] absolute right-[-600px] bottom-[-100px] rounded-b-full' src="./public/img/happycouple4.png" alt="" />
          
        </div>
        <div id="hero-button" className='mx-auto py-11 relative'>
          <a href="https://calendly.com/kemie72/consultation" target='_blank' className='bg-purple font-bold shadow-2xl text-white rounded-xl p-5 text-base sm:text-xl'>Book a free consultation</a>
          <img className='opacity-80 -z-10 w-[70px] absolute left-[-90px] top-[40px] rounded-b-full' src="./public/img/happycouple3.png" alt="" />
          <img className='opacity-80 -z-10  w-[80px]  absolute right-[50px] bottom-[-40px] rounded-b-full' src="./public/img/happycouple4.png" alt="" />
          <img className='opacity-80 -z-10  w-[60px] absolute left-[-240px] top-[200px] rounded-b-full' src="./public/img/happycouple3.png" alt="" />
          <img className='opacity-80 -z-10  w-[100px]  absolute right-[-160px] bottom-[-190px] rounded-b-full' src="./public/img/happycouple4.png" alt="" />


        </div>
      </section>
      
    </main>
    
  );
}