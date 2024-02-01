import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function MakeAnInquiry(){
    const [errorMessaagre, setErrorMessage] = React.useState("");
    const [EmployeeName,setEmployeeName] = useState('');
    const [EmployeeCode,setEmployeeCode] = useState('');
    const [EmployeeEmail,setEmployeeEmail] = useState('');
    const [PresentOrExEmployee,setPresentOrEx] = useState('');
    const [DateofJoiningatPILL,setDateOfJoiningAtPill] = useState('');
    const [Designation,setDesignation] = useState('');
    const [Department,setDepartment] = useState('');
    const [HusbandName,sethusbandName] = useState('');
    const [HouseAddresofEmployee,setHouseAddressOfEmp] = useState('');
    const [officialphonenumber,setofficalphonenumber] = useState('');
    const [DetailsofAlreadyavailedscholarshipsfromPILL,setdetailofScholarshipPill] = useState('');
    const [DetailsofavailedscholarshipsfromotherthanPILL,setdetailofScholarshipOfPillotherthanPill] = useState('');
    const [Workplaceaddress,setworkplaceAddress] = useState('');
    const [MonthlyIncome,setMonthlyIncome] = useState('');
    const [OthersourcesofIncome,setOtherSourceOfincome]= useState('');
    const [Father_Husband_Wifemonthlyincome,setfather_husband_wife_monthly_income] = useState('');
    const [Detailoffamilymember,setdetailoffamilymember] = useState(''); 
    const [residenceown_rented,setresidenceown_rented] = useState('');
    const [Name_of_Institute_taking_Admission, setnameofinstitutetakingadmission] = useState('');
    const [Nameofcourse,setnameofcourse] =useState('');
    const [Benefitstoorganizationfromthecourse,setbenefittoorganizationfromthecourse] = useState('');
    const [RecommendationfromHR_Headofthedepartment,setRecommendationFormHR] =useState('');
    const [dateofIssue,setDateOfIssue] = useState('');
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
         const objt = {EmployeeName,EmployeeCode,EmployeeEmail,PresentOrExEmployee,
        DateofJoiningatPILL,Designation,Department,HusbandName,HouseAddresofEmployee,
    officialphonenumber,DetailsofAlreadyavailedscholarshipsfromPILL,
    DetailsofavailedscholarshipsfromotherthanPILL,Workplaceaddress,
    MonthlyIncome,OthersourcesofIncome,Father_Husband_Wifemonthlyincome
    ,Detailoffamilymember,residenceown_rented,Name_of_Institute_taking_Admission,
    Nameofcourse,Benefitstoorganizationfromthecourse,RecommendationfromHR_Headofthedepartment
    ,dateofIssue};	
        axios.post('https://sheet.best/api/sheets/19c28d68-27d7-4b45-a162-29897d059e69',objt)
        .then(response => {
            console.log(response);
        })
  
    };
    return <div class="container"><h1>Noor Health Care and Education scholarship Form for Employee Themselves</h1>
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
                  <label for="employeecode" class="form-label">Date of Issue Of Form:</label>
                  <input type="date" class="form-control border-0" placeholder="Date of Issue" propsstyle="height: 55px;" onChange={(e) => setDateOfIssue(e.target.value)}/>
                </div>
                <div class="col-12 col-sm-6">
                    <label for="Employee Name:" style={{color:'white'}}>Employee Name</label>
                    <input type="text" class="form-control border-0" placeholder="Employee Name" propsstyle="height: 55px;" onChange={(e) => setEmployeeName(e.target.value)}/>
                </div>
                <div class = "col-12 col-sm-6">
                <label for= "" style={{color:'white'}}>Employee Code</label>
                <textarea type="text" class="form-control border-0" placeholder="Employee Code:" propsstyle="height: 55px;" onChange={(e) => setEmployeeCode(e.target.value)}></textarea>
                </div>
                <div class = "col-12 col-sm-6">
                <label for ="" style={{color:'white'}}>Employee Email</label>
                <input type="text" class="form-control border-0" placeholder="Employee Email" propsstyle="height: 55px;" onChange={(e) => setEmployeeEmail(e.target.value)}/>
                </div>
                <div class ="col-12 col-sm-6">
                  <label for = "" style={{color:'white'}}>Date of joining At PILL</label>
                  <input type="date" class="form-control border-0" placeholder="Date of Joining AT PILL" onChange={(e)=>setDateOfJoiningAtPill(e.target.value)}/>
                </div>
                <div class = "col-12 col-sm-6">
                  <label for= "" style={{color:'white'}}>Designation</label>
                  <input type="text" class="form-control border-0" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}/>
                </div>
                <div class="col-12 col-sm-6">
                  <label for=""style={{color:'white'}}>Department</label>
                  <textarea type = "text" class="form-control border-0" placeholder="Department" onChange={(e)=>setDepartment(e.target.value)}></textarea>
                </div>
                <div class="col-12 col-sm-6">
                  <label for = "" style={{color:'white'}}>Employee Father/ Husband Name</label>
                  <textarea type="text" class="form-control border-0" placeholder="Employee Father / Husband Name" onChange={(e)=>{
                    sethusbandName(e.target.value)
                  }}></textarea>
                </div>
                <div class="col-12 col-sm-6">
                    <label for=""style={{color:'white'}}>Home Address of empolyee</label>
                    <input type="text" class="form-control border-0" placeholder="Home Address of employee" propsstyle="height: 55px;" onChange={(e) => setHouseAddressOfEmp(e.target.value)}/>
                </div>
                <div class = "col-12 col-sm-6">
                <label for = "" style={{color:'white'}}>Official phone number / Personal Cell Number</label>
                <input type="text" class="form-control border-0" placeholder="offical phone number/ personal cell number" propsstyle="height: 55px;" onChange={(e) => setofficalphonenumber(e.target.value)}/>
                </div>
                <div class = "col-12 col-sm-6">
                <label for ="" style={{color:'white'}}>Details of Already availed scholarships from PILL If any:</label>
                <input type="text" class="form-control border-0" placeholder="Details of Already availed scholarships from PILL {If any}:" propsstyle="height: 55px;" onChange={(e) => setdetailofScholarshipPill(e.target.value)}/>
                </div>
                <div class ="col-12 col-sm-6">
                  <label for = "" style={{color:'white'}}>Details of availed scholarships from other than PILL (If any):</label>
                  <textarea type="text" class="form-control border-0" placeholder="Details of availed scholarships from other than PILL {If any}:" onChange={(e)=>setdetailofScholarshipOfPillotherthanPill(e.target.value)}></textarea>
                </div>
                <div class = "col-12 col-sm-6">
                  <label for="" style={{color:'white'}}>Workplace Address</label>
                  <input type="text" class="form-control border-0" placeholder="Workplace Address" onChange={(e)=>setworkplaceAddress(e.target.value)}/>
                </div>
                <div class = "col-12 col-sm-6">
                <label for = "" style={{color:'white'}}>Monthly Income:</label>
                <textarea type="text" class="form-control border-0" placeholder="Monthly income" propsstyle="height: 55px;" onChange={(e) => setMonthlyIncome(e.target.value)}></textarea>
                </div>
                <div class = "col-12 col-sm-6">
                  <label for ="" style={{color:'white'}}>Other Source Of income</label>
                <textarea type="text" class="form-control border-0" placeholder="other source of income" propsstyle="height: 55px;" onChange={(e) => setOtherSourceOfincome(e.target.value)}></textarea>
                </div> 
                <div class="col-12 col-sm-6">
                    <label for="" style={{color:'white'}}>Email</label>
                    <input type="email" class="form-control border-0" placeholder="Your Email" propsstyle="height: 55px;"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:/^[a-zA-Z]+[.][a-zA-Z]+@pill\.org\.pk$/
                    
                    })}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
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
                    <input type="text" class="form-control border-0" placeholder="Your Code" propsstyle="height: 55px;"
                    name="code"
                    {...register("code", {
                      required: true,
                      pattern:/^\941|^[234]\d{3}$/

                    })}
                    onChange={(e) => setOtherSourceOfincome(e.target.value)}
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
                    <select onChange={(e)=>setPresentOrEx(e.target.value)} value={PresentOrExEmployee}>
                      <option value="">Select Present Or Ex</option>
                      <option value="Present">Present</option>
                      <option value="Ex">Ex</option>
                 </select>
                 {PresentOrExEmployee === "Ex" && (
                  <p className="errorMsg">Only present employees are welcome</p>
                )}
                </div>
                
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Details of Family Member</label>
                    <input type = "text" class="form-control border-0" rows="5" placeholder="Student Name" onChange={e=>{setdetailoffamilymember(e.target.value)}}
                  />
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>residence own rented</label>
                    <input type = "text" class="form-control border-0" rows="5" placeholder="student Name" onChange={(e)=>setresidenceown_rented(e.target.value)}
                    name="presentOrEx"
                    />
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Name of Institute taking Admission</label>
                    <input type = "text" class="form-control border-0" rows="5" placeholder="name of institute taking admission" onChange={(e)=>{setnameofinstitutetakingadmission(e.target.value)}}
                    />
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>name Of course</label>
                    <input type = "text" class="form-control border-0" rows="5" placeholder="Name of course " onChange={(e)=>{setnameofcourse(e.target.value)}}/>
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Name of Institute (taking admission)</label>
                    <textarea type = "text" class="form-control border-0" rows="5" placeholder="Name of Institute (taking admission)"onChange={(e)=>setnameofinstitutetakingadmission(e.target.value)}></textarea>
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Benefit to organization from the course</label>
                    <textarea type = "text" class="form-control border-0" rows="5" placeholder="Benefit to Organization from the course" onChange={(e)=>setbenefittoorganizationfromthecourse(e.target.value)}></textarea>
                </div>
                <div class="col-12 col-sm-6">
                    <label for = "" style={{color:'white'}}>Recommendation From HR/Head of Department</label>
                    <textarea type = "text" class="form-control border-0" rows="5" placeholder="Recommendation From HR/Head of Department" onChange={(e)=>setRecommendationFormHR(e.target.value)}
                    name="lastresult"></textarea>
                </div>
                <div class="col-12">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required/>
                <label for="vehicle1"> I here by decalre that all the provided information is true</label>
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
export default MakeAnInquiry;