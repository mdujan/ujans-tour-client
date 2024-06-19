import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { axiosCommon } from "../../hook/useAxiosCommon";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";

const Booked = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user,loading}=useAuth() ||{}
    const {id} =useParams()
  const [guideName,setGuideName]=useState('')
    
    const {  data:tourGuide=[],isLoading } = useQuery({
        queryKey: ['tourGuide',id], 
        queryFn: async() =>{
            const res = await axiosCommon.get('/tourGuide');
            return res.data;
          
        }
    });



    console.log(tourGuide);
    console.log(guideName);




    
const {  data:packages=[],isLoading:load } = useQuery({
        queryKey: ['packages',id], 
        queryFn: async() =>{
            const res = await axiosCommon.get(`/details/${id}`);
            return res.data;
            // fetch('http://localhost:5000/packages').then((res) =>
            //     res.json(),
        }
    });

    if(isLoading || load || loading ){
        return <LoadingSpinner></LoadingSpinner>
    }
    const { tripTitle,
        // Tour plan1,Tour plan2,Tour plan0,
        price,
        tourImage0,tourImage1,tourImage2,tourImage3,
        // tourImage1,tourImage2,tourImage3,
        tourSection,tourPlan0,_id
        // tourGuides
    } = packages;
    console.log(packages)


    const handlePurchase =  event =>{
        event.preventDefault();
        if(guideName === ''){
            return toast.error('please select Tour guide name')
        }
        const form= event.target;
        
        const touristPhoto = form.touristPhoto.value;
        const touristName = form.touristName.value; 
   
        const price= form.price.value; 
        // const service_plan = form.service_plan.value; 
       
      
        const touristEmail = form.touristEmail.value; 
       const booking_date = startDate;
         
        
        // const touristName =user.displayName;
        // const touristEmail =user.email;
        // const touristPhoto =user.photoURL;
        
        const booking = { touristPhoto,
            packageName:tripTitle,
            touristName,
            price,
            touristEmail,
            booking_date,
            tourId:_id,
            tourGuide:guideName,
            status:'in review'}
        console.log(booking);
        // send data to the server:->
        fetch(`${import.meta.env.VITE_API_URL}/booked`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Booked!',
                    text: 'Booked successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
            else{
                toast.error(`${data.message}`)
            }
        })
        } 
    



    return (
        <div className="bg-slate-200 p-20">
            <div>
            <h2 className="text-xl text-center font-semibold  text-violet-900 ">Package Name  : <span className="text-amber-500">  {tripTitle}</span> </h2>
        </div>
             <form onSubmit={handlePurchase}  method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                          

                                            {/* <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Address</label>

                                                <input type="text" name="address" placeholder="address" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div> */}
                                            {/* <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Service Plan</label>

                                                <input type="text" name="service_plan" placeholder="plan" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div> */}
                                            <div>
                                                <label className="block text-sm text-gray-700 font-bold dark:text-gray-300">Booking date</label>
                                                <DatePicker className=" block  mt-2 w-placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" selected={startDate} onChange={(date) => setStartDate(date)} />


                                            </div>

                                            <div className="col-span-full my-2 border shadow-sm shadow-indigo-500 p-2">
                                                <label htmlFor="service_status" className="text-sm font-bold border-b-2 ">Tour Guide Name</label>
                                                <select onChange={(e)=>setGuideName(e.target.value)} defaultValue={'tourGuide'} id="service_status border-2 border-black " name="service_status" className=" w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                                                    <option className=" text-slate-700  " value="tourGuide" disabled>select here a Tour guide name :-</option>
                                                    {
                                                        tourGuide.map((item,idx)=>   <option key={idx} className="font-bold text-purple-600  " value={item.name}>{item.name}</option>)
                                                    }
                                                </select>
                                            </div>
                                            {/* <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Address</label>

                                                <input  disabled type="text" name="address" placeholder="address" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div> */}
                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Tourist_image_Url</label>

                                                <input defaultValue={user?.photoURL} disabled type="text" name="touristPhoto" placeholder="touristPhoto" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Tourist Nmae</label>

                                                <input defaultValue={user?.displayName}  disabled type="text" name="touristName" placeholder="touristName" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Price</label>

                                                <input defaultValue={price} disabled type="text" name="price" placeholder="price" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Provider Email</label>

                                                <input defaultValue={user?.email} disabled type="text" name="touristEmail" placeholder="touristEmail" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
<button className="my-3 btn btn-block bg-amber-700 p-2  text-white text-lg font-semibold">BOOK NOW !</button>
<ToastContainer />
                                        </form>
        </div>
    );
};

export default Booked;