import { Button } from "@mui/material";

// images 
import Bomb from '../assets/bomb.png'

function CreateQuickSection(){
  return(
    <section className="contain-fluid bg-[#5F62E2] md:px-16 sm:px-8 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        <div className=" flex justify-center items-start flex-col gap-4 py-10">
          <h2 className="md:text-4xl text-2xl text-white font-semibold">The quickest way to create awesome presentation</h2>
          <div className="flex gap-4">
            <Button variant="contained" className="bg-[#2ab691]">Get started</Button>
            <Button variant="contained" className="bg-[#2AB6911C]">Learn More</Button>
          </div>
        </div>
        <div className="flex items-end justify-center">
          <img className="w-2/3 max-w-[320px] min-w-[300px]!" src={Bomb} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default CreateQuickSection;