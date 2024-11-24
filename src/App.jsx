import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Presentations from './components/Presentations';
import CarouselSection from './components/CarouselSection';
import UseVideo from './components/UseVideo';
import Blog from './components/Blog';
import CreateQuickSection from './components/CreateQuickSection';
import GetMoreSection from './components/GetMoreSection';
import FooterSection from './components/FooterSection';

function App() {

  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <Presentations />
        <CarouselSection/>
        <UseVideo/>
        <Blog/>
        <CreateQuickSection/>
        <GetMoreSection/>
        <FooterSection/>
      </div>
    </>
  )
}

export default App;
