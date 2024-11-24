import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// images
import Img1 from '../assets/man.png'
import Img2 from '../assets/cake.png'
import Img3 from '../assets/circle.png'
import Img4 from '../assets/mySpace.png'
import Img5 from '../assets/culture.png'

import google from '../assets/google.png';
import stripe from '../assets/stripe.png';
import uber from '../assets/uber.png';
import path from '../assets/path.png';
import airbnb from '../assets/airbnb.png';
import mastercard from '../assets/mastercard.png';


function CarouselSection(){
  const Slides = [
    {
      logo: "A",
      header: "\"Make more time for the work that matters most\"",
      para: "Best software platform for running an internet business.",
      mainImg: Img1
    },
    {
      logo: "B",
      header: "\"Streamline your workflow effortlessly\"",
      para: "Leverage cutting-edge tools to increase efficiency and productivity.",
      mainImg: Img2
    },
    {
      logo: "C",
      header: "\"Boost your team's collaboration\"",
      para: "Empower your team with seamless communication and task management.",
      mainImg: Img3
    },
    {
      logo: "D",
      header: "\"Achieve your business goals faster\"",
      para: "Innovative solutions designed to help you stay ahead in your industry.",
      mainImg: Img4
    },
    {
      logo: "E",
      header: "\"Transform your ideas into reality\"",
      para: "Turn creativity into success with tools built for modern challenges.",
      mainImg: Img5
    }
  ];

  const Partners = [
    google,
    stripe,
    uber,
    path,
    airbnb,
    mastercard,
  ];
  
  const [slider, setSlider] = useState(0);

  const prev = ()=>{
    setSlider((slider) => (slider === 0 ? Slides.length - 1 : slider - 1))
  };

  const next = ()=>{
    setSlider((slider) =>(slider === Slides.length - 1 ? 0 : slider + 1))
  };

  const {logo, header, para, mainImg} = Slides[slider];

  return(
    <>
      <section className='container-fluid py-16 md:py-20 md:px-16 sm:px-8 mx-auto px-4 '>
        <div className='grid grid-cols-2 gap-14 justify-center items-center w-full h-full m-auto'>
          <div className='md:col-span-1 col-span-2 flex justify-center items-center '>
            <div className='space-y-4'>
              <div className='flex justify-start items-center gap-2'> 
                <p className='bg-slate-200 w-8 h-8 flex justify-center items-center rounded-full'>{logo}</p>
                <p>Logo</p>
              </div>
              <blockquote className='text-2xl md:text-3xl font-bold'>{header}</blockquote>
              <p className='bg-opacity-50'>{para}</p>
              <div className='flex gap-4'>
                <p onClick={prev} className='cursor-pointer bg-slate-200 hover:bg-slate-300 p-2 rounded-full'><ArrowBackIosNewIcon className=''/></p>
                <p onClick={next} className='cursor-pointer bg-slate-200 hover:bg-slate-300 p-2 rounded-full'><ArrowForwardIosIcon/></p>
              </div>
            </div>
          </div>
          <div className='md:col-span-1 col-span-2 text-center flex justify-center items-center w-full h-full aspect-w-1 aspect-h-1'>
            <img className='md:max-w-sm max-w-xs w-full h-full object-cover' src={mainImg} alt="" />
          </div>
        </div>

        <div className='pt-12'>
          <div className='grid grid-cols-12 gap-4 justify-center items-center'>
            {Partners.map((img, index)=>(
              <div key={index} className='md:col-span-2 col-span-4 flex justify-center items-center'>
                <img className='md:w-2/3 w-1/2' src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CarouselSection;