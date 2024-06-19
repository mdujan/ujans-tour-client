// import DatePicker from "react-datepicker";

// import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import useAuth from "../../hook/useAuth";
// import Swal from "sweetalert2";

// import "react-datepicker/dist/react-datepicker.css";
// import Swal from "sweetalert2";

const Details = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const packages = useLoaderData();
    const { tourType,tripTitle,
        // Tour plan1,Tour plan2,Tour plan0,
        price,_id,
        tourImage0,tourImage1,tourImage2,tourImage3,
        // tourImage1,tourImage2,tourImage3,
        tourSection,tourPlan0
        // tourGuides
    } = packages;
    console.log(packages)
    // const {user}=useAuth()

// purchase---> 

// const handlePurchase =  event =>{
//     event.preventDefault();
    
//     const form= event.target;
    
//     const service_image = form.service_image.value;
//     const service_name = form.service_name.value; 
//     // const subcategory_name = form.subcategory_name.value; 
//     // const short_description= short_description; 
//     const price= form.price.value; 
//     const service_plan = form.service_plan.value; 
//     // const processing_time = form.processing_time.value; 
//     // const stock_status = form.stock_status.value; 
//     const address = form.address.value; 
//     const service_status = form.service_status.value; 
//     const provider_email = form.provider_email.value; 
//    const booking_date = startDate;
     
//     const user_email =user.email;
//     const user_name =user.displayName;
//     const user_image =user.photoURL;
    
//     const booking = {service_image ,service_name,price,service_status,provider_email,booking_date,address,service_plan,user_email,user_name,user_image,}
//     console.log(booking);
//     // send data to the server:->
//     fetch(`${import.meta.env.VITE_API_URL}/book`,{
//         method:'POST',
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify(booking)
//     })
//     .then(res=> res.json())
//     .then(data=>{
//         console.log(data);
//         if(data.insertedId){
//             Swal.fire({
//                 title: 'Purchase!',
//                 text: 'Purchase successfully',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//               })
//         }
//     })
//     } 




    return (
        <div>
            <h1 className="mt-10 mb-6 mx-auto w-[19%] font-bold text-4xl ">Service Dteails</h1>
            <hr className="bg-black w-[29%] mx-auto " />
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className="w-[100%] mt-1 mx-auto ">
                    <div className=" card lg:card-side shadow-xl bg-stone-300">
                        <div className="grid grid-cols-2 col-span-1 rounded-xl  bg-gray-100 mr-2 w-full  m-1 shadow-purple-400  shadow-2xl">  
                        <img className="rounded-sm h-350px  w-200px" src={tourImage0}  alt="Album" />
                        <img className="rounded-sm h-350px w-200px" src={tourImage1}  alt="Album" />
                        <img className="rounded-sm h-350px w-200px" src={tourImage2}  alt="Album" />
                        <img className="rounded-sm h-350px w-200px" src={tourImage3}  alt="Album" />

                        </div>


                        <div className="card-body w-[100%] mt-3" >
                            <h2 className="card-title text-3xl font-extrabold">{tourType}</h2>
                            <p className="dark:text-gray-800 lg:text-lg text-xl font-bold text-slate-500 mt-2 flex-grow-0 ">Location :  <span className="text-purple-500" >{tripTitle}</span></p>
                            <hr />
                            <p className="flex-grow-0  text-2xl py-2 font-bold text-amber-600 ">{ }</p>
                            <hr />

                            <p className="text-lg"><span className="font-bold mt-0 mr-3">Description : </span><span className="text-stone-600 ">{tourSection}</span></p>

                            <p className="py-1 mt- "><span className="font-extrabold text-center text-xl w-[4%]  mx-auto text-amber-600">Provider Info :-</span>
                            </p>

<div>

<div tabIndex={0} className="collapse bg-purple-300 text-primary-content focus:bg-purple-600 focus:text-secondary-content">
  <div className="collapse-title text-blaxk font-semibold">
   day 1
  </div>
  <div className="collapse-content"> 
    <p>{tourPlan0}</p>
  </div>
</div>

</div>
                            {/* <img src={tourImage0} alt="" className="ml-64 object-cover object-center lg:w-20 h-20 w-7  rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                            <span className="mx-2 text-center bg-slate-100 p-2 rounded-full text-purple-500   font-semibold  "><span className="text-stone-500 font-bold">Providers Name : </span>   </span>

                            <span className="mx-2 text-center bg-purple-200 p-2 rounded-full text-purple-500   font-semibold  ">{ }</span> */}
                            <hr />
                            <ul className="p-2 ">
                                <li className="mb-2"><span className="text-gray-500 font-semibold"></span>{tourSection}<span className="pl-[10%] font-extrabold"></span> </li>
                                {/* <li className="mb-2  "><span className="text-gray-500 font-semibold">Rating :</span> <span className="pl-[10%] font-extrabold">{}</span> </li>
                <li className="mb-2 mt-3"><span className="text-gray-500 font-semibold">Procerssing time :</span> <span className="pl-[1%] font-extrabold">{}</span> </li> */}

                                <li className="mb-2 mt-5"><span className="text-gray-500 font-bold text-xl">Price :</span> <span className="px-[9%] ml-10 text-xl   bg-zinc-700 rounded-md p-3 mt-4 text-amber-400 font-extrabold">{price}</span> </li>
<Link to={`/booked/${_id}`}> 
<button className="btn  ml-96 mt-16 border-4 border-violet-200 shadow-xl shadow-violet-300 text-white  bg-[#734b6d] p-4">
    Booking Form
</button>

</Link>

                            </ul>
                          
                        </div>
                    </div>

                </div>
            </div>
        </div>

//  <div><h1>{packages.price}</h1></div> 

    );
};

export default Details;