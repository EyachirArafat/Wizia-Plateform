import NavBarSection from "./components/Header/NavBarSection";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";

function App() {

  return (
    <>
      <div className="bg-primary">
       <NavBarSection/>
       <HeroSection/>
       <Partners/>
      </div>
    </>
  )
}

export default App;
