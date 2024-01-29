import NFSforEmpChildren from './page/NFSFormForEmpChildren';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./component/Loading";
import { useState,useEffect } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import TopNavbar from './component/TopNavbar';
import Home from './page/Home';
import BankDetails from './page/BankDetails';
import NewsAndStories from './page/NewsAndStories';
import Help from './page/help';
import Contact from './page/Contact';
import Services from './page/Service';
import Procedure_Policy from './page/Procedure_Policy';
import Gallery from './page/Gallery';
import FAQ from './page/FAQ';
import Sponsership from './page/SponserShip';
import AboutUs from './page/AboutUs';
import History from './page/History';
import OurExpenditure from './page/OurExpenditure';
import OurTeam from './page/OurTeam';
import OurBoardOfTrustee from './component/OurBoardOfTrustee';
import NFSforEmpThemselve from './page/NFSformForEmpThemselves';
export default function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
       return <Loading/>
    }
  return (
    <div className="App">
      <BrowserRouter>
          <TopNavbar/>
          <Navbar/>
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path='/NewsAndStories' element={<NewsAndStories/>}/>
            <Route path='/NFSformforempChildren' element={<NFSforEmpChildren/>}/>
            <Route path='/bankDetails' element={<BankDetails/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/procedure_policy' element={<Procedure_Policy/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/sponsership' element={<Sponsership/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/ourexpenditure' element={<OurExpenditure/>}/>
            <Route path='/ourTeam' element={<OurTeam/>}/>
            <Route path='/OurBoardOfTrustees' element={<OurBoardOfTrustee/>}/>
            <Route path='/NFSformforempthemselves' element={<NFSforEmpThemselve/>}/>
          </Routes>
          <Footer/>
          </BrowserRouter>
    </div>
  );
}