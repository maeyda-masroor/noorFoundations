import { FormattedMessage } from "react-intl";

function Flyer(){
    return <div>
        <center>
            <h1 style={{paddingTop:'15px'}}><FormattedMessage id = "donation_request" defaultMessage="Doantion Request for 2023 to 2024"/> </h1>
            <br/>
            <img src = "img/9.jpeg" width={500} height={500}/>
            <br/>
            <br/>
            <img src = "img/10.jpeg" width={500} height={500}/>
        </center>
    </div>
}
export default Flyer;