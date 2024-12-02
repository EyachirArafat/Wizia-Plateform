import { Button } from '@mui/material';
import React from 'react';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

function HeroSection() {
  return (
    <div
    style={{
      backgroundImage: "url(/src/assets/hero-background.svg)"}}
      className='container-fluid mx-auto pt-10 bg-cover bg-no-repeat bg-center'>

      <div className='flex lg:px-40 md:px-24 px-10 justify-start items-center my-auto min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh]'>
        <div className='my-auto md:space-y-6 space-y-3'>
          <p className='text-neutral font-medium'>AI SDRs (aiDRs)</p>
          <div>
            <p className='text-white text-3xl lg:text-6xl md:text-5xl'><span className='font-semibold'>More</span> <i>leads,<br /></i> <span className='font-semibold'>less</span> <i>people</i>.</p>
          </div>
          <p className='text-white sm:w-2/3 md:w-1/2 text-opacity-60'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
          <Button variant="contained" className="text-nowrap"
            sx={{
              backgroundColor: '#0FF1F6',
              textTransform: 'none',
              border: '1px solid transparent',
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor: '#0FF1F6',
                transform: 'scale(1.05)',
              },
            }}>Sign Up for the Beta <ArrowOutwardOutlinedIcon/>
          </Button>
          
        </div>
      </div>
  
    </div>

  )
}

export default HeroSection;