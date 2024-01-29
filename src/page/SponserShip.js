import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { set, useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Sponsership(){
    const [SponserType,setSponserType] = useState('');
    const [UseFor,setUseFor] = useState('');
    const [ChooseAmounttoGive,setChooseAmounttoGive] = useState('');
    const [Amount,setAmount] = useState('');
    const [DonorName,setDonorName] = useState('');
    const [phoneNumber,setPhonenumber] = useState('');
    const [email,setEmail] = useState('');
    const [Country,setCountry] = useState('');
    const [remarks,setRemark] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
           const objt = {SponserType,UseFor,ChooseAmounttoGive,Amount,
        DonorName,phoneNumber,email,Country,remarks
        };	
          axios.post('https://sheet.best/api/sheets/9c6559d2-4e47-43bb-a27f-d15a05b908a2',objt)
          .then(response => {
              console.log(response);
          })
        }
        return ( <div className="container">
                    <div class="display:inline-block">
                    <h1 className="text-center text-black mb-4">Sponsership Form</h1>
                    <br/>
        <b><i><p><span style={{color:'red',fontSize:'25px',padding:'1rem'}}>*Note there are three types of Sponsership</span><br/>
        <ol>
        <li>Basic Needs* covers up donation of milk in schools</li>
        <li>Medium Needs* covers up donation of fees of different students</li>
        <li>All Needs* covers up full requirement including bags , stationery , books as well as fees for the students</li>
        </ol>
        </p></i></b>
        <br/>
                                        <div className="container p-3">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="input-group mb-3"> <select className="form-select form-control" id="inputGroupSelect02" onChange={(e)=>{setSponserType(e.target.value)}} value={SponserType}>
                                                    <option selected>Sponser Type:</option>
                                                    <option value="Basic">Basic Need </option>
                                                    <option value="Medium">Medium Need</option>
                                                    <option value = "All">All</option>
                                                </select>
                                                </div>
                                            <div className="input-group mb-3"> <select className="form-select form-control" id="inputGroupSelect02" onChange={(e)=>{setUseFor(e.target.value)}} value={UseFor}>
                                                    <option selected>Use For:</option>
                                                    <option value="Zakat">Zakat </option>
                                                    <option value="Sadqa">Sadqa</option>
                                                </select>
                                                </div>
                                                <div className='input-group mb-3'>
                                                <select className="form-select form-control" id="inputGroupSelect02" onChange={(e)=>{setChooseAmounttoGive(e.target.value)}} value={ChooseAmounttoGive}>
                                                    <option selected>Choose Amount to Give</option>
                                                    <option value="Monthly">Monthly </option>
                                                    <option value="GiveOnce">Give Once</option>
                                                </select>
                                                </div> 
                                                <div className='input-group mb-3'><input type="text" className='form-control' placeholder='Rs...Amount' onChange={(e)=>{setAmount(e.target.value)}}/></div>
                                                <div className='input-group mb-3'>
                                                </div>
                                                <div className="input-group mb-3"> <input type="text" className="form-control" placeholder="Donor Name" onChange={(e)=>setDonorName(e.target.value)}/></div>
                                                <div className='input-group mb-3'><input type ="text" className='form-control' placeholder='Phone number' onChange={(e)=>setPhonenumber(e.target.value)}/></div>
                                                <div className='input-group mb-3'><input type ="text" className='form-control' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/></div>
                                                <div className='input-group mb-3'><input type ="text" className='form-control' placeholder='Country' onChange={(e)=>{setCountry(e.target.value)}}/></div>
                                                <div className='input-group mb-3'><textarea type ="text" className='form-control' placeholder='Remarks' onChange={(e)=>{
                                                    setRemark(e.target.value)
                                                }}></textarea></div>                               
                                                <div className="mt-4 d-flex justify-content-end"> <button className="btn btn-success custom-button px-5" type='submit'>Donate</button> 
                                                </div>
                                                </form>
                                              </div>    
                                        </div>
                                    </div>  
          
  );

}