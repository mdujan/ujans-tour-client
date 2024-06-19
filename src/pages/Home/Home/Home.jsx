
import ReactPlayer from 'react-player'
import axios from "axios";
import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import Cards from "./Cards";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import TourType from './TourType';
import Categories from '../../../components/Categories';
import MeetTourGuide from './MeetTourGuide';
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
            // fetch('http://localhost:5000/packages').then((res) =>
            //     res.json(),
        }
    });
    // console.log(packages);
 
    return (
      
        <div className=''>

             
<div className="mx-auto w-[84%] ">
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
          width={'1074px'}
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
        </div>
    );
};

export default Home;