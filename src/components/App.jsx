import './App.css'
import IntroReact from './IntroReact'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Props from './Props'

function App() {
  return (
    <> 
    <Header/>
    <About/>
    <hr />
    <IntroReact/>
    <hr />
    <Props 
    titlep = "WHAT ARE PROPS?: displayed as a prop"
    display = "props in curly braces"/>
    <hr />
    <Contact />
    <Footer/>
    </>
  )
}

export default App
