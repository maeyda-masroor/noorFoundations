import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import YouTube , { YouTubeProps } from "react-youtube";
function AboutUs(){
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
      const opts: YouTubeProps['opts'] = {
        height: '270',
        width: '270',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };                                                   
    return <div class="container">
      <section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="title"><h1 style={{paddingTop:'40px'}}><FormattedMessage id = "now3" defaultMessage="Begum Noor Jehan History..."/></h1></span>
                        </div>
                        <div class="text"><FormattedMessage id = "About3" defaultMessage="Noor Education & Healthcare Foundation was set up to take forward (Late) Begum Noor Jehan Ishrat’s vision for educating those less fortunate, with a focus on girls and women empowerment through education. She was a great advocate for lifelong learning and for providing a helping hand to those who were financially challenged and unable to afford to educate their children. 
She topped in her matriculation exam but got married at young age. And because of the domestic responsibilities couldn’t continue her education, but with due course of time she privately did her graduation and then got admission in LLB."/>
</div>
                      <div class="text"><FormattedMessage id = "About4" defaultMessage="
                      She got married at the age of 16 passed her matriculation.and devoted her young years bringing up her children. 
As soon as the children were grown up, she decided to pursue her passion for education as a mature student and enrolled herself for intermediate college. She went on to get her Bachelor of Arts (BA) and proceeded to enrol for L.L.B. to become a lawyer. 
As a commitment to her passion for Lifelong learning, she went on to acquire an “Early Childhood Education Montessori “Diploma. She believed that education was something no-one could take away from you and gave a person great self-esteem, self-confidence, and economic emancipation and self-sufficiency.  
Noor Education & Healthcare Foundation embodies her ethos and values and strives to realise her dream of ‘educate to emancipate and empower.’"/>
                     </div>
                        <div class="btn-box">
                            <Link to="/contact" class="theme-btn btn-style-one">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column wow fadeInLeft">
                      <div class="author-desc">
                        <h1><FormattedMessage id = "aboutus1" defaultMessage="How NEHCF was started?Whose vision was to build NEHCF?"/></h1>
                      </div>
                        <figure class="image-1">
                        <img src = "img/12.jpeg" width={250} height={250}/>
                        <h5>Begum Noorjahan Ishrat</h5>
                        <figcaption><i>Founder of Noor Education & Healthcare Foundation (NEHCF)</i></figcaption>
                        </figure>
                    </div>
                </div>
              
            </div>
           <div class="sec-title">
                            <span class="title"><FormattedMessage id = "now" defaultMessage="Now today"/></span>
                            <h2><FormattedMessage id = "now1" defaultMessage="Her desendant are following her dream"/></h2>
                        </div>
          <div class="text">
          <h1>Her desendant....</h1>
          </div>
          <div class="text">
          </div>
          <div class="text">                
          </div>
          <div class="text">
           </div>
            <div class="text">
              <h1><FormattedMessage id = "now2" defaultMessage="In the end , i would like to you go through our website and find our latest projects we have done , no of children we taught over and get to know more about us!"/></h1>
            </div>
        </div>
    </section>
    </div>
    
}
export default AboutUs;