import { FormattedMessage } from "react-intl";

function OurTeam(){
    return <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-lg-6">
        <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" propsstyle="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
          <h1><FormattedMessage id = "CreativeTeam" defaultMessage="Our Creative Team"/></h1>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row" style={{paddingLeft:'200px'}}>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" propsstyle="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
          <div class="advisor_thumb"><img src="team-6.jpeg" alt="" width={100} height={100}/>
            <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
          </div>
         <div class="single_advisor_details_info">
            <h6>Ms.Humaira Shahid</h6>
            <p class="designation">CEO</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" propsstyle="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
          <div class="advisor_thumb"><img src="n.png" alt="" width={100} height={100}/>
            <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
          </div>
          <div class="single_advisor_details_info">
            <h6>Mrs. Reema Jamil</h6>
            <p class="designation">HR and Acount Officer</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" propsstyle="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
          <div class="advisor_thumb"><img src="download.jpeg" alt=""/>
            <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
          </div>
          <div class="single_advisor_details_info">
            <h6>Ms. Rehan Fatima</h6>
            <p class="designation">Finance Manager</p>
          </div>
        </div>
      </div>
      </div>
  </div>
}
export default OurTeam;