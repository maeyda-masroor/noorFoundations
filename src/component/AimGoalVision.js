import {FormattedMessage, FormattedDate} from 'react-intl';
function Aim_Goal_Vision(){
    return <center>
    <div class="container"> 
    <div class="d-flex flex-row align-items-center justify-content-center">
    <div class="row justify-content-center">
    <div class="col-12 col-sm-6 col-lg-3 "><h1><FormattedMessage id = "aim" defaultMessage="goal"/></h1>
    <p><FormattedMessage id='goal_introduction' defaultMessage="Raise awareness of the organization and clarify its mission.
•	Connect the organization's services with people who need them.
•	Activate possible donors and volunteers.
•	Engage followers with ongoing news and events.
•	Raise awareness of the organization"/></p>
    </div>
    <div class="col-12 col-sm-6 col-lg-3"><h1><FormattedMessage id= "vision_introduction" defaultMessage="vision"/>
    </h1>
    <p> <FormattedMessage id= "vision" defaultMessage="The NOOR education and Health care Foundation is currently working in Pakistan and Kenya and has a vision to expand this scheme globally."/>
    
<br/></p>
    </div>
    <div class="col-12 col-sm-6 col-lg-3"><h1>
        <FormattedMessage id = "mission" defaultMessage="Mission"/>
    </h1>
    <p><FormattedMessage
                    id = "mission_description"
                    defaultMessage="To build a close knit community of academia, health care professionals,  guardians and students with special emphasis on mental & physical health, special education, capacity building, & to implement  of education in under privileged communities so that no one is left behind. "/></p>
    </div>
    </div>
    </div>
    </div>
  </center>
}
export default Aim_Goal_Vision;