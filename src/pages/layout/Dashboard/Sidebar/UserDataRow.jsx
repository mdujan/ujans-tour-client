
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
// import { useState } from 'react'
// import UpdateUserModal from '../../Modal/UpdateUserModal'
// import { useMutation } from '@tanstack/react-query'
// import useAxiosSecure from '../../../hooks/useAxiosSecure'
// import toast from 'react-hot-toast'
// import useAuth from '../../../hooks/useAuth'
import {  FaUsers } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const UserDataRow = ({ user, handleMakeAdmin ,handleMakeTourGuide}) => {


//   const { user: loggedInUser } = useAuth()

//   const [isOpen, setIsOpen] = useState(false)
//   const axiosSecure = useAxiosSecure()
//   const { mutateAsync } = useMutation({
//     mutationFn: async role => {
//       const { data } = await axiosSecure.patch(
//         `/users/update/${user?.email}`,
//         role
//       )
//       return data
//     },
//     onSuccess: data => {
//       refetch()
//       console.log(data)
//       toast.success('User role updated successfully!')
//       setIsOpen(false)
//     },
//   })

//   //   modal handler
//   const modalHandler = async selected => {
//     if (loggedInUser.email === user.email) {
//       toast.error('Action Not Allowed')
//       return setIsOpen(false)
//     }

//     const userRole = {
//       role: selected,
//       status: 'Verified',
//     }

//     try {
//       await mutateAsync(userRole)
//     } catch (err) {
//       console.log(err)
//       toast.error(err.message)
//     }
//   }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${
              user.status === 'verified' ? 'text-green-600' : 'text-sky-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>
      <td>
      <button
                                        onClick={() => handleMakeAdmin(user)}
                                        disabled={user.role !=='tourist'}
                                        className="btn btn-outline text-white bg-gradient-to-r from-[#8ea1d8] to-[#8f087b]">
                                        <RiAdminFill className='text-xl' />Make Admin
                                    </button>
                                    <button
                                        onClick={() => handleMakeTourGuide(user)}
                                        disabled={user.role !=='tourist'}
                                        className="btn btn-md ml-4 text-black  bg-gradient-to-r from-[#dbbf71] to-[#2aa4ad]">
                                        <FaUsers className="
                                        text-2xl"></FaUsers>
                                   Make TourGuide </button>

      </td>
  
      

      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </button> */}
        {/* Update User Modal */}
        {/* <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td> */}
    </tr>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
  handleMakeAdmin:PropTypes.func,
  handleMakeTourGuide:PropTypes.func
}

export default UserDataRow
