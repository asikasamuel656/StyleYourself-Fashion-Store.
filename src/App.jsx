import Navbar from './components/Navbar'
import Heroslider from './components/HeroSlider'
import About from './components/About'
import Collection from './components/Collection'
import Sale from './components/Sale'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
      <Navbar />
      <Heroslider />
      <About />
      <Collection />
      <Sale />
      <Reviews />
      <Contact />
    </div>
  )
}

export default App
