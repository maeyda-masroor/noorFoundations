import './Ourhistory.module.css';
import data from './data.json';
import TimeLine from '../component/TimeLine';


function History(){
    return <div>
    <TimeLine data={data} />
  </div>

}
export default History;