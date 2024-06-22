
import useAuth from "../../../../../hook/useAuth";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

import { axiosCommon } from "../../../../../hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../../Shared/LoadingSpinner";



const MyAssignedTours = () => {
    const {user} =useAuth() || {};

//     const [bookings , setbookings] = useState([])
//     useEffect (() => {
//        getData()
//     },[user] )
   
//    const getData = async () => {
//            const{data} = await axios(
//                `${import.meta.env.VITE_API_URL}/myAssigned/${user?.displayName}`
//            )
//            setbookings(data)
//    }
   

   const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['bookings',user?.displayName],
    queryFn: async () => {
      const { data } = await axiosCommon(`/myAssigned/${user?.displayName}`)
      return data
    },
  })


console.log(bookings)
if(isLoading){
    return <LoadingSpinner></LoadingSpinner>
}


// admin button: 
const handleAccept= item =>{
    axiosCommon.patch(`/accept/${item._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `ACCEPETED!`,
                showConfirmButton: true,
                timer: 1500
              });
        }
    })
}
  const handleReject= item =>{
    axiosCommon.patch(`/reject/${item._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `REJECTED !`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}




    return (
        <div className="" >
          <Helmet>
         <title>Ujan's Tour | My assigned</title>
       </Helmet>
        {
          bookings?.length?
            <div className="">
              <Helmet><title>Tourist | My Assigned </title></Helmet>
              <div className="w-[35%] mx-auto mb-14 mt-6"><h2 className="mx-auto  w-[100%]  font-bold text-4xl text-stone-700 ">My Assigned<span className="text-yellow-500 font-semibold">()</span></h2></div>
              <div>
                <hr className="w-[30%] mx-auto mb-9" />
  
  
                {/* <Player className="absolute top-24 left-24 "
              autoplay
              loop
              src="https://lottie.host/58d64278-d278-43ae-974e-715d6a2d94ce/Z49brFnRqv.json"
              style={{ height: '70px', width: '90px' }}
            >
              
            </Player> */}
              </div >
  
  
  
              <div className="w-[100%] mx-auto relative" >
                <div >
                  {/* <Player className="absolute -top-36 right-36"
              autoplay
              loop
              src="https://lottie.host/3eb1cec0-029c-4994-8792-dd978050d107/vgQV7BLArS.json"
              style={{ height: '100px', width: '100px' }}
            >
              
            </Player> */}
                </div>
  
  
  
  
                {/* {
                    bookings?  */}
                {
                  bookings?.map(item => <div key={item._id} item={item} >  
                  {/* START TABLE:--> */}
                  <div  style={{ backgroundImage: 'url(https://i.ibb.co/nnHyJ0F/5570863.jpg)' }}  className="mb-6 bg-cover bg-repeat-x   border-violet-400 border-8 rounded-xl container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4  text-2xl text-teal-600 font-semibold leading-tight">Booking pandings :</h2>
      <div className="overflow-x-auto " >
          <table className="min-w-full text-sm">
              <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-36 "  />
              </colgroup>
              <thead className="dark:bg-gray-300">
                  <tr className="text-left">
                  <th className="p-3 text-bold text-lg ">Package Name</th>
                      <th className="p-3 text-lg text-bold">Tourist Image</th>
                      <th className="p-3 text-lg  text-bold">Date</th>
                      {/* <th className="p-3 text-bold text-lg ">Address</th> */}
                      <th className="p-3 text-bold text-lg  text-right">Price</th>
                      <th className="p-3 text-bold text-lg text-right pl-5 "> Status</th>
                      <th className="p-3 text-bold text-lg ml-4 "></th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="border-b  border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                          <p>{item.packageName}</p>
                      </td>
                      <td className="p-">
                          <p><img className="w-48 h-24 rounded-lg bg-cover" src={item.touristName} alt="" /></p>
                      </td>
                      <td className="p-3">
                          <p>{new Date(item.booking_date).toLocaleDateString()}</p>
                  
                      </td>
                      
                      <td className="p-3 text-right">
                          <p>{item.price}</p>
                      </td>
                      {/* <td   className="p-3 text-right ">
                          <span className="bg-yellow-300  p-2 shadow-inner shadow-zinc-700  font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                              
                              <select onChange={(e)=>handleStatus(e.target.value,item._id)} id="service_status" name="service_status" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                            <option value="panding">{item.service_status}</option>
                <option value="working">working</option>
                

                            <option value="complete">complete</option>
                        </select>
                          </span>
                      </td> */}
                      <td className="p-3 ml-6">
                     {
                       item.status==="accepted"? <button disabled
                       onClick={() => handleAccept(item)}
                       // disabled={user.role !=='tourist'}
                       className="btn btn-lg bg-green-400">Accept</button>

                      : <button
                      onClick={() => handleAccept(item)}
                      // disabled={user.role !=='tourist'}
                      className="btn btn-lg bg-green-400">Accept </button>
                     }
                         
                      </td>
                      <td>
                    {
                      item.status==='rejected'?
                      <button disabled
                      onClick={() => handleReject(item)}
                      // disabled={user.role !=='tourist'}
                      className="btn btn-lg bg-red-500">Reject </button>
                    :  
                    <button
                    onClick={() => handleReject(item)}
                    // disabled={user.role !=='tourist'}
                    className="btn btn-lg bg-red-500">Reject</button>
                    
                    }

                  </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
                  
                  </div>)
  
                }
                {/* : <h1>NOTHING FIND</h1>
    
                 }  */}
  
  
  
  
  
              </div>
  
            </div>
            :
            <div className="mx-auto mt-20 ">
              <h1 className="text-2xl font-bold text-orange-800 mx-auto w-[20%] mt-10">NO tourist select you yet!</h1>
              <img className="mx-auto w-[40%] h-[40%]" src={'https://i.ibb.co/wBwQ4W1/6922095.jpg'} alt="" /></div>
        }
      </div>

    );
};

export default MyAssignedTours;