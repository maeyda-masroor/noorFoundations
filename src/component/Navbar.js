import { Link } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';
import 'bootstrap/dist/css/bootstrap.css';
import {FormattedMessage, FormattedDate} from 'react-intl';
function Navbar(){
    
 return <div> <nav class="navbar navbar-expand-lg bg-white navbar-light  px-4 px-lg-5 py-lg-0">
            <Link to ="/" class="navbar-brand">
                <h1 class="m-0 text-primary"><img src = "noorfoundation.png" width={100} height={100}/></h1>
            </Link>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <Link to="/about" class="nav-item nav-link"><FormattedMessage
                    id = "AboutUs"
                    defaultMessage="About Us"
                    values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
                /></Link>
                    <Link to ="/AuditReport" class="nav-item nav-link"><FormattedMessage
                    id = "AuditReport"
                    defaultMessage="Audit Report"
                    values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
                /></Link>
                    <Link to = '/history' class="nav-item nav-link"><FormattedMessage
                    id = "OurHistory"
                    defaultMessage="Our History"
                    values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
                /></Link>
                    <Link to = '/newAndstories' class="nav-item nav-link">
                        <FormattedMessage 
                         id='NewAndStories'
                         defaultMessage="News And Stories"/>
                    </Link>
                    <div class="nav-item dropdown">
                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><FormattedMessage 
                         id='More'
                         defaultMessage="More"/></Link>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <Link to ="/OurExpenditure" class="dropdown-item"><FormattedMessage 
                         id='OurFundAndTheirUsage'
                         defaultMessage="Our Fund and Their Usage"/></Link>
                            <Link to="/Ourteam" class="dropdown-item"><FormattedMessage 
                         id='OurTeam'
                         defaultMessage="Our Team"/></Link>
                            <Link to="/OurBoardOfTrustees" class="dropdown-item"><FormattedMessage 
                         id='OurBoardOfTrustee'
                         defaultMessage="Our Board of trustees"/></Link>
                            <Link to ='/faq' class="dropdown-item"><FormattedMessage 
                         id='FAQ'
                         defaultMessage="FAQ"/></Link>
                        <Link to = '/flyer' class="dropdown-item"><FormattedMessage 
                         id='Flyer'
                         defaultMessage="flyer"/></Link>
                            <Link to = '/BankDetails' class="dropdown-item"><FormattedMessage 
                         id='BankDetail'
                         defaultMessage="Bank Details"/></Link>
                        </div>
                    </div>
                    
                    <Link to ="/contact" class="nav-item nav-link">
                    <FormattedMessage 
                         id='ContactUs'
                         defaultMessage="Contact Us"/>
                    </Link>
                </div>
                <ReactWhatsapp style={{backgroundColor:'#d7AB3C',borderRadius:'10px'}} number = "+923197134823" ><FormattedMessage 
                         id='JoinUs'
                         defaultMessage="Join Us"/></ReactWhatsapp>
            </div>
        </nav>
    </div>
}
export default Navbar;