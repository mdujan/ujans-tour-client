import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hook/useAuth";
import { ToastContainer, toast } from "react-toastify";


const Cards = ({ item }) => {
    const { tourType, tripTitle, price,tourPlan0, tourImage0, _id } = item;
    const { user } = useAuth() || {}

    const touristName = user?.displayName;
    const touristEmail = user?.email;
    const touristPhoto = user?.photoURL;

    const booking = {
        touristPhoto,
        packageName: tripTitle,
        tourId: _id,
        tourType,
        touristName,
        tourImage0,
        price,
        touristEmail,
        tourPlan0
      
    }
    console.log(booking);

    const handlewishlist = () => {



        // send data to the server:->
        fetch(`${import.meta.env.VITE_API_URL}/wishlist`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'added wislist!',
                        text: 'package added to wishlist successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                        else{
                            toast.error('already added to the wishlist')
                        }


            })
    }




    return (
        <div className="relative w-[320px] ">
            <Link to={`/details/${_id}`} className="">
                {/* <h2>{tourType}</h2> */}
                <div className="  overflow-hidden  bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{tourType}</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{tripTitle}</p>
                    </div>

                    <div>
                        <img className="object-cover w-full h-48 mt-2" src={tourImage0} alt="NIKE AIR" />

                    </div >
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900 ">
                        <h1 className="text-lg font-bold text-white">$ {price}</h1>
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                    </div>
                </div>
            </Link>
            {/* button: */}
            <div className=" absolute top-3 right-16 h-[20px] w-[10px]">
                <button className="btn rounded-box font-extrabold bg-transparent hover:bg-transparent outline-none border-none ">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={handlewishlist} className="h-10 w-10 mx-auto  text-red-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cards;