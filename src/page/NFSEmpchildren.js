import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function NFSforEmpChildren(){
    const [DateOfIssue,setDateOfIssue] = useState('');
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
         const objt = {DateOfIssue,StudentFatherName,ContactDetailsofwork,DateOfJoining,Designation,
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
    return <div class="bg-light rounded"> 
    <div class="h-100 d-flex flex-column justify-content-center p-5">
    <h1 class="mb-4">Noor HealthCare And Education Foundation Scholarship Form For Emplolyees' Children</h1>
    <br/>
        <b><i><p><span style={{color:'red',fontSize:'25px',padding:'1rem'}}>*Note:This Form is Only  for ISHRAT HUSAIN PAKISTAN INSTITUTE OF LIVING AND LEARNING employees And Only For Current Employees</span></p></i></b>
    <br/>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Employee Details</h1>
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
                    name="StudentFatherName"
                    {
                        ...register("StudentFatherName",{
                        required:true,
                        })}
                   
                  onChange={e=>setStudentFatherName(e.target.value)}
                  
                  />
                    <label for="gname">Student Father Name</label>
                </div>
                {errors.StudentFatherName && errors.StudentFatherName.type === "required" && (
                    <p className="errorMsg">Student Father Name is require.</p>
                  )}
            </div>
            <div class="col-sm-12">
                <div class="form-floating">
                    <textarea type="email" class="form-control border-0" id="gmail" rows={5} placeholder="Name of work place/Address/Contact/Details"
                    name="ContactDetailsOfWork"
                    {
                        ...register("ContactDetailsOfWork",{
                        required:true,
                        })}
                    onChange={e=>setContactDetails(e.target.value)}></textarea>
                    <label for="gmail">Name of work place/Address/Contact/Details</label>
                </div>
                {errors.ContactDetailsofwork && errors.ContactDetailsofwork.type === "required" && (
                    <p className="errorMsg">.Name of work place/Address/Contact/Details is require</p>
                  )}
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
                    onChange={e=>setDateOfJoining(e.target.value)}
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
                    name="MonthlyIncome"
                    {
                        ...register("monthlYIncome",{
                            required:true
                        })

                    }
                    onChange={e=>setMonthlyIncome(e.target.value)}
                    />
                    <label for="cage">Monthly Income </label>
                </div>
                {errors.monthlYIncome && errors.monthlYIncome.type === "required" && (
                    <p className="errorMsg">monthly Income is require</p>
                  )}  
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="otherSourceOfIncomeofSpouse"
                    {
                        ...register('otherSourceOfIncomeofSpouse',{
                            required:true
                        })
                    }
                    onChange={e=>setOtherSourceOfincome(e.target.value)}
                    ></textarea>
                    <label for="cage">Other source of Income </label>
                </div>
                {errors.monthlYIncome && errors.monthlYIncome.type === "required" && (
                    <p className="errorMsg">monthly Income is require</p>
                  )} 
            </div>
            <div class="col-sm-12">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="NoOfDepandantChildren"
                    {
                        ...register('NoOfDepandantChildren',{
                            required:true
                        })
                    }
                    onChange={e=>setNoofDepandantchildren(e.target.value)}
                    ></textarea>
                    <label for="cage">No of depandant children </label>
                </div>
                {errors.NoOfDepandantChildren && errors.NoOfDepandantChildren.type === "required" && (
                    <p className="errorMsg">No of Depandant Children is require</p>
                  )} 
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                     name="homeAddress"
                     {
                         ...register('homeAddress',{
                             required:true
                         })
                     }
                    onChange={e=>sethomeAddress(e.target.value)}
                    ></textarea>
                    <label for="cage">Home Address is require </label>
                </div>
                {errors.homeAddress && errors.homeAddress.type === "required" && (
                    <p className="errorMsg">Home Address is require</p>
                  )} 
           
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    name="StudentMotherName"
                    {
                        ...register('StudentMotherName',{
                            required:true
                        })
                    }
                    onChange={e=>setStudentMotherName(e.target.value)}
                    ></textarea>
                    <label for="cage">Student Mother Name </label>
                </div>
                {errors.StudentMotherName && errors.StudentMotherName.type === "required" && (
                    <p className="errorMsg">Student Mother Name is require</p>
                  )} 
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                     name="Spouse"
                     {
                         ...register('Spouse',{
                             required:true
                         })
                     }
                    onChange={e=>setSpouse(e.target.value)}
                    ></textarea>
                    <label for="cage">Spouse Name </label>
                </div>
                {errors.Spouse && errors.Spouse.type === "required" && (
                    <p className="errorMsg">Spouse Name is require</p>
                  )} 
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                   name="nameOfworkplace"
                   {
                    ...register("nameOfworkplace",{
                            required:true
                    })
                   }
                    onChange={e=>setnameofworkplace(e.target.value)}
                    ></textarea>
                    <label for="cage">Name of Workplace of Spouse</label>
                </div>
                {errors.nameOfworkplace && errors.nameOfworkplace.type === "required" && (
                    <p className="errorMsg">Name of Workplace of Spouse is require</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                       name="Designation"
                       {
                        ...register("Designation",{
                                required:true
                        })
                       } 
                    onChange={e=>setDesignationOfSpouse(e.target.value)}
                    ></textarea>
                    <label for="cage">Designation of Spouse </label>
                </div>
                {errors.Designation && errors.Designation.type === "required" && (
                    <p className="errorMsg"> Designation is require</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                      name="monthlYIncomeOfSpouse"
                      {
                       ...register("monthlYIncomeOfSpouse",{
                               required:true
                       })
                      } 
                    onChange={e=>setMonthlyIncomeOfSpouse(e.target.value)}
                    ></textarea>
                    <label for="cage">Monthly Income of Spouse </label>
                </div>
                {errors.monthlYIncomeOfSpouse && errors.monthlYIncomeOfSpouse.type === "required" && (
                    <p className="errorMsg"> Monthly Income of Spouse is require</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                     name="otherSourceOfIncomeofSpouse"
                     {
                      ...register("otherSourceOfIncomeofSpouse",{
                              required:true
                      })
                     } 
                    onChange={e=>setOtherSourceOfincomeofSpouse(e.target.value)}
                    ></textarea>
                    <label for="cage">Other Source of Income </label>
                </div>
                {errors.otherSourceOfIncomeofSpouse && errors.otherSourceOfIncomeofSpouse.type === "required" && (
                    <p className="errorMsg">Other Source of Income of Spouse is require</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    onChange={e=>sethousewifeorworkingwomen(e.target.value)}
                    name="HouseWifeorworkingwomen"
                    {
                     ...register("HouseWifeorworkingwomen",{
                             required:true
                     })
                    } 
                    ></textarea>
                    <label for="cage">House Wife / Working wife </label>
                </div>
                {errors.HouseWifeorworkingwomen && errors.HouseWifeorworkingwomen.type === "required" && (
                    <p className="errorMsg">House wife or working women is require</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation"
                    onChange={e=>setdetailofScholarshipPill(e.target.value)}
                    name="detailofScholarshipOfPill"
                    {
                     ...register("detailofScholarshipOfPill",{
                             required:true
                     })
                    } 
                    ></textarea>
                    <label for="cage">Details of Scholarship PILL </label>
                </div>
                {errors.detailofScholarshipOfPill && errors.detailofScholarshipOfPill.type === "required" && (
                    <p className="errorMsg">details of Scholarship Of Pill is require.</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <textarea type="text" class="form-control border-0" id="cage" placeholder="Designation" name="detailofScholarshipOfPillotherthanPill"
                    {
                        ...register("detailofScholarshipOfPillotherthanPill",{
                        required:true,
                        })}
                
                    onChange={e=>setdetailofScholarshipOfPillotherthanPill(e.target.value)}
                    ></textarea>
                    <label for="cage">Details of Scholarship other than PILL </label>
                    {errors.detailofScholarshipOfPillotherthanPill && errors.detailofScholarshipOfPillotherthanPill.type === "required" && (
                    <p className="errorMsg">Email is required.</p>
                  )}
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="cage" placeholder="PILL email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:/^[a-zA-Z]+[.][a-zA-Z]+@pill\.org\.pk$/
                    })}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label for="cage">PILL email </label>
                </div>
                {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Email is required.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Please use PILL email</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <select  class="form-select" id="floatingSelect" aria-label="Floating" onChange={(e)=>setPresentOrEx(e.target.value)} value={PresentOrEx}>
                      <option value="">Select Present Or Ex</option>
                      <option value="Present">Present</option>
                      <option value="Ex">Ex</option>
                 </select>
                 {PresentOrEx === "Ex" && (
                  <p className="errorMsg">Only present employees are welcome</p>
                )}
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                <input type = "text" class="form-control border-0" id ="cage" placeholder="PILL CODE"
                name="code"
                    {...register("code", {
                      required: true,
                      pattern:/^\941|^[234]\d{3}$/

                    })}
                    onChange={(e) => setCode(e.target.value)}
                    />
                <label for = "cage">PILL Code</label>
                </div>
                {errors.code && errors.code.type === "required" && (
                    <p className="errorMsg">Phone number is required</p>
                  )}
                  {errors.code && errors.code.type === "pattern" && (
                    <p className="errorMsg">Please input PILL Code.</p>
                  )}
            </div>
            <div>
                <h1>Student Details</h1>
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="gname" placeholder="Date of Issue"
                    name="studentName"
                    {
                        ...register("studentName",{
                        required:true,
                        })}
                
                    onChange={e=>setStudentName(e.target.value)}
                    />
                    <label for="gname">Student Name</label>
                </div>
                {errors.studentName && errors.studentName.type === "required" && (
                    <p className="errorMsg">student Name is require.</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="gname" placeholder="Date of Issue"
                    name="fatherName"
                    {
                        ...register("fatherName",{
                        required:true,
                        })}
                
                    onChange={e=>setFatherName(e.target.value)}
                    />
                    <label for="gname">Father Name</label>
                </div>
                {errors.fatherName && errors.fatherName.type === "required" && (
                    <p className="errorMsg">Father Name is require.</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="gname" placeholder="Date of Issue"
                    name="AgeOfStudent"
                    {
                        ...register("AgeOfStudent",{
                        required:true,
                        })}
                
                    onChange={e=>setAgeOfStudent(e.target.value)}
                    />
                    <label for="gname">Age of Student</label>
                </div>
                {errors.AgeOfStudent && errors.AgeOfStudent.type === "required" && (
                    <p className="errorMsg">Age of Student is require.</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="gname" placeholder="Date of Issue"
                    name="schoolName"
                    {
                        ...register("schoolName",{
                        required:true,
                        })}
                
                    onChange={e=>setSchoolName(e.target.value)}
                    />
                    <label for="gname">School Name</label>
                </div>
                {errors.schoolName && errors.schoolName.type === "required" && (
                    <p className="errorMsg">School Name is require.</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="gname" placeholder="Date of Issue"
                    name="classAndSection"
                    {
                        ...register("classAndSection",{
                        required:true,
                        })}
                
                    onChange={e=>setclaassandsection(e.target.value)}
                    />
                    <label for="gname">Class and Section</label>
                </div>
                {errors.classAndSection && errors.classAndSection.type === "required" && (
                    <p className="errorMsg">class and section is require.</p>
                  )}
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="gname" placeholder="Date of Issue"
                    name="Address_currentdetailsofschool"
                    {
                        ...register("Address_currentdetailsofschool",{
                        required:true,
                        })}
                
                    onChange={e=>setAddress_currentdetailsofschool(e.target.value)}
                    />
                    <label for="gname">Address and Current Details of School</label>
                </div>
                {errors.Address_currentdetailsofschool && errors.Address_currentdetailsofschool.type === "required" && (
                    <p className="errorMsg">Address and Current details of school is require.</p>
                  )}
            </div>
        
            <div class="col-12">
                <div class="form-floating">
                    <textarea class="form-control border-0" placeholder="Last results / percentage" id="message" propsstyle="height: 100px"
                    name="lastResult"
                    {
                        ...register("lastResult",{
                        required:true,
                        })}
                
                    onChange={e=>setLastResult(e.target.value)}
                    ></textarea>
                    <label for="message">last results</label>
                </div>
                {errors.lastResult && errors.lastResult.type === "required" && (
                    <p className="errorMsg">Address and Current details of school is require.</p>
                  )}
            </div>
            <div class="col-12">
                <button class="btn btn-primary w-100 py-3" type="submit">Submit Form</button>
            </div>
        </div>
    </form>
</div>
</div>
}
export default NFSforEmpChildren;