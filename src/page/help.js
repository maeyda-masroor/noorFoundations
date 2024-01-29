import data from './helpData';
import { useState } from "react";
function Help(){
    const [helpperson,sethelpperson] = useState(data);
     return <div class="container">
            <h1 style={{fontSize:'25px'}}>Reach Out if You need any Help</h1>
					{helpperson?.map((helpperson) => {
						return (
              <div class="d-flex align-items-center rounded-lg  shadow-sm border-1" style={{height:'200px'}}>
              <div class="p-5">
                <h3 class="d-flex gap-1 mt-sm-4 mt-1 px-0 mb-1  font-weight-bold" style={{fontSize:'20px'}}>
                {helpperson.designation}
              </h3>
                <p class="d-flex gap-1 mt-sm-4 mt-1 px-0 mb-1">
                {helpperson.name}
                </p>
                <p class="mt-1 mb-1 font-weight-light text-muted">{helpperson.email}</p>
              </div>
            </div>
						);
					})
				}
            
      </div>
}
export default Help;