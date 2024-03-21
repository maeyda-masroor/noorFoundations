import { Link } from "react-router-dom";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
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
                        <h1 class="mb-4"><FormattedMessage id= 'ceoMessage' default ="CEO Message"/></h1>
                        <p  style={{color:'#986931',fontFamily:'Serif'}}>
                        Dear Friends,

In the heart of our mission at Noor Education & Healthcare Foundation is a commitment to leave no one behind, blending education and healthcare into a tapestry of support for the underprivileged. Our vision is ambitious yet grounded in the belief that sustainable upliftment in education and health can transform communities from the inside out.
                        </p>
                        {isShowMore && (
                        <p style={{color:'#986931',fontFamily:'Serif'}}>
                            Through our work, we strive to light the way for those in need, connecting them with essential services and inspiring a wave of support from donors, volunteers, and advocates. Our initiatives, from enhancing children's nutrition to advocating for the education of frontline workers' children and promoting girls' education, are more than programs; they are lifelines to a brighter future..

I invite you to join us in this noble cause. Your support, whether through donations, volunteering, or simply spreading the word, is invaluable. Together, we are not just dreaming of a better tomorrow; we are actively building it, one life at a time. Thank you for standing with us, for believing in our mission, and for being an integral part of our story of hope and transformation.

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