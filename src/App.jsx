import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Action from './components/Action'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Action />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  )
}

export default App
