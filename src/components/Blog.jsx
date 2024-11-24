import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// images
import Cake from '../assets/cake.png'
import Element1 from '../assets/Group 22.png'


function Blog(){

  const BlogTopics = [
      "Many ways to use illustrations in design",
      "Simply explained with illustrations",
      "Make more time for the work"
  ]

  const Images =[Cake, Element1]


  return(
    <section className="container-fluid py-16 md:py-20 md:px-16 sm:px-8 px-4">
      {
        Images.map((img, idx) =>(
          <div key={idx} className="grid grid-cols-2 md:gap-10 gap-4 justify-center items-center pb-10">
            <div className={`md:col-span-1 col-span-2 flex justify-center items-center ${idx % 2 === 0 ? 'order-first' : 'order-last'}`}>
              <img className='max-w-2/3 p-8' src={img} alt="cake.png" />
            </div>
            <div className="md:col-span-1 col-span-2 px-10 md:px-0 flex justify-center items-center">
              <div>
                <div className='space-y-4'>
                  <h2 className='text-2xl md:text-4xl font-semibold'>Make more time for the work</h2>
                  {
                    BlogTopics.map((topics, index) =>(
                      <div key={index} className='flex flex-col gap-1'>
                      <div className='flex gap-2'>
                        <CheckCircleOutlineIcon className='text-[#2AB691] '/>
                        <p>{topics}</p>
                      </div>
                    </div>
                    ))
                  }
                  <Button variant='contained' className='bg-[#5F62E2] group transition-transform'>Learn more<ArrowForwardIcon className='group-hover:translate-x-2'/> </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Blog;