import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function NFSEmpthemselves(){
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
    const [AddressofInstitute_Websiteofinstitute,setAddressofInstitute] = useState('');
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
    MonthlyIncome,OthersourcesofIncome,Father_Husband_Wifemonthlyincome,
    AddressofInstitute_Websiteofinstitute,Detailoffamilymember,residenceown_rented,Name_of_Institute_taking_Admission,
    Nameofcourse,Benefitstoorganizationfromthecourse,RecommendationfromHR_Headofthedepartment
    ,dateofIssue};	
        axios.post('https://sheet.best/api/sheets/19c28d68-27d7-4b45-a162-29897d059e69',objt)
        .then(response => {
            console.log(response);
        })
  
    };
    return <div class="bg-light rounded"> 
    <div class="h-100 d-flex flex-column justify-content-center p-5">
    <h1 class="mb-4">Noor HealthCare And Education Foundation Scholarship Form For Emplolyees' Children</h1>
    <br/>
        <b><i><p><span style={{color:'red',fontSize:'25px',padding:'1rem'}}>*Note:This Form is Only  for ISHRAT HUSAIN PAKISTAN INSTITUTE OF LIVING AND LEARNING employees And Only For Current Employees</span></p></i></b>
    <br/>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <h1>Employee Details</h1>
        </div>
        <div class="row g-3">
        <div class="col-sm-6">
        <div class="form-floating">
                    <input type="date" class="form-control border-0" id="gname" placeholder="Date of Issue"
                    name="DateOfIssue"
                    {
                        ...register("DateOfIssue",{
                        required:true,
                        })}
                
                    onChange={e=>setDateOfIssue(e.target.value)}
                    />
                    <label for="gname">Date of Issue</label>
                </div>
                {errors.DateOfIssue && errors.DateOfIssue.type === "required" && (
                    <p className="errorMsg">Date Of Issue is require.</p>
                  )}
            </div>
            <div class="col-sm-6">
                
                <div class="form-floating">
                <input type="text" class="form-control border-0" id="gname" placeholder="student Father Name"
                    name="EmployeeName"
                    {
                        ...register("EmployeeName",{
                        required:true,
                        })}
                   
                  onChange={e=>setEmployeeName(e.target.value)}
                  
                  />
                    <label for="gname">Employee Name</label>
                </div>
                {errors.EmployeeName && errors.EmployeeName.type === "required" && (
                    <p className="errorMsg">Student Father Name is require.</p>
                  )}
            </div>
            <div class="col-sm-6">
                
                <div class="form-floating">
                <input type="text" class="form-control border-0" id="gname" placeholder="student Father Name"
                    name="EmployeeCode"
                    {
                        ...register("EmployeeCode",{
                        required:true,
                        pattern:/^\941|^[234]\d{3}$/
                    })}
                   
                  onChange={e=>setEmployeeCode(e.target.value)}
                  
                  />
                    <label for="gname">Employee Code</label>
                </div>
                {errors.EmployeeCode && errors.EmployeeCode.type === "required" && (
                    <p className="errorMsg">Phone number is required</p>
                  )}
                  {errors.EmployeeCode && errors.EmployeeCode.type === "pattern" && (
                    <p className="errorMsg">Please input PILL Code.</p>
                  )}
            </div>
            <div class="col-sm-6">
                
                <div class="form-floating">
                <input type="text" class="form-control border-0" id="gname" placeholder="student Father Name"
                    name="EmployeeEmail"
                    {
                        ...register("EmployeeEmail",{
                        required:true,
                        pattern:/^[a-zA-Z]+[.][a-zA-Z]+@pill\.org\.pk$/
                    })}
                   
                  onChange={e=>setEmployeeEmail(e.target.value)}
                  
                  />
                    <label for="gname">Employee Email</label>
                </div>
                {errors.EmployeeEmail && errors.EmployeeEmail.type === "required" && (
                    <p className="errorMsg">Phone number is required</p>
                  )}
                  {errors.EmployeeEmail && errors.EmployeeEmail.type === "pattern" && (
                    <p className="errorMsg">Please input PILL email.</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <select  class="form-select" id="floatingSelect" aria-label="Floating" onChange={(e)=>setPresentOrEx(e.target.value)} value={PresentOrExEmployee}>
                      <option value="">Select Present Or Ex</option>
                      <option value="Present">Present</option>
                      <option value="Ex">Ex</option>
                 </select>
                 {PresentOrExEmployee === "Ex" && (
                  <p className="errorMsg">Only present employees are welcome</p>
                )}
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="date" class="form-control border-0" id="cname" placeholder="Date of Joining"
                    name="DateOfJoining"
                    {
                        ...register("DateOfJoining",{
                            required: true,
                        })
                    }
                    onChange={e=>setDateOfJoiningAtPill(e.target.value)}
                    />
                    <label for="cname">Date of Joining</label>
                </div>
                {errors.DateOfJoining && errors.DateOfJoining.type === "required" && (
                    <p className="errorMsg">Date of Joining is require</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="Designation"
                    {
                        ...register("Designation",{
                            required:true
                        })
                    }
                    onChange={e=>setDesignation(e.target.value)}
                    />
                    <label for="cage">Designation </label>
                </div>
                {errors.Designation && errors.Designation.type === "required" && (
                    <p className="errorMsg">Designation is require</p>
                  )}  
            </div>
            
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="Designation"
                    {
                        ...register("Department",{
                            required:true
                        })
                    }
                    onChange={e=>setDepartment(e.target.value)}
                    />
                    <label for="cage">Department </label>
                </div>
                {errors.Department && errors.Department.type === "required" && (
                    <p className="errorMsg">Department is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="HusbandName"
                    {
                        ...register("HusbandName",{
                            required:true
                        })

                    }
                    onChange={e=>sethusbandName(e.target.value)}
                    />
                    <label for="cage">Husband Name </label>
                </div>
                {errors.HusbandName && errors.HusbandName.type === "required" && (
                    <p className="errorMsg">Husband Name is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="cage" placeholder="official phone number"
                    name="officialphonenumber"
                    {
                        ...register("officialphonenumber",{
                            required:true
                        })
                    }
                    onChange={e=>setofficalphonenumber(e.target.value)}
                    />
                    <label for="cage">official phone number</label>
                </div>
                {errors.officialphonenumber && errors.officialphonenumber.type === "required" && (
                    <p className="errorMsg">official phonenumber is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="HouseAddresofEmployee"
                    {
                        ...register("HouseAddresofEmployee",{
                            required:true
                        })
                    }
                    onChange={e=>setHouseAddressOfEmp(e.target.value)}
                    />
                    <label for="cage">House Address of Emplolyee</label>
                </div>
                {errors.officialphonenumber && errors.officialphonenumber.type === "required" && (
                    <p className="errorMsg">House Address of Employees is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="detailofScholarshipfromPill"
                    {
                        ...register("detailofScholarshipfromPILL",{
                            required:true
                        })
                    }
                    onChange={e=>setdetailofScholarshipPill(e.target.value)}
                    ></textarea>
                    <label for="cage">detail of Scholarship from PILL</label>
                </div>
                {errors.DetailsofAlreadyavailedscholarshipsfromPILL && errors.DetailsofAlreadyavailedscholarshipsfromPILL.type === "required" && (
                    <p className="errorMsg">Details of Already availed scholarships from PILL is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="DetailsofavailedscholarshipsfromotherthanPILL"
                    {
                        ...register("DetailsofavailedscholarshipsfromotherthanPILL",{
                            required:true
                        })
                    }
                    onChange={e=>setdetailofScholarshipOfPillotherthanPill(e.target.value)}
                    ></textarea>
                    <label for="cage">Details of Scholarship other than PILL</label>
                </div>
                {errors.DetailsofavailedscholarshipsfromotherthanPILL && errors.DetailsofAlreadyavailedscholarshipsfromPILL.type === "required" && (
                    <p className="errorMsg">Detail of scholarships other than is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name=""
                    {
                        ...register("MonthlyIncome",{
                            required:true
                        })
                    }
                    onChange={e=>setMonthlyIncome(e.target.value)}
                    ></textarea>
                    <label for="cage">Monthly Income</label>
                </div>
                {errors.MonthlyIncome && errors.MonthlyIncome.type === "required" && (
                    <p className="errorMsg">Monthly Income is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="workplaceAddress"
                    {
                        ...register("workplaceAddress",{
                            required:true
                        })
                    }
                    onChange={e=>setworkplaceAddress(e.target.value)}
                    ></textarea>
                    <label for="cage">Work place Address</label>
                </div>
                {errors.Workplaceaddress && errors.Workplaceaddress.type === "required" && (
                    <p className="errorMsg">work place address is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name=""
                    {
                        ...register("websiteofinstitutetakingadmission",{
                            required:true
                        })
                    }
                    onChange={e=>setAddressofInstitute(e.target.value)}
                    ></textarea>
                    <label for="cage">website / Address of Institute</label>
                </div>
                {errors.AddressofInstitute_Websiteofinstitute && errors.AddressofInstitute_Websiteofinstitute.type === "required" && (
                    <p className="errorMsg">website / address is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="Father_Husband_wife_monthly_income"
                    {
                        ...register("Father_Husband_wife_monthly_income",{
                            required:true
                        })
                    }
                    onChange={e=>setfather_husband_wife_monthly_income(e.target.value)}
                    ></textarea>
                    <label for="cage">Father Husband Wife Monthly income</label>
                </div>
                {errors.Father_Husband_Wifemonthlyincome && errors.Father_Husband_Wifemonthlyincome.type === "required" && (
                    <p className="errorMsg">Father Husband Wife monthly income is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="otherSourceOfIncome"
                    {
                        ...register("otherSourceOfIncome",{
                            required:true
                        })
                    }
                    onChange={e=>setOtherSourceOfincome(e.target.value)}
                    ></textarea>
                    <label for="cage">Other Source of Income</label>
                </div>
                {errors.OthersourcesofIncome && errors.OthersourcesofIncome.type === "required" && (
                    <p className="errorMsg">Other Source of Income is require</p>
                  )}  
            </div>
            
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="DetailsoffamilyMember"
                    {
                        ...register("DetailsoffamilyMember",{
                            required:true
                        })
                    }
                    onChange={e=>setdetailoffamilymember(e.target.value)}
                    ></textarea>
                    <label for="cage">Details of family Member</label>
                </div>
                {errors.Detailoffamilymember && errors.Detailoffamilymember.type === "required" && (
                    <p className="errorMsg">Detail of scholarships other than is require</p>
                  )}  
            </div>
            
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="residence_own_rented"
                    {
                        ...register("residence_own_rented",{
                            required:true
                        })
                    }
                    onChange={e=>setresidenceown_rented(e.target.value)}
                    />
                    <label for="cage">residence own rented</label>
                </div>
                {errors.residenceown_rented && errors.residenceown_rented.type === "required" && (
                    <p className="errorMsg">Residence own rented is require</p>
                  )}  
            </div>
            
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="nameofinstitutetakingadmission"
                    {
                        ...register("nameofinstitutetakingadmission",{
                            required:true
                        })
                    }
                    onChange={e=>setnameofinstitutetakingadmission(e.target.value)}
                    ></textarea>
                    <label for="cage">Name of INSTITUTE taking admission</label>
                </div>
                {errors.Name_of_Institute_taking_Admission && errors.Name_of_Institute_taking_Admission.type === "required" && (
                    <p className="errorMsg">name of INSTITUTE taking admission than is require</p>
                  )}  
            </div>
            
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="Nameofcourse"
                    {
                        ...register("Nameofcourse",{
                            required:true
                        })
                    }
                    onChange={e=>setnameofcourse(e.target.value)}
                    ></textarea>
                    <label for="cage">name of course </label>
                </div>
                {errors.DetailsofavailedscholarshipsfromotherthanPILL && errors.DetailsofAlreadyavailedscholarshipsfromPILL.type === "required" && (
                    <p className="errorMsg">Detail of scholarships other than is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="Benefitstoorganizationfromthecourse"
                    {
                        ...register("Benefitstoorganizationfromthecourse",{
                            required:true
                        })
                    }
                    onChange={e=>setbenefittoorganizationfromthecourse(e.target.value)}
                    ></textarea>
                    <label for="cage">Benefits to organization from the course</label>
                </div>
                {errors.DetailsofavailedscholarshipsfromotherthanPILL && errors.DetailsofAlreadyavailedscholarshipsfromPILL.type === "required" && (
                    <p className="errorMsg">Detail of scholarships other than is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="RecommendationfromHR_Headofthedepartment"
                    {
                        ...register("RecommendationfromHR_Headofthedepartment",{
                            required:true
                        })
                    }
                    onChange={e=>setRecommendationFormHR(e.target.value)}
                    ></textarea>
                    <label for="cage">Recommendation from HR_Head of the department</label>
                </div>
                {errors.DetailsofavailedscholarshipsfromotherthanPILL && errors.DetailsofAlreadyavailedscholarshipsfromPILL.type === "required" && (
                    <p className="errorMsg">Detail of scholarships other than is require</p>
                  )}  
            </div>
            
            
            
            
            
            
            
        </div>
            <div class="col-12">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required/>
                <label for="vehicle1"> I here by decalre that all the provided information is true</label>
            </div>
            <div class="col-12">
                <button class="btn btn-primary w-100 py-3" type="submit">Submit Form</button>
            </div>
    </form>
</div>
</div>

}
export default NFSEmpthemselves;