import Image from 'next/image';

export default function TeamCards(team) {
  return(
    <div className='bg-pink w h-[280px] sm:h-fit flex flex-col gap-5 rounded-xl shadow-2xl p-3 sm:p-10'>
      <div className='relative h-[100px] w-[100px] sm:h-[170px] sm:w-[170px] mx-auto'>
        <Image 
          className='rounded-full shadow-2xl'
          src={team.image}
          alt={team.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h1 className='text-center font-bold text-lg xs2:text-2xl text-darkpurple'>{team.name}</h1>
      <h2 className='text-center text-base xs2:text-lg text-darkpurple'>{team.roles}</h2>
    </div>
  );
}