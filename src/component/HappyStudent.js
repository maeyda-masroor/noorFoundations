import { FormattedMessage } from "react-intl";

function HappyStudent(){
    return   <section class="bg-light py-3 py-md-5">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center"><FormattedMessage id = "our_success" defaultMessage="Our Success"/></h3>
            <h2 class="mb-4 display-5 text-center"><FormattedMessage id = "Success_Record" defaultMessage="We have a proven track record of success."/></h2>
            <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>
    
      <div class="container">
        <div class="row gy-4 gy-lg-0 align-items-lg-center">
          <div class="col-12 col-lg-6">
            <img class="img-fluid rounded" loading="lazy" src="1.jpeg" alt="Our Success"/>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row justify-content-xl-end">
              <div class="col-12 col-xl-11">
                <div class="row gy-4 gy-sm-0 overflow-hidden">
                  <div class="col-12 col-sm-6">
                    <div class="card border-0 border-bottom border-primary shadow-sm mb-4">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class="display-1 fw-bold mb-2" style={{fontSize:'50px'}}>36</h3>
                        <p class="fs-5 mb-0 text-secondary">Supporting Happy Students</p>
                      </div>
                    </div>
                    <div class="card border-0 border-bottom border-primary shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class="display-3 fw-bold mb-2" style={{fontSize:'50px'}}>0 - 11 Grade</h3>
                        <p class="fs-5 mb-0 text-secondary">Class range</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="card border-0 border-bottom border-primary shadow-sm mt-lg-6 mt-xxl-8 mb-4">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class="display-3 fw-bold mb-2" style={{fontSize:'50px'}}>Under 18 </h3>
                        <p class="fs-5 mb-0 text-secondary">Age range of the students is between 3years to 18 years.</p>
                      </div>
                    </div>
                    <div class="card border-0 border-bottom border-primary shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class="display-3 fw-bold mb-2" style={{fontSize:'50px'}}>PILL Students</h3>
                        <p class="fs-5 mb-0 text-secondary">less privileged areas of Karachi and surroundings.</p>
                      </div>
                    </div>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        
}
export default HappyStudent;