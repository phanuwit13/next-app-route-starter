import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='p-10 max-w-[460px] m-auto text-center flex flex-col gap-4'>
      <h2 className='text-xl font-semibold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='border py-1 px-2' href="/">Return Home</Link>
    </div>
  )
}