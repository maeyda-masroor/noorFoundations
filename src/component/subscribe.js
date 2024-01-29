import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Subscribe(){
    const [email,setEmail] = useState('');
    const {
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
           const objt = email;	
            axios.post('https://sheet.best/api/sheets/0053c8dc-4acf-4ca3-a492-4ba442c45bcb',objt)
            .then(response => {
              console.log(response);
            })
    
      };
    return <div class="row d-flex justify-content-center align-items-center rows py-3">
    <div class="col-md-6">
        <div class="card">
            <div class="text-center">
                <span class="d-block mt-3">Subscribe to our newsletter in order not to miss new arrivals <br/> promotions and discounts of our store</span>
                <div class="mx-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                   <div class="input-group mb-3 mt-4">
                      <input type="email" class="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2"
                      onChange={(e) => setEmail(e.target.value)}
                      />
                      <button class="btn btn-success border-rad" type="submit" id="button-addon2">Subscribe</button>
                    </div>
                    </form>
                </div>
                
            </div>
            
        </div>
        
    </div>
</div>

}
export default Subscribe;