import { Box, Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


// images
import Management from '../assets/document.png';
import Entertainment from '../assets/gamepad.png';
import Marketing from '../assets/camera.png';
import References from '../assets/compus.png';



function Presentations(){
  const PreElements =[
    {
      image: Management,
      header: "Management",
      para: "Software platform for running your new internet business"
    },
    {
      image: Entertainment,
      header: "Entertainment",
      para: "Software platform for running your new internet business"
    },
    {
      image: Marketing,
      header: "Marketing",
      para: "Software platform for running your new internet business"
    },
    {
      image: References,
      header: "References",
      para: "Software platform for running your new internet business"
    },
  ]
  

  return(
    <Box>
      <div className="contain-fluid grid md:gap-12 gap-4 justify-center items-center grid-cols-2 py-16 md:py-20 md:px-16 sm:px-8 px-4 bg-gray-100 space-y-14 md:space-y-0">
        <div className="md:col-span-1 col-span-2">
          <div className="grid grid-cols-4 gap-3">
            {
              PreElements.map((item, index)=>(
                <div key={index} className="md:col-span-2 col-span-4">
                  <div className="flex md:flex-col flex-row justify-center items-center md:text-center bg-white p-3 rounded-lg gap-3 transition-transform hover:scale-105 cursor-pointer">
                    <img className="sm:w-32 w-24 object-cover hover:scale-110 duration-500" src={item.image} />
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">References</h3>
                      <p className="text-opacity-50 md:text-[11px]">Software platform for running your new internet business</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="md:col-span-1 col-span-2 h-full flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-6xl font-semibold ">The quickest way to create modern presentation</h2>
                  <p>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
                  <div>
                    <Button className="bg-[#5F62E226] text-[#5f61e2] relative overflow-hidden hover:scale-105 hover:bg-[#5f61e296] hover:text-white ease-out group">Explore All <span className="transition-transform transform group-hover:translate-x-2">{<ArrowForwardIcon />}</span></Button>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <p>Follow Us</p>
                  <div className="space-x-1">
                    <FacebookRoundedIcon className=" w-10 h-10 socialIcon"/>
                    <InstagramIcon className="w-10 h-10 socialIcon"/>
                    <XIcon className="w-10 h-10 socialIcon"/>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </Box>
  )
}

export default Presentations;