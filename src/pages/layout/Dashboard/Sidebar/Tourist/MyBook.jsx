import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import useAuth from "../../../../../hook/useAuth";
import Swal from "sweetalert2";


const MyBook = () => {
    const { user } = useAuth() || {};
    const [bookItems, setBookItem] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/myBook/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setBookItem(data);
          });
      }, [user,control]);

// delete from my book:-->
const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You you want to cancel this booking!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, cancel it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire(
              "Canceled!",
              "Your booking has been Canceled.",
              "success"
            );
            setControl(!control)
          }
        });

    }

  })
}




console.log(bookItems);

    return (
     
 <div className="" >
      {
        bookItems?.length?
          <div className="">
            <Helmet><title>Tourist | my booking</title></Helmet>
            <div className="w-[40%] mx-auto mb-14 mt-6"><h2 className="mx-auto  w-[100%]  font-bold text-4xl text-stone-700 ">My booked Packages</h2></div>
            {/* <div>
              <hr className="w-[30%] mx-auto mb-9" />


              <Player className="absolute top-24 left-24 "
            autoplay
            loop
            src="https://lottie.host/58d64278-d278-43ae-974e-715d6a2d94ce/Z49brFnRqv.json"
            style={{ height: '70px', width: '90px' }}
          >
            
          </Player>
            </div > */}



            {/* <div className="w-[100%] mx-auto relative" >
              <div >
                <Player className="absolute -top-36 right-36"
            autoplay
            loop
            src="https://lottie.host/3eb1cec0-029c-4994-8792-dd978050d107/vgQV7BLArS.json"
            style={{ height: '100px', width: '100px' }}
          >
            
          </Player>
              </div> */}




              {/* {
                  bookItems?  */}
              {
                bookItems?.map(item => <div key={item._id} item={item} >  
                {/* START TABLE:--> */}
                <div  style={{ backgroundImage: 'url(https://i.ibb.co/nnHyJ0F/5570863.jpg)' }}  className="mb-6 bg-cover bg-repeat-x border border-[#b0c2f5]  rounded-xl container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4  text-2xl text-yellow-700 font-semibold leading-tight">my booking services :</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
				<th className="p-3 text-bold text-lg ">Package Name</th>
					<th className="p-3 text-lg text-bold">Tourist Image</th>
					<th className="p-3 text-lg  text-bold">Booking Date</th>
					<th className="p-3 text-bold text-lg ">Tour Guide </th>
					<th className="p-3 text-bold text-lg  ">Price</th>
					<th className="p-3 text-bold text-lg ">Status</th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b  border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
				<td className="p-3">
						<p>{item.packageName}</p>
					</td>
					<td className="p-">
						<p><img className="w-16 h-16  rounded-full object-cover" src={item.touristPhoto} alt="" /></p>
					</td>
					<td className="p-3">
						<p>{new Date(item.booking_date).toLocaleDateString()}</p>
				
					</td> 
					<td className="p-3">
						<p>{item.tourGuide}</p>
						
					</td>
					<td className="p-3 ml-4">
						<p>{item.price}</p>
					</td>
					<td className=" text-left ">
						<span className="bg-yellow-300 px-3 p-2 shadow-inner shadow-zinc-700  font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>{item.status}</span>
						</span>
					</td>
					<td className=" text-right ">
						{  item.status==='in review'?
                                <button onClick={() => handleDelete(item._id)} className="btn bg-red-700 px-3 p-2 shadow-inner text-white shadow-zinc-700 w-[100px] font-bold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                <span>cancel</span>
                            </button>
                            :
                          
                            <button disabled className="btn bg-red-700 px-3 p-2 shadow-inner text-white shadow-zinc-700  w-[100px] font-bold rounded-md dark:bg-violet-600 dark:text-gray-50">
						Cancel
						</button>


                        }
					</td>
					<td className=" text-right ">
						{  item.status==='in review'?
                                <button disabled className="btn rounded-full bg-violet-500 px-3 p-2 shadow-inner text-white shadow-zinc-700 w-[100px] font-semibold  dark:bg-violet-600 dark:text-gray-50">
                                <span>Pay</span>
                            </button>
                            :
                          
 <button  className=" btn bg-violet-500 px-3 p-2 shadow-inner text-white shadow-zinc-700  w-[100px] font-semibold rounded-full dark:bg-violet-600 dark:text-gray-50">
Pay
</button>


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

   
          :
          <div className="mx-auto mt-20 ">
            <h1 className="text-2xl font-bold text-orange-800 mx-auto w-[20%] mt-10">You, NO package added !</h1>
            <img className="mx-auto w-[40%] h-[40%]" src={'https://i.ibb.co/wBwQ4W1/6922095.jpg'} alt="" /></div>
      }
    </div>




     
    );
};

export default MyBook;