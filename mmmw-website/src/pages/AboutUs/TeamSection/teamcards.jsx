import TeamSection from '../TeamSection/team'

export default function TeamCards(team) {
  
  
  
  return(
    
    <div className='bg-pink w h-[280px] sm:h-fit flex flex-col gap-5 rounded-xl shadow-2xl p-3 sm:p-10'>
      <img className='rounded-full shadow-2xl h-[100px] w-[100px] sm:h-[170px] sm:w-[170px] mx-auto' src={team.image} alt=""/>
      <h1 className='text-center font-bold text-lg xs2:text-2xl text-darkpurple'> {team.name}</h1>
      <h2 className='text-center text-base xs2:text-lg text-darkpurple  '> {team.roles}</h2>
      
      
      
      

    </div>
  );
}