import ImageSlider from '../component/ImageSlider';
import AimGoalVision from '../component/AimGoalVision';
import CEOmessage from '../component/CEOMessage';
import RegisterForASponsership from '../component/RegisterForASponsership';
import HappyStudent from '../component/HappyStudent';
import MakeAppointment from '../component/MakeAppoinment';
import OurTeam from '../component/OurTeam';
import OurBoardOftrustee from '../component/OurBoardOfTrustee';
import Sponsers from '../component/SponserShipList';
import Testinomial from '../component/Testinomial';
import Subscribe from '../component/subscribe';
import Introduction from '../component/Introduction';
function Home(){
    return <div>
        <ImageSlider/>
        <Introduction/>
        <AimGoalVision/>
        <CEOmessage/>
        <HappyStudent/>
        <MakeAppointment/>
        <OurTeam/>
        <OurBoardOftrustee/>
        <Testinomial/>
    </div>
}
export default Home;