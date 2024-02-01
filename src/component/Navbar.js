import { Link } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';
import 'bootstrap/dist/css/bootstrap.css'; 
function Navbar(){
    
 return <div> <nav class="navbar navbar-expand-lg bg-white navbar-light  px-4 px-lg-5 py-lg-0">
            <a href="/" class="navbar-brand">
                <h1 class="m-0 text-primary"><img src = "noorfoundation.png" width={100} height={100}/></h1>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                    <Link to="/about" class="nav-item nav-link">About Us</Link>
                    <Link to ="/AuditReport" class="nav-item nav-link">Audit Report</Link>
                    <Link to = '/history' class="nav-item nav-link">Our History</Link>
                    <Link to = '/newAndstories' class="nav-item nav-link">News And Stories</Link>
                    <div class="nav-item dropdown">
                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</Link>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <Link to ="/OurExpenditure" class="dropdown-item">Our Expenditure</Link>
                            <Link to="/Ourteam" class="dropdown-item">Our Team</Link>
                            <Link to="/OurBoardOfTrustees" class="dropdown-item">Our Board Of trustees</Link>
                            <Link to ='/faq' class="dropdown-item">FAQ</Link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">NFS Forms</Link>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <Link to ="/NFS" class="dropdown-item">NFS for Employee Children Scholarship</Link>
                            <Link to="/NFSformforempthemselves" class="dropdown-item">NFS for Employee Themselves</Link>
                        </div>
                    </div>
                    
                    <Link to ="/contact" class="nav-item nav-link">Contact Us</Link>
                </div>
                <ReactWhatsapp style={{backgroundColor:'#d7AB3C',borderRadius:'10px'}} number = "+923197134823" >Join Us</ReactWhatsapp>
            </div>
        </nav>
    </div>
}
export default Navbar;