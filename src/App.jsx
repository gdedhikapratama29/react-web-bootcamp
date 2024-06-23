import { Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import TestimonalPage from './pages/TestimonalPage';
import FaqPage from './pages/FaqPage';
import SyaratKetenPage from './pages/SyaratKetenPage';
function App() {
  return (
    <div>
    <NavbarComponent />

    <Routes>
    <Route path='/' Component={HomePage}/>
    <Route path='/kelas' Component={KelasPage}/>
    <Route path='/testimonial' Component={TestimonalPage}/>
    <Route path='/faq' Component={FaqPage}/>
    <Route path='/syaratketen' Component={SyaratKetenPage}/>
    </Routes>

    <FooterComponent />
    </div>
  )
}

export default App
