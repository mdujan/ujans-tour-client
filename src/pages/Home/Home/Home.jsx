
import ReactPlayer from 'react-player'
import axios from "axios";
import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import Cards from "./Cards";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useRef, useState } from "react";
import TourType from './TourType';
import Categories from '../../../components/Categories';
import MeetTourGuide from './MeetTourGuide';
import TouristStory from './TouristStory';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
// const axiosPublic = axios.create({
//     baseURL: 'http://localhost:5000'
// })
const Home = () => {
    const { user } = useAuth() || {};
   const [tabIndex,setTabIndex]= useState(0)
    const { refetch , data:packages=[] } = useQuery({
        queryKey: ['package'], 
        queryFn: async() =>{
            const res = await axios(`${import.meta.env.VITE_API_URL}/package`);
            return res.data;
            // fetch('http://:5000/packages').then((res) =>
            //     res.json(),
        }
    });
    // console.log(packages);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
      
        <div className=''>
<Helmet>
         <title>Ujan's Tour | Home</title>
       </Helmet>
             
<div className="mx-auto w-[85%] ">
  <div>

  <Swiper    
            spaceBetween={1}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper h-[90vh]"
          >
            <SwiperSlide><img className=' ' src={"https://i.ibb.co/Ycqqtb2/obertraun-5007673-1280.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /><h1 className='w-[13%] mb-32  ml-10 p-4 mx-auto font-semibold text-5xl top-36 right- text-amber-100  absolute'>EXPLORE OUR Ujan's Tour </h1></SwiperSlide>
            
            <SwiperSlide><img className=' ' src={"https://i.ibb.co/YRjky5q/plitvice-939606-1280.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /><h1 className='w-[13%] ml-10 p-4 mx-auto text-yellow-300 font-semibold text-5xl top-28 right-  absolute'>VISITING OUR WEBSITE & EXPRESS YOUR CHOOSE </h1></SwiperSlide>
           
            <SwiperSlide><img className='-opacity-10' src={"https://i.ibb.co/KbQ01Fj/tour-guide-6816049-1280.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /><h1 className='w-[13%] ml-10 p-4 mx-auto font-semibold text-6xl top-28 right-52 text-teal-100  text-white absolute'>Re-inventing the Ujan & Facilities </h1></SwiperSlide>

            {/* <SwiperSlide><img className='' src={"https://i.ibb.co/njpZD3G/top-view-lunchbox-keyboard-with-blank-notebook.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /><h1 className='w-[12%] ml-10 p-4 mx-auto bg-transparent font text-amber-200 font-semibold text-6xl top-28 right-52 text-white absolute'>Bringing Wellness to Fitness & Therapeutic</h1></SwiperSlide> */}

            {/* <SwiperSlide><img className=' ' src={"https://i.ibb.co/QchbZ36/doctor-helping-patient-rehabilitation.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /><h1 className='w-[12%] ml-10 p-4 mx-auto bg-transparent font text-amber-200 font-semibold text-6xl top-28 right-52 text-white absolute'>Bringing Wellness to Fitness & Therapeutic</h1></SwiperSlide> */}

            <div className="autoplay-progress relative" slot="container-end">
              <svg className="absolute  top-0" viewBox="0 0 0 0" ref={progressCircle}>
                <circle cx="4" cy="4" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>


  </div>

  <div>
  <h2 className="mx-auto  my-20 w-[28%] border-b-4  font-bold text-4xl text-stone-700 ">Tourism & Travel</h2>
  </div>
<Tabs  defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
  <TabList>
    <Tab > <h3 className="hover:scale-110 font-bold mx-32">Overview</h3> </Tab>
    <Tab><h3 className="hover:scale-110  font-bold mx-32">Our Packages</h3> </Tab>
    <Tab><h3 className="hover:scale-110  font-bold mx-32">Others</h3> </Tab>
  </TabList>
  <TabPanel><div className='mx-auto w-[100%]'> <ReactPlayer
          className='react-player rounded-full'
          url={[
            'https://www.youtube.com/watch?v=Z0VcD4iKgIk',
            'https://www.youtube.com/watch?v=jOEzMTNrrd4'
          ]}
          width={'1148px'}
          height={'400px'}
        /></div>
  
  </TabPanel>
  <TabPanel ><div className='flex gap-14 '>
  {
                packages.slice(0,3).map(item => <Cards item={item} key={item._id} ></Cards>)
                
                }
    </div></TabPanel>
  <TabPanel><MeetTourGuide></MeetTourGuide> </TabPanel>
</Tabs>
</div>

{/* catagory: */}
<Categories></Categories>


{/* <Tour */}

      <TourType></TourType>
      {/* tourist story    :-- */}
                <TouristStory></TouristStory>
        
        </div>
    );
};

export default Home;