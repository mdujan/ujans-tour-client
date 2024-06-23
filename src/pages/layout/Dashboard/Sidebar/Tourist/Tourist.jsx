import { CgUserList } from "react-icons/cg";
import Sidebar from "../Sidebar";
// import { GrUserAdmin } from 'react-icons/gr'
import { SiWish } from "react-icons/si";
const Tourist = () => {
    return (
        <>
        {/* <Sidebar icon={BsFillHouseAddFill} label='Add Room' address='add-room' /> */}
        <Sidebar icon={CgUserList} label='My Bookings' address='/dashboard/myBook' />
        <Sidebar icon={SiWish} label='Wishlist' address='/dashboard/mywishlist'/>
        {/* <div
        //   onClick={() => setIsModalOpen(true)}
          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
        >
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div> */}

      </>
    );  
};

export default Tourist;