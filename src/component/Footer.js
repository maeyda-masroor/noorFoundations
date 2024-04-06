import axios from "axios";
import  { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {FormattedMessage} from 'react-intl';
function Footer(){
    const [email,setEmail] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
           const objt = {email};	
            axios.post('https://sheet.best/api/sheets/0053c8dc-4acf-4ca3-a492-4ba442c45bcb',objt)
            .then(response => {
              console.log(response);
            })
      };
    return <div> <div class="container-fluid text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s"style={{backgroundColor:'#d7ab3c'}}>
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4"><FormattedMessage id = "getInTouch" defaultMessage="default Message"/></h3>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i><FormattedMessage id = "address" defaultMessage="NORTH NAZIMABAD، D-9, BLOCK-I, Block I North Nazimabad Town, Karachi, Karachi City, Sindh 74700"/></p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+92 0300-2266750</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>reemajamil2019@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4"><FormattedMessage id = "quicklinks" defaultMessage="Quick Links"/></h3>
                        <Link class="btn btn-link text-white-50" to="/help"><FormattedMessage id = "reachforhelp" defaultMessage="reach for help"/></Link>
                        <Link class="btn btn-link text-white-50" to="/contact"><FormattedMessage id = "contactus" defaultMessage="Contact Us"/></Link>
                        <Link class="btn btn-link text-white-50" to="/procedure_policy"><FormattedMessage id = "procedure&ploicy" defaultMessage="procedure and policy"/></Link>
                        <Link class="btn btn-link text-white-50" to='/gallery'><FormattedMessage id = "gallery" defaultMessage="gallery"/></Link>
                     </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4"><FormattedMessage id = "photogallery" defaultMessage="photo gallery"/></h3>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/1.jpeg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/2.jpeg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/3.jpeg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/4.jpeg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/5.jpeg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 class="text-white mb-4"><FormattedMessage id = "newsletter" defaultMessage="Newsletter"/></h3>
                        <p><FormattedMessage id = "newsletterZ" defaultMessage="Sign up tp receive newsletter"/></p>
                        <div class="position-relative mx-auto" propsstyle="max-width: 400px;">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="email" placeholder="your email" name="email"
                             {...register("email", {
                                required: true,
                                //pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i
                              })}
                              onChange={(e) => setEmail(e.target.value)}          
                            />
                            <button type="submit" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"><FormattedMessage id = "signup" defaultMessage="sign up"/></button>
                        </div>
                        </form>
                    </div>
                </div>
            </div> 
    </div>
    </div>
}
export default Footer;