
import { MdHomeWork } from 'react-icons/md'
import Sidebar from '../Sidebar'
// import Sidebar from '../Sidebar/Sidebar'

const TourGuide = () => {
  return (
    <>
      {/* <Sidebar icon={BsFillHouseAddFill} label='Add Room' address='add-room' /> */}
      <Sidebar icon={MdHomeWork} label='My Assigned Tour' address='/dashboard/myAssign' />
      
    </>
  )
}

export default TourGuide
