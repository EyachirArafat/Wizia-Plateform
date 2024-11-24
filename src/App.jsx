import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Presentations from './components/Presentations';
import CarouselSection from './components/CarouselSection';
import UseFullVideo from './components/UseVideo';
import Blog from './components/Blog';
import CreateQuick from './components/CreateQuickSection';
import GetMore from './components/GetMoreSection';
import FooterSection from './components/Footer';

function App() {

  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <Presentations />
        <CarouselSection/>
        <UseFullVideo/>
        <Blog/>
        <CreateQuick/>
        <GetMore/>
        <FooterSection/>
      </div>
    </>
  )
}

export default App;
