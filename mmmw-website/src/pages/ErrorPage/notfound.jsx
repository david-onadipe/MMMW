import {Link} from 'react-router-dom'

export default function NotFound() {
  return(
    <div className='w-full h-full'> 
      <div className=' max-w-[1500px] flex flex-col justify-center items-center align-middle gap-7 mt-[100px] '>
        <h1 className='text-center text-6xl '> 404 Error </h1>
        <p className='text-center text-2xl px-5'> Oh No! We can't find the page you are looking for. </p>
        <button className='text-white bg-purple p-3 rounded-xl text-xl'>
           <Link to='/'> Return Home</Link></button>
      </div>
    </div>
  );
}