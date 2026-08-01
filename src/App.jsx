import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutStrip from './components/AboutStrip'
import Portfolio from './components/Portfolio'
import Learning from './components/Learning'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <AboutStrip />
      <Portfolio />
      <Learning />
      <ContactFooter />
    </Layout>
  )
}

export default App
