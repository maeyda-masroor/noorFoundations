
import React, { Component } from "react";
import Chart  from "./Chart";
import Chart2 from './Chart2';

class OurExpenditure extends Component {
  render() {

    return <div><div class="container"><h1>The Source of Funds are as following:</h1><br/>
    <p>Personal and voluntarily donations of Trustees and family and friends of PILL Remedial and Husain Remedies</p>
    <br/>
    <div className="row">
    <div className="col">
    <h1>Following Percentages as defined by <b>Prof. Nusrat Husain:</b></h1>
    <Chart />
    </div>
    <div className="col">
    <h1>Usage of Funds</h1>
    <Chart2/>
    </div>
    </div>
    <p>
    Donation Boxes that are to be placed at PILL offices, Remedial and Pharmacy Counters.<br/>
Other donations in kind.<br/>
Need to arrange and organize fund raising schemes.<br/>
    </p>
    <i><p style={{color:'red'}}>Only available funds will be utilized for the Scholarship grants.<br/>
If the funds are insufficient at any point of time, the management will request to the Trustees to fulfill the deficiency.<br/>
Funds may also be borrowed from PILL and Remedial Centre on temporary basis.<br/>
If someone offers to collect funds for Noor Fellowship voluntarily, a rebate of 10% to 15% can be paid to him / her.<br/>
Incase of the collection is more then 50,000/-, rebate will be 15%, otherwise, it will be 10%.<br/>
</p>
</i>
    </div>
    <div class="container">
    <h1>Financials</h1>
    <p style={{color:'green'}}>In the Year 2019, Noor Fellow ship’s raised PKR 690,000/-.<br/>
    In the Year 2019, we spend 640,000/-.<br/>
    2019 was the first year of surplus for Noor fellowship.<br/>
    </p>
  </div>
  </div>
}
}
export default OurExpenditure;