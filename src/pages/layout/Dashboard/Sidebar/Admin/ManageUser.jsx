import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../../../../Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hook/useAxiosSecure";
import UserDataRow from "../UserDataRow";
import Swal from "sweetalert2";


const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    //   Fetch users Data
    const {
      data: users = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const { data } = await axiosSecure(`/user`)
        return data
      },
    })

// admin button: 
    const handleMakeAdmin= user =>{
      axiosSecure.patch(`/user/admin/${user._id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Admin Now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
  }
    const handleMakeTourGuide= user =>{
      axiosSecure.patch(`/user/guide/${user._id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Tour Guide Now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
  }





    if (isLoading) return <LoadingSpinner />
    return (
       <> <div className='container mx-auto px-4 sm:px-8'>
       <Helmet>
         <title>Manage Users</title>
       </Helmet>
       <div className='py-8 rounded-3xl w-[100%] ' style={{backgroundImage: 'url(https://i.ibb.co/0VDZWJn/1798.jpg)'}}>
       <h1 className="text-center text-[#4c4091] text-2xl font-semibold border-b-2" >Manage User</h1>
         <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4  bg-gradient-to-r from-[#3b408d] to-[#f3caed] rounded-full m-5 overflow-x-auto'> 
           <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
             <table className='min-w-full leading-normal   m-7'>
               <thead>
                 <tr>
                   <th
                     scope='col'
                     className='px-5 py-3 bg-white border-b border-gray-200  text-stone-700 font-bold   text-left text-sm uppercase '
                   >
                     Email
                   </th>
                   <th
                     scope='col'
                     className='px-5 py-3 bg-white  border-b border-gray-200 text-stone-700 font-bold text-left text-sm uppercase '
                   >
                     Role
                   </th>
                   <th
                     scope='col'
                     className='px-5 py-3 bg-white  border-b border-gray-200 text-stone-700 font-bold  text-left text-sm uppercase '
                   >
                     Status
                   </th>

                   <th
                     scope='col'
                     className='px-32 py-3 bg-white  border-b border-gray-200 text-stone-700 font-bold  text-left text-sm uppercase ' >
                     Action
                   </th>
             
                 </tr>
               </thead>
               <tbody>
                 {users.map(user => (
                   <UserDataRow
                     key={user?._id}
                     user={user}
                     handleMakeAdmin={handleMakeAdmin}
                     handleMakeTourGuide={handleMakeTourGuide}

                     refetch={refetch}
                   />
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div></>
    );
};

export default ManageUser;