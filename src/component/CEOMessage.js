import { Link } from "react-router-dom";
import { useState } from "react";
function CEOmessage(){
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
    return <div>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">CEO Message</h1>
                        <p  style={{color:'#986931',fontFamily:'Serif'}}>We have a vision at Remedial Centre to provide medical services to the local community at reasonable costs delivered by competent doctors, caring staff, and modern equipment with prompt response to medical emergencies.

Most people tend to take their health for granted and don’t think about available health care resources until a medical emergency arises. Staff at Remedial Hospital spend a great deal of time and energy planning to meet community’s health care needs and want to offer the best medical and emergency care possible for your family and friends that may have need of our services.
         </p>
                        {isShowMore && (
                        <p style={{color:'#986931',fontFamily:'Serif'}}>
                        We may be small, but we’re capable of handling just about any emergency situation that may arise. We’re proud of our record of superior quality, efficient service, friendly caring staff and reasonable cost of care. We are pleased that our patients continually praise the competence and caring attitudes of our nursing staff and physicians.

                        We are more than just a hospital, we organize health awareness programmes, school health checkups, occupational health, vaccination camps and free health and well being clinics. As a community hospital, we thrive on your feedback and support. We recognize our responsibility to provide you with the best health care available and ensure that our staff delivers on that promise every day. So when you or your family needs medical services, you can count on us! And we’re there when you need us.
                        </p>
                        )}
                        <div class="row g-4 align-items-center">
                        <button style={{borderRadius:'10px'}} onClick={toggleReadMoreLess}>
                            {isShowMore ? "Read Less" : "Read More"}
                        </button>
       
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle flex-shrink-0" src="Prof_H.webp" alt="" style={{width: '60px',height: '60px'}}/>
                                    <div class="ms-3">
                                        <h6 class="text-primary mb-1">Jhon Doe</h6>
                                        <small>CEO & Founder</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img propstyle="img-fluid w-75 circle bg-light p-3" src="3.jpeg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default CEOmessage;