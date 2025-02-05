import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function data() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      }
    ]
  };

  const defaultProfilePic = './public/img/defaultprofile.png'
  const testimonies = [
    {
      profilePic: defaultProfilePic , 
      names: 'Bisi & Bola', 
      encounter: 'MMMW Match-Making ', 
      testimony: 'We met through this service and have an amazing  marriage. We are extremely grateful for this service and for the amazing opportunity to meet one another through the service offered by Matchttolast',  
    },
    {
      profilePic: defaultProfilePic, 
      names: 'THe people on the old website testimonial', 
      encounter: 'MMMW Monthly Seminar', 
      testimony: 'I attended a “My Marriage Must Work” seminar in 2015, thinking it was only for married couples. Testimonies—especially Margaret’s—moved me, and Pastor Kemi prophesied I’d marry soon. God then connected me with my fiancé. If He did it for us, He can do it for you, too.',  
    },
    {
      profilePic: defaultProfilePic, 
      names: 'Athenia', 
      encounter: 'MMMW Weekend Away', 
      testimony: 'I attended the Valentine’s Dinner as a single woman. I won the best dress and single bridal dance, where pastors prophesied my engagement. Soon afterward, I returned home, met my fiancé, and we’re marrying next year. I praise God and for blessing my family and me. ',  
    },
    {
      profilePic: defaultProfilePic, 
      names: 'Yomi & Akin', 
      encounter: 'MMMW Mathcmaking', 
      testimony: 'It all started in mid January 2020, when Matchtolast connected us chatting and friendship started in February, we meet physical in March and the rest is a happily married life.',  
    },
    
  ];
  return(
    <div className='w-full bg-purple flex'>
      <div className='pt-20 pb-20 max-w-[1500px] w-full mx-auto items-center'>
        <div className='flex flex-col gap-5 p-10'>
          <div className=' text-pink text-3xl text-center font-bold'>
            We've Impacted People Just Like You.
          </div>
          <div className=' text-pink text-center md:text-lg'>
          Hear Their Stories and See Real Results.
          </div>
        </div>
        <Slider className='flex flex-col items-center mx-10 ' {...settings}>
          {testimonies.map((t) => (
            <div className='flex flex-col gap-3 w-full p-5 xs:p-10 rounded-xl lg:min-h-[320px] min-h-[390px] xxs:min-h-[290px] xs:min-h-[290px] md:min-h-[330px] bg-warmwhite relative'> 

              <div className='flex mb-auto'> 
                <h1 className='text-sm text-darkpurple md:text-base'> {t.testimony}</h1>
              </div>

              <div className='flex flex-col absolute bottom-[30px] left-0 right-0 mx-5 xs:mx-10 '>
                <div id='spacer' className='h-[2px]  my-5 bg-darkpurple'></div>
                <div className='flex flex-row gap-4'>
                  <div className='flex items-center '>
                    <img className='rounded-full w-[50px] h-[50px]  items-center' src={t.profilePic} alt="" />
                  </div>      
                  <div>
                    <h1 className=' text-purple '>{t.names}</h1>
                    <h1 className='text-xs text-purple xs:text-sm'>{t.encounter}</h1>
                  </div>
                </div>
              </div>

            </div>

          ))}
        </Slider>

      </div>

    </div>
  );
}