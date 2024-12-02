import React from 'react'
import { Box } from '@mui/material'

// Partners Logo
import BackHub from '/src/assets/BackHub-logo.svg'
import CableLabs from '/src/assets/CableLabs-logo.svg'
import DBS from '/src/assets/DBS-logo.svg'
import EasyEuro from '/src/assets/EasyEuro-logo.svg'
import AMD from '/src/assets/AMD-logo.svg'

function Partners() {

  const PartnersLogo =[BackHub, CableLabs, DBS, EasyEuro, AMD]

  return (
    <Box>
      <div className='container-fluid flex flex-col justify-center items-center text-center px-4 py-6 bg-secondary space-y-2'>
        <p className='text-neutral font-medium'>Our Trusted Partners</p>
        <div className='flex flex-wrap justify-center items-center md:gap-12 sm:gap-8 lg:gap-20'>
          {
            PartnersLogo.map((logos)=>(
              <img className='md:w-28 sm:w-24 w-20' src={logos} alt={logos} />
            ))
          }
        </div>
      </div>
    </Box>
  )
}

export default Partners;