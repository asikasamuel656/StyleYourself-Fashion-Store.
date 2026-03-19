import About from './components/About'
import Collection from './components/Collection'
import HeroSlider from './components/HeroSlider'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'

function App() {
  return (
    <>
      <div>
         <Navbar />
         <HeroSlider />
         <About />
         <Collection />
         <Reviews />
      </div>
    </>
  )
}

export default App
