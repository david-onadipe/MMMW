
export default function Contactbar() {
  const clockIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(64,100,158)" className="size-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
</svg>


  return(
        <div className='hidden sm:block w-full bg-contactlightblue'>
          <div id="contact-bar" className='flex flex-row max-w-[1500px] h-[40px] items-center mx-auto'>
            <div id="availability" className='mr-auto pl-10 flex'>
              <div id="time-icon" className='mr-3 '>
                {clockIcon}
              </div>
              <div id="open-hours" className='text-contactmidblue'>
                Mon to Fri 11am-2pm & 5pm-8pm
              </div>

            </div>
            <div id="contacts" className='ml-auto pr-10 flex flex-row'>
              <div id="social-icons" className='flex gap-x-2 mx-2 ' >
                <a href="http://wa.me/447848796085 " target='_blank'><i className=' text-2xl text-contactdarkblue' className="fa-brands fa-square-whatsapp text-2xl text-contactdarkblue"></i></a>
                
                
              </div>

              <div id="phone" className='  text-contactmidblue'>
               <div> | Call us at +44 784-879-6085 </div>
              </div>
            </div>
          </div>
        </div>
  );
}