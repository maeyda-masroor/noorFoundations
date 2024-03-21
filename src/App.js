import Flyer from './page/Flyers';
import NFSEmpChildren from './page/NFSEmpchildren';
import NFSEmpthemselves from './page/NFSEmpthemselves';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
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
import React, {useContext} from 'react';
import {Context} from "./component/Wrapper";
import OurBoardOfTrustee from './component/OurBoardOfTrustee';
import NoPage from './page/404Page';
import Test from './component/Test';
export default function App(props) {
  const context = useContext(Context);
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
       return <Loading/>
    }
    return (
    <div>
      <BrowserRouter>
      <header style={{backgroundColor:'#faffffa',float:'left'}}>
          <select value = {context.locale} onChange={context.selectLanguage} className=' text-white m-1' style={{backgroundColor:'black'}}>
          <option value= 'en'>English</option>
          <option value= 'fr'>French</option>
          <option value= 'ar'>Arabic</option>
        </select>
        </header>
          <TopNavbar/>
          <Navbar/>
          <Routes>
            <Route path='/flyer' element={<Flyer/>}/>
            <Route path = '/test' element={<Test/>}/>
            <Route path = "/" element={<Home/>}/>
            <Route path='/newAndstories' element={<NewsAndStories/>}/>
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
            <Route path='/nfs' element={<NFSEmpChildren/>}/>
            <Route path='/NFSformforempthemselves' element={<NFSEmpthemselves/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Routes>
          <Footer/>
          </BrowserRouter>
    </div>
  );
}