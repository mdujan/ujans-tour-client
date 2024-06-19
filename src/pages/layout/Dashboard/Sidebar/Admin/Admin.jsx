// {/* <li>
// {/* <NavLink to="/dashboard/adminHome">
//     <FaHome></FaHome>
//     Admin My Profile</NavLink> */}
//     <Sidebar label='My Profile' address={'/dashboard/profile'} icon={FaHome}/>
// </li>
// <li>
// {/* <NavLink to="/dashboard/addItems">
//     <FaUtensils></FaUtensils>
//     Add Package</NavLink> */}
// </li>
// <li>
// {/* <NavLink to="/dashboard/manageItems">
//     <FaList></FaList>
//     Manage Users</NavLink> */}
//     <Sidebar  label='Manage Users' address={'/dashboard/manageItems'} icon={FaList}/>
// </li> */}

import { FaList } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Admin = () => {
  return (
    <>
      <Sidebar icon={FaList} label='Manage Users' address='/dashboard/manageUser' />
      <Sidebar icon={FaList} label='Add Package' address='/dashboard/addPackage' />
     
    </>
  )
}

export default Admin
