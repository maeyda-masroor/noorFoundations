import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Contact(){
    const [email,setEmail] = useState('');
    const [name,setname] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
           const objt = {name,email,subject,message};	
            axios.post('https://sheet.best/api/sheets/f9ae1cb2-241e-48ce-a416-4c3d26de3be4',objt)
            .then(response => {
              console.log(response);
            })
      };
    return <div class="container">
       <section class="mb-4">

    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        <div class="col-md-9 mb-md-0 mb-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="name" class="">Your name</label>
                            <input type="text" id="name" name="name" class="form-control"
                            {...register("name", {
                                required: true,
                                //pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
                              })}
                              onChange={(e) => setname(e.target.value)}        
                            />
                            </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="email" class="">Your email</label>
                            <input type="email" id="email" name="email" class="form-control"
                             {...register("email", {
                                required: true,
                                pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
                              })}
                              onChange={(e) => setEmail(e.target.value)}        
                            />
                            {errors.email && errors.email.type === "required" && (
                      <p className="errorMsg">Put email in this format example@example.com.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                      <p className="errorMsg">Put email in this format example@example.com</p>
                    )}
                    
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                        <label for="subject" class="">Subject</label>
                        <input type="text" id="subject" name="subject" class="form-control"
                        onChange={e=>setSubject(e.target.value)}
                        />
                            
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"
                            onChange={e=>setMessage(e.target.value)}
                            ></textarea>
                        
                        </div>

                    </div>

                </div>
             
            <br/>
            <div class="text-center text-md-left">
                <button class="btn btn-primary" type="submit">Send</button>
            </div>
            </form>
            <div class="status"></div>
        </div>
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>NORTH NAZIMABAD، D-9, BLOCK-I, Block I North Nazimabad Town, Karachi, Karachi City, Sindh 74700</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+92 0300-2266750</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>reemajamil2019@gmail.com</p>
                </li>
            </ul>
        </div>
    </div>
</section>
    </div>
}
export default Contact;