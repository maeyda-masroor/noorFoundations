import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import axios from "axios";
import { FormattedMessage } from "react-intl";

function MakeAppointment(){
    const [GuardianName ,setGname] =useState('');
    const [GuardianEmail,setGuardianEmail] = useState('');
    const [childName,setChildName] = useState('');
    const [childAge,setChildAge]=useState('');
    const [Message,setMessage] = useState('');
    const {
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
           const objt = {GuardianName,GuardianEmail,childName,childAge,Message};	
            axios.post('https://sheet.best/api/sheets/8130cffa-c5ff-41ad-80cc-542bff71df4c',objt)
            .then(response => {
              console.log(response);
            })
    
      };
    return <div class="container-xxl py-5">
    <div class="container">
        <div class="bg-light rounded">
            <div class="row g-0">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="h-100 d-flex flex-column justify-content-center p-5">
                        <h1 class="mb-4"><FormattedMessage id = "make_appointment" defaultMessage="Make Appointment"/></h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-0" id="gname" placeholder="Gurdian Name"
                                        onChange={e=>setGname(e.target.value)}
                                        />
                                        <label for="gname"><FormattedMessage id = "Guardian_Name" defaultMessage="Guardian Name"/></label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control border-0" id="gmail" placeholder="Gurdian Email"
                                        onChange={e=>setGuardianEmail(e.target.value)}/>
                                        <label for="gmail"><FormattedMessage id="Guardian_Email" defaultMessage="Guardian_Email"/></label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-0" id="cname" placeholder="Child Name"
                                        onChange={e=>setChildName(e.target.value)}
                                        />
                                        <label for="cname"><FormattedMessage id = "child_name" defaultMessage="child name"/></label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-0" id="cage" placeholder="Child Age"
                                        onChange={e=>setChildAge(e.target.value)}/>
                                        <label for="cage"><FormattedMessage id = "child_Age" defaultMessage="Child Age"/></label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control border-0" placeholder="Leave a message here" id="message" propsstyle="height: 100px"
                                        onChange={e=>setMessage(e.target.value)}
                                        ></textarea>
                                        <label for="message"><FormattedMessage id = "Message" defaultMessage="Message"/></label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit"><FormattedMessage id = "submit" defaultMessage="Message"/></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" propsstyle="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded" src="5.jpeg" propsstyle="object-fit: cover;"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

}
export default MakeAppointment;