import { Button } from '@repo/ui/button'
import { Footer } from '@repo/ui/footer'
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

function LandingPage() {

  return (
    <div className='flex flex-col px-4 gap-10 bg-red-60'>
      <div className='px-36'>
        <div className='pt-12 flex justify-between gap-20'>
          <div className=' flex flex-col justify-center gap-2'>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Stop Searching.
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Start Studying.
            </span>
            <span className="text-xl sm:text-4xl lg:text-2xl ">
              Write, Share, Publish and Study effortlessly.
            </span>
            <div className='flex'>
              <Button variant={"secondary"} size={'lg'} text={'Get Started'} backgroundAnimation={true} />
            </div>
          </div>
          <div className=' flex justify-center rounded-xl border shadow-md overflow-hidden'>
            <Image className='w-96 h-96 rounded-sm' src='https://img.freepik.com/free-vector/add-notes-concept-illustration_114360-2496.jpg?t=st=1734280493~exp=1734284093~hmac=1227e5520483dcaac9835f2d5fd6ab37398b87542c0bb93f8c3803d9109e92f8&w=740' width={740} height={740} alt='img' />
          </div>
        </div>
        <div className='mb-20 md:mt-20 rounded-lg overflow-hidden border shadow-md'>
          <Image className='w-full h-full' src='https://www.notion.com/_next/image?url=%2Ffront-static%2Fpages%2Fproduct%2Fsuper-duper%2Fcarousel%2Fsites.png&w=1920&q=75' alt='img' width={1920} height={1080} />
        </div>
      </div>
      <div className=' px-10'>
        <Footer />
      </div>

    </div>
  )
}

export default LandingPage