import { Button } from "@mui/material";
import rocket from '../assets/rocket.png'

function HeroSection(){
  return(
    <>
      <div className='container-fluid sm:py-16 py-10 md:py-24 md:px-20 sm:px-8 px-4 grid justify-center items-center grid-cols-2 md:gap-4 gap-12 md:mt-20 mt-16'>
        <div className="md:col-span-1 col-span-2 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold ">Simply explained with illustrations</h1>
          <p className="text-opacity-50 md:w-full w-10/12">There are a lot of different components that will help you create the perfect look for your project</p>
          <div className=''>
            <div className='flex gap-2'>
              <Button variant='contained' className=' text-white bg-[#5F62E2] hover:bg-[#2528eb] shadow hover:shadow-lg lg:text-lg text-nowrap'>Get Started</Button>
              <Button variant='contained' className='text-[#5F62E2] bg-[#5F62E2] bg-opacity-10 hover:bg-opacity-50 hover:text-white shadow-none active:shadow-xl active:outline-2 active:outline-[#5F62E2] lg:text-lg text-nowrap'>Learn More</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-2 flex justify-center items-center text-center">
          <img src={rocket} className="w-full max-w-md md:max-w-lg h-full object-cover text-center" alt="Rocket.png" />
        </div>
      </div>
    </>
  )
}

export default HeroSection;