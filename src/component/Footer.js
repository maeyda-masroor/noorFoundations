import axios from "axios";
import  { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
                        <h3 class="text-white mb-4">Get In Touch</h3>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>NORTH NAZIMABAD، D-9, BLOCK-I, Block I North Nazimabad Town, Karachi, Karachi City, Sindh 74700</p>
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
                        <h3 class="text-white mb-4">Quick Links</h3>
                        <Link class="btn btn-link text-white-50" to="/help">Reach For Help</Link>
                        <Link class="btn btn-link text-white-50" to="/contact">Contact Us</Link>
                        <Link class="btn btn-link text-white-50" to="/procedure_policy">Procedure & Policy</Link>
                        <Link class="btn btn-link text-white-50" to='/gallery'>Gallery</Link>
                     </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Photo Gallery</h3>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="1.jpeg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="2.jpeg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="3.jpeg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="4.jpeg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="5.jpeg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 class="text-white mb-4">Newsletter</h3>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" propsstyle="max-width: 400px;">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="email" placeholder="Your email" name="email"
                             {...register("email", {
                                required: true,
                                //pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i
                              })}
                              onChange={(e) => setEmail(e.target.value)}          
                            />
                            <button type="submit" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div> 
    </div>
    </div>
}
export default Footer;