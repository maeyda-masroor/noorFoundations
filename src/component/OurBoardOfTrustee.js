import { FormattedMessage } from "react-intl";

function OurBoardOfTrustee(){
    return <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-lg-6">
        <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" propsstyle="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
          <h1><FormattedMessage id = "boardofTrustee" defaultMessage="Our Board of Trustees"/></h1>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <center>
    <div class="row" style={{paddingLeft:"5px"}}>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" propsstyle="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
          <div class="advisor_thumb"><img src="img/team-1.jpeg" alt="" width={100} height={100}/>
            <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
          </div>
         <div class="single_advisor_details_info">
            <h6>Ms.Farukh Jahan</h6>
         </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" propsstyle="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
          <div class="advisor_thumb"><img src="img/team-4.jpeg" alt="" width={100} height={100}/>
            <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
          </div>
          <div class="single_advisor_details_info">
            <h6>Mr.Talat Khurshed</h6>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" propsstyle="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
          <div class="advisor_thumb"><img src="team-5.jpeg" alt="" width={100} height={100}/>
            <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
          </div>
          <div class="single_advisor_details_info">
            <h6>Mr.Farhan Iqbal Qureshi</h6>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" propsstyle="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
          <div class="advisor_thumb"><img src="1.png" alt="" width={100} height={100}/>
            <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
          </div>
          <div class="single_advisor_details_info">
            <h6>Hajra Sohail</h6>
          </div>
        </div>
      </div>
    </div>
    </center>
  </div>
}
export default OurBoardOfTrustee;