import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function NFSforEmpChildren(){
    const [errorMessaagre, setErrorMessage] = React.useState("");
    const [StudentFatherName,setStudentFatherName] = useState('');
    const [ContactDetailsofwork,setContactDetails] = useState('');
    const [DateOfJoining,setDateOfJoining] = useState('');
    const [Designation,setDesignation] = useState('');
    const [monthlYIncome,setMonthlyIncome] = useState('');
    const [otherSourceOfIncome,setOtherSourceOfincome] = useState('');
    const [NoOfDepandantChildren,setNoofDepandantchildren] = useState('');
    const [homeAddress,sethomeAddress] = useState('');
    const [StudentMotherName,setStudentMotherName] = useState('');
    const [Spouse,setSpouse] = useState('');
    const [nameOfworkplace,setnameofworkplace] = useState('');
    const [DesignationOFSpouse,setDesignationOfSpouse] = useState('');
    const [monthlYIncomeOfSpouse,setMonthlyIncomeOfSpouse] = useState('');
    const [otherSourceOfIncomeofSpouse,setOtherSourceOfincomeofSpouse] = useState('');
    const [HouseWifeorworkingwomen,sethousewifeorworkingwomen]= useState('');
    const [detailofScholarshipOfPill,setdetailofScholarshipPill] = useState('');
    const [detailofScholarshipOfPillotherthanPill,setdetailofScholarshipOfPillotherthanPill] = useState(''); 
    const [PILL_EMAIL,setEmail] = useState('');
    const [PILL_CODE, setCode] = useState('');
    const [PresentOrEx,setPresentOrEx] =useState('');
    const [studentName,setStudentName] = useState('');
    const [fatherName,setFatherName] =useState('');
    const [AgeOfStudent,setAgeOfStudent] = useState('');
    const [schoolName,setSchoolName] = useState('');
    const [classAndSection,setclaassandsection] = useState('');
    const [Address_currentdetailsofschool,setAddress_currentdetailsofschool]= useState('');
    const [lastResult,setLastResult] = useState('');
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
         const objt = {StudentFatherName,ContactDetailsofwork,DateOfJoining,Designation,
        monthlYIncome,otherSourceOfIncome,NoOfDepandantChildren,homeAddress,
        StudentMotherName,Spouse,nameOfworkplace,
        DesignationOFSpouse,monthlYIncomeOfSpouse,otherSourceOfIncomeofSpouse,
        HouseWifeorworkingwomen,detailofScholarshipOfPill,
        detailofScholarshipOfPillotherthanPill,
        PILL_EMAIL,PILL_CODE,PresentOrEx,studentName,fatherName,AgeOfStudent,
        schoolName,classAndSection,Address_currentdetailsofschool,lastResult};	
        axios.post('https://sheet.best/api/sheets/65020aaa-0042-4ffb-9de7-056fe5ec9352',objt)
        .then(response => {
            console.log(response);
        })
  
    };
    return <div class="container"><h1>Noor Health Care and Education scholarship Form for Employee Kids</h1>
        <br/>
        <b><i><p><span style={{color:'red',fontSize:'25px',padding:'1rem'}}>*Note:This Form is Only  for ISHRAT HUSAIN PAKISTAN INSTITUTE OF LIVING AND LEARNING employees And Only For Current Employees</span></p></i></b>
        <br/>
        <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="rounded h-100 d-flex align-items-center p-5" style={{backgroundColor:'#d7ab3c'}}>
            <div class="row g-3">
                <div>
                  <h1 style={{color:'black'}}>Details Of Employee</h1>
                </div>
                <div class="col-12 col-sm-6">
                    <label for="Student Father Name" style={{color:'white'}}>Student Father Name</label>
                    <input type="text" class="form-control border-0" placeholder="Student Father Name" propsstyle="height: 55px;" onChange={(e) => setStudentFatherName(e.target.value)} required/>
                </div>
                <div class = "col-12 col-sm-6">
                <label for= "" style={{color:'white'}}>Name of work place address contact details</label>
                <textarea type="text" class="form-control border-0" placeholder="Name of work place address contact details" propsstyle="height: 55px;" onChange={(e) => setContactDetails(e.target.value)} required></textarea>
                </div>
                <div class = "col-12 col-sm-6">
                <label for ="" style={{color:'white'}}>Date of Joining</label>
                <input type="date" class="form-control border-0" placeholder="" propsstyle="height: 55px;" onChange={(e) => setDateOfJoining(e.target.value)} required/>
                </div>
                <div class ="col-12 col-sm-6">
                  <label for = "" style={{color:'white'}}>Designation</label>
                  <input type="text" class="form-control border-0" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)} required/>
                </div>
                <div class = "col-12 col-sm-6">
                  <label for= "" style={{color:'white'}}>Monthly Income</label>
                  <input type="text" class="form-control border-0" placeholder="Monthly Income" onChange={(e)=>setMonthlyIncome(e.target.value)} required/>
                </div>
                <div class="col-12 col-sm-6">
                  <label for=""style={{color:'white'}}>Other Source Of Income</label>
                  <textarea type = "text" class="form-control border-0" placeholder="Other Source of income" onChange={(e)=>setOtherSourceOfincome(e.target.value)} required></textarea>
                </div>
                <div class="col-12 col-sm-6">
                  <label for = "" style={{color:'white'}}>No of depandant Children</label>
                  <textarea type="text" class="form-control border-0" placeholder="no of depandant children" onChange={(e)=>{
                    setNoofDepandantchildren(e.target.value)
                  }} required></textarea>
                </div>
                <div class="col-12 col-sm-6">
                    <label for=""style={{color:'white'}}>Home Address</label>
                    <input type="text" class="form-control border-0" placeholder="Home Address" propsstyle="height: 55px;" onChange={(e) => sethomeAddress(e.target.value)} required/>
                </div>
                <div class = "col-12 col-sm-6">
                <label for = "" style={{color:'white'}}>Student Mother Name</label>
                <input type="text" class="form-control border-0" placeholder="Student Mother Name" propsstyle="height: 55px;" onChange={(e) => setStudentMotherName(e.target.value)}required/>
                </div>
                <div class = "col-12 col-sm-6">
                <label for ="" style={{color:'white'}}>Spouse Name</label>
                <input type="text" class="form-control border-0" placeholder="Spouse Name" propsstyle="height: 55px;" onChange={(e) => setSpouse(e.target.value)} required/>
                </div>
                <div class ="col-12 col-sm-6">
                  <label for = "" style={{color:'white'}}>Name of Workplace Of spouse</label>
                  <textarea type="text" class="form-control border-0" placeholder="Name of Workplace" onChange={(e)=>setnameofworkplace(e.target.value)} required></textarea>
                </div>
                <div class = "col-12 col-sm-6">
                  <label for="" style={{color:'white'}}>Designation Of Spouse</label>
                  <input type="text" class="form-control border-0" placeholder="Designation of Spouse" onChange={(e)=>setDesignationOfSpouse(e.target.value)} required/>
                </div>
                <div class="col-12 col-sm-6">
                  <label for = ""style={{color:'white'}}>Monthly Income of Spouse</label>
                  <input type = "text" class="form-control border-0" placeholder="" onChange={(e)=>setMonthlyIncomeOfSpouse(e.target.value)}required/>
                </div>
                <div class="col-12 col-sm-6">
                  <label for="" style={{color:'white'}}>Other Source Of Income</label>
                  <textarea type="text" class="form-control border-0" placeholder="Other Source Of Income" onChange={(e)=>{
                    setOtherSourceOfincomeofSpouse(e.target.value)
                  }} required></textarea>
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>House wife or working woman</label>
                    <input type="text" class="form-control border-0" placeholder="House wife or working women" propsstyle="height: 55px;" onChange={(e) => sethousewifeorworkingwomen(e.target.value)} required/>
                </div>
                <div class = "col-12 col-sm-6">
                <label for = "" style={{color:'white'}}>Detail of Scholarship For Pill</label>
                <textarea type="text" class="form-control border-0" placeholder="Student Father Name" propsstyle="height: 55px;" onChange={(e) => setdetailofScholarshipPill(e.target.value)} required></textarea>
                </div>
                <div class = "col-12 col-sm-6">
                  <label for ="" style={{color:'white'}}>Details of other availled scholarship</label>
                <textarea type="text" class="form-control border-0" placeholder="Student Father Name" propsstyle="height: 55px;" onChange={(e) => setdetailofScholarshipOfPillotherthanPill(e.target.value)}required></textarea>
                </div> 
                <div class="col-12 col-sm-6">
                    <label for="" style={{color:'white'}}>Email</label>
                    <input type="email" class="form-control border-0" placeholder="Your Email" propsstyle="height: 55px;"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:/^[a-zA-Z]+[.][a-zA-Z]+@pill\.org\.pk$/
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Put email in this format example@example.com.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Put email in this format example@example.com</p>
                  )}
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>PILL Code</label>
                    <input type="text" class="form-control border-0" placeholder="Your PILL Code" propsstyle="height: 55px;"
                    name="code"
                    {...register("code", {
                      required: true,
                      pattern:/^\941|^[234]\d{3}$/

                    })}
                    required
                    onChange={(e) => setCode(e.target.value)}
                    />
                  {errors.code && errors.code.type === "required" && (
                    <p className="errorMsg">Phone number is required. / Please put phonenumber in this format ... (123)12345678</p>
                  )}
                  {errors.code && errors.code.type === "pattern" && (
                    <p className="errorMsg">Please put phoneNumber in this format ..... (123)12345678.</p>
                  )}
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Present Or Ex</label>
                    <select onChange={(e)=>{setPresentOrEx(e.target.value)}} value={PresentOrEx} required>
                      <option value="">Select Present Or Ex</option>
                      <option value="Present">Present</option>
                      <option value="Ex">Ex</option>
                 </select>
                 {PresentOrEx === "Ex" && (
                  <p className="errorMsg">Only present employees are welcome</p>
                )}
                </div>
                <div>
                  <h1 style={{color:'black'}}>Student Details</h1>
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Student Name</label>
                    <input type = "text" class="form-control border-0" rows="5" placeholder="Student Name" onChange={e=>{setStudentName(e.target.value)}}
                    required
                  />
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Father Name</label>
                    <input type = "text" class="form-control border-0" rows="5" placeholder="student Name" onChange={(e)=>setFatherName(e.target.value)}
                    name="presentOrEx"
                    required
                    />
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Student Age</label>
                    <input type = "number" class="form-control border-0" rows="5" placeholder="Age Of student" onChange={(e)=>{setAgeOfStudent(e.target.value)}}
                    required
                    />
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>School name Of Student</label>
                    <input type = "text" class="form-control border-0" rows="5" placeholder="School Name of Student" onChange={(e)=>{setSchoolName(e.target.value)}}
                    required/>
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Class and Sections</label>
                    <textarea type = "text" class="form-control border-0" rows="5" placeholder="Class and Section"onChange={(e)=>setclaassandsection(e.target.value)}
                    required></textarea>
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Contact Details of Address of School</label>
                    <textarea type = "text" class="form-control border-0" rows="5" placeholder="Contact Details of Address of school" onChange={(e)=>setAddress_currentdetailsofschool(e.target.value)} required></textarea>
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Last Result  / Percentage Of Student</label>
                    <textarea type = "text" class="form-control border-0" rows="5" placeholder="last Result / percentage of student" onChange={(e)=>setLastResult(e.target.value)}
                    required
                    name="lastresult"></textarea>
                </div>
                <div class="col-12">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required/>
                <label for="vehicle1"> I here by decalare that all the provided information is true</label>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">Submit Your Inquiry</button>
                </div>
            </div>
            </div>
        </form>
</div>
</div>


}
export default NFSforEmpChildren;