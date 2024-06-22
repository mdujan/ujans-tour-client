import { useEffect, useState } from "react";
import useAuth from "../../../../../hook/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Wishlist = () => {
  const { user } = useAuth() || {};
  const [wishlist, setWishlist] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/mywishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data);
      });
  }, [user, control]);
  // delete button:
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You you want to cancel this wish package!",
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
                "Your package of wishlist has been Canceled.",
                "success"
              );
              setControl(!control)
            }
          });

      }

    })
  }

  console.log(wishlist);



  return (
    <div>


      <div className="dark:bg-gray-100 dark:text-gray-900  bg-violet-50">
        {
          wishlist.map(item =>
            <div key={item._id}>
              <div className="container grid mt-3 grid-cols-12 mx-auto dark:bg-gray-50 border-8 border-violet-200 rounded-md">
                {/* <img src={} alt="" /> */}
                <div className=" bg-cover dark:bg-gray-300 col-span-full lg:col-span-4 "> <img src={item?.tourImage0} alt="" className="h-[100%] rounded-md" /></div>

                <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                  <div className="flex justify-start">
                    <span className="px-2 py-1 bg-orange-300 p-8 text-md rounded-full dark:bg-violet-600 dark:text-gray-50">{item?.
                      tourType
                    }</span>
                  </div>
                  <h1 className="text-3xl font-semibold">{item?.packageName}</h1>
                  <p className="flex-1 pt-2"> <span className="font-bold text-lg">Tour Plan : </span>{item?.tourPlan0}</p>
                  <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-600">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                      </svg>
                      <span className="self-center text-sm">{item?.touristEmail
                      }</span>
                    </div>
                    <span className=" bg-slate-600 p-4 rounded-xl font-bold text-xl text-amber-400">Price : {item?.price}</span>
                  </div>
                  <button onClick={() => handleDelete(item._id)} className="bg-gradient-to-r from-red-400 to-red-800 btn btn-ghost  font-semibold text-base text-white w-[30%] " > Delete</button>
                  <Link to={`/details/${item.tourId}`}>
                    <button className="mt-1 bg-gradient-to-r from-[#734b6d] to-blue-500 btn btn-ghost bg-red-600 font-semibold text-base text-white w-[30%] " >Details</button>
                  </Link>
                </div>
              </div>


            </div>)


        }
      </div>


    </div>
  );
};

export default Wishlist;