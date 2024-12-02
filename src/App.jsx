import Features from "./components/Features";
import NavBarSection from "./components/Header/NavBarSection";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";

function App() {

  return (
    <>
       <NavBarSection/>
      <div className="bg-primary ">
       <HeroSection/>
       <Partners/>
       <Features/>

      </div>
    </>
  )
}

export default App;
