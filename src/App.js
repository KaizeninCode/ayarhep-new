import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';
import FocusArea from './components/FocusArea';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import News from './components/News';
import FooterAbout from './components/FooterAbout'
import FooterFAQ from './components/FooterFAQ'
import FooterPrivacy from './components/FooterPrivacy'
import FooterHelp from './components/FooterHelp'
import FooterTC from './components/FooterTC'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <section>
          <Home/>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <News/>
        </section>
        <section>
          <FooterHelp/>
        </section>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/focus-area' element={<FocusArea/>}/>
          {/* <Route path='/news' element={<News/>}/> */}
          <Route path='/footer-about' element={<FooterAbout/>}/>
          <Route path='/faq' element={<FooterFAQ/>}/>
          <Route path='/privacy' element={<FooterPrivacy/>}/>
          {/* <Route path='/help' element={<FooterHelp/>}/> */}
          <Route path='/tc' element={<FooterTC/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
