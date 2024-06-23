import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {FacebookShareButton,FacebookShareCount} from "react-share";
import useAuth from "../../../hook/useAuth";


const TouristStory = () => {

    const { user } = useAuth() || {};
    const [tabIndex,setTabIndex]= useState(0)
     const { refetch , data:feedback=[] } = useQuery({
         queryKey: ['feedback'], 
         queryFn: async() =>{
             const res = await axios(`${import.meta.env.VITE_API_URL}/feedback`);
             return res.data;
             // fetch('http://localhost:5000/packages').then((res) =>
             //     res.json(),
         }
     });
     console.log(feedback);
    let url="https://www.facebook.com";
    return (
        <div className="">
            <h2 className="mx-auto  my-20 w-[20%]  font-bold text-4xl text-stone-700 ">Tourist Story</h2>
<div className="bg-violet-100 w-[50%] rounded-r-full ">
    {
feedback.map((item)=>  <div key={item._id} className="relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
<div className="p-3 space-y-1">
    <span className="text-xs bg-blue-200 rounded-full font-semibold text-amber-700 p-2 mb-4">{item.email}</span>
    <h3 className="text-3xl font-semibold ">{item.title}</h3>
    <p className="text-sm dark:text-gray-600">{item.feedback}</p>
</div>
<div className="ml-4">
   
<FacebookShareButton> <FacebookShareCount url={url}>
  {(shareCount) => <span className="myShareCountWrapper">{shareCount}</span>}
</FacebookShareCount></FacebookShareButton>

           <div className=" bg-blue-500 rounded-full  p-5">
           <a href={`https://www.facebook.com`} target="_blank">
    <svg className="share-icon ml-7" xmlns="http://www.w3.org/2000/svg" style={{width:30}} viewBox="0 0 512 512" aria-label="fb" role="img"><path d="m375.14,288l14.22,-92.66l-88.91,0l0,-60.13c0,-25.35 12.42,-50.06 52.24,-50.06l40.42,0l0,-78.89s-36.68,-6.26 -71.75,-6.26c-73.22,0 -121.08,44.38 -121.08,124.72l0,70.62l-81.39,0l0,92.66l81.39,0l0,224l100.17,0l0,-224l74.69,0z"></path></svg> 
    </a>
           </div>
           <h1 className="font-semibold text-blue-900">Share on facebook</h1>

</div>
</div>

)


    }
</div>
 
          
            {/* <FacebookIcon size={44} round={true} /> */}

        </div>
    );
};

export default TouristStory;