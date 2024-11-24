import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// images  
import MySpace from '../assets/Group 37.png';
import Culture from '../assets/Group 39.png';
import Craft from '../assets/Group 40.png';

function GetMoreSection(){

  const MoreFacilities =[
    {
      img: MySpace,
      title: "Make myspace your best designed space",
      tag: "Design"
    },
    {
      img: Culture,
      title: "My company culture has changed today",
      tag: "3D illustrations"
    },
    {
      img: Craft,
      title: "Professionals in craft! All products were super great",
      tag: "Development"
    },
  ]



  return(
    <section className='contain-fluid md:px-16 py-12 md:py-16 sm:px-8 px-4'>
      <div>
        <div className='flex justify-between md:items-end md:flex-row flex-col gap-4 pb-10'>
          <div className=''>
            <h2 className='md:text-4xl text-2xl font-semibold '>Get more from our blog</h2>
            <p className='md:w-2/3 text-opacity-50'>There are a lot of different components that will  help you create the perfect look for your project</p>
          </div>
         <div>
           <Button className='text-nowrap bg-[#5F62E226] hover:bg-[#5f61e2d8] shadow-none hover:shadow-md group ease-out text-[#5f61e2] hover:text-white' variant='contained'>Explore All <ArrowForwardIcon className='group-hover:translate-x-2 group-hover:duration-1000'/></Button>
         </div>
        </div>

        <div>
          <div className='grid grid-cols-12 gap-4'>
            {
              MoreFacilities.map((item, index) =>(
                
                <div key={index} className='md:col-span-4 col-span-12 flex flex-col h-full space-y-3 shadow-md p-4 hover:scale-105 duration-200'>
                  <img className='bg-gray-100 rounded-md object-cover h-40 w-full hover:scale-105' src={item.img} alt="" />
                  <h2 className='text-lg md:text-2xl font-semibold'>{item.title}</h2>
                  <p className='text-opacity-50 flex-grow overflow-hidden text-ellipsis whitespace-normal'>A lot of different components that will help you create the perfect look for your project</p>
                  <Button className='bg-[#2AB691] bg-opacity-15 hover:bg-opacity-90 hover:text-white shadow-none hover:shadow-md text-[#2AB691] self-start' variant='contained'>{item.tag}
                  </Button>
                </div> 
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetMoreSection;