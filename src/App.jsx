import Features from "./components/Features";
import NavBarSection from "./components/Header/NavBarSection";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import TrainUp from "./components/TrainUp";

function App() {

  return (
    <>
       <NavBarSection/>
      <div className="bg-primary ">
       <HeroSection/>
       <Partners/>
       <Features/>
       <TrainUp/>

      </div>
    </>
  )
}

export default App;
