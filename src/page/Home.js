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
function Home(){
    return <div>
        <ImageSlider/>
        <AimGoalVision/>
        <CEOmessage/>
        <RegisterForASponsership/>
        <HappyStudent/>
        <MakeAppointment/>
        <OurTeam/>
        <OurBoardOftrustee/>
        <Sponsers/>
        <Testinomial/>
    </div>
}
export default Home;