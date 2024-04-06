
import React, { Component } from "react";
import Chart  from "./Chart";
import Chart2 from './Chart2';
import { FormattedMessage } from "react-intl";
import { Form } from "react-router-dom";

class OurExpenditure extends Component {
  render() {

    return <div><div class="container"><h1><FormattedMessage id = 'fundsource'defaultMessage="The Source of Funds are as following:"/></h1><br/>
    <p><FormattedMessage id = "personal" defaultMessage="Personal and voluntarily donations of Trustees and family and friends of PILL Remedial and Husain Remedies"/></p>
    <br/>
    <div className="row">
    <div className="col">
    <h1><FormattedMessage id = "personal2" defaultMessage="Following Percentages as defined by Prof. Nusrat Husain:"/></h1>
    <Chart />
    </div>
    <div className="col">
    <h1><FormattedMessage id = "usageoffund" defaultMessage="Usage of Funds"/></h1>
    <Chart2/>
    </div>
    </div>
    <p><FormattedMessage id = "donation" defaultMessage="
    Donation Boxes that are to be placed at PILL offices, Remedial and Pharmacy Counters.<br/>
Other donations in kind"/>
    </p>
    <i><p style={{color:'red'}}><FormattedMessage id = "donation2" defaultMessage="Only available funds will be utilized for the Scholarship grants."/><br/>
<FormattedMessage id = "donation3" defaultMessage="If the funds are insufficient at any point of time, the management will request to the Trustees to fulfill the deficiency."/><br/>
<FormattedMessage id = "donation4" defaultMessage="Funds may also be borrowed from PILL and Remedial Centre on temporary basis"/>.<br/>
<FormattedMessage id = "donation5" defaultMessage="If someone offers to collect funds for Noor Fellowship voluntarily, a rebate of 10% to 15% can be paid to him / her."/><br/>
<FormattedMessage id = "donation6" defaultMessage="Incase of the collection is more then 50,000/-, rebate will be 15%, otherwise, it will be 10%."/><br/>

</p>
</i>
</div>
  </div>
}
}
export default OurExpenditure;