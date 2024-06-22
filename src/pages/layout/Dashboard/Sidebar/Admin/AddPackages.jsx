import Swal from "sweetalert2";
import useAuth from "../../../../../hook/useAuth";
import { Helmet } from "react-helmet-async";


const AddPackages = () => {
    const { user } = useAuth()

    console.log(user)
    const handleAddItem = event => {
        event.preventDefault();

        const form = event.target;
        const tourType = form.tourType.value;
        const tripTitle = form.tripTitle.value;
        const price = form.price.value;
        const tourImage0 = form.tourImage0.value;
        const tourImage1 = form.tourImage1.value;
        const tourImage2 = form.tourImage2.value;
        const tourImage3 = form.tourImage3.value;
      
        // const subcategory_name = form.subcategory_name.value; 
        const tourSection  = form.tourSection.value;
        const tourPlan0 = form.tourPlan0.value;
        const tourPlan1= form.tourPlan1.value;
        const tourPlan2 = form.tourPlan2.value;
      
        // const rating1= form.rating.val1e; 
        // const processing_time = form.processing_time.value; 
        // const stock_status = form.stock_status.value; 
        // const customization = form.customization.value; 
        // const user_email = form.user_email.value; 
       
        

        const newItem = { 
            tourType,tripTitle,tourImage0,tourImage1,tourImage2,tourImage3,price,
            tourSection,tourPlan0,tourPlan1,tourPlan2}
        console.log(newItem);
        // send data to the server:->
        fetch(`${import.meta.env.VITE_API_URL}/package`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Package added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <section className="p-6 mx-16 rounded-xl dark:bg-gray-100 dark:text-gray-900 bg-indigo-100" style={{ backgroundImage: 'url(https://i.ibb.co/Yb2Xkkc/9743528.png)' }}>
            <Helmet>
         <title>Ujan's Tour | add package</title>
       </Helmet>
            <div><h1 className="mt-6 mb-5 mx-auto w-[19%] font-bold text-4xl ">Add Packages</h1>
                <hr className="bg-black w-[29%] mx-auto " /></div>
            {/* <Helmet><title>Art & Crft | add items</title></Helmet> */}
            <form onSubmit={handleAddItem} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    {/* <!-- Personal Information --> */}
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <div className="col-span-full">
                            <label htmlFor="tourType" className="text-sm">Tour Type</label>
                            <input id="tourType" type="text" name="tourType" placeholder="tourType" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                    </div>
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <div className="col-span-full">
<label htmlFor="tripTitle" className="text-sm">Trip Title</label><input id="tripTitle" type="text" name="tripTitle" placeholder="tripTitle" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                    </div>
                     {/* <!-- service_price --> */}
                     <div className="col-span-full">
                            <label htmlFor="price" className="text-sm">Price</label>
                            <input id="price" type="number" name="price" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                     <div className="col-span-full">
                            <label htmlFor="tourGuides" className="text-sm">Tour Guides</label>
                            <input id="tourGuides" type="number" name="tourGuides" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        {/* <!-- tourType URL --> */}
                        <div className="col-span-full">
                            <label htmlFor="tourImage0" className="text-sm">Image URL 1</label>
                            <input id="tourImage0" type="url" name="tourImage0" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="tourImage1" className="text-sm">Image URL 2</label>
                            <input id="tourImage1" type="url" name="tourImage1" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="tourImage2" className="text-sm">Image URL 3</label>
                            <input id="tourImage2" type="url" name="tourImage2" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="tourImage3" className="text-sm">Image URL 4</label>
                            <input id="tourImage3" type="url" name="tourImage3" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="tourGuides" className="text-sm">Tour Guides</label>
                            <input id="tourGuides" type="text" name="tourGuides" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
              
                        {/* <!-- Subcategory Name --> */}

                        {/* <!-- Short Description --> */}
                        <div className="col-span-full">
                            <label htmlFor="tourSection" className="text-sm">Short Description</label>
                            <textarea id="tourSection" name="tourSection" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required></textarea>
                        </div>
                       
                        {/* <!-- Rating --> */}

                        {/* <!-- Customization --> */}

                        {/* <!-- Processing Time --> */}

                        {/* <!-- Stock Status --> */}
                        {/* <div className="col-span-full">
                       <label htmlFor="stock_status" className="text-sm">Stock Status</label>
                       <select id="stock_status" name="stock_status" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                           <option value="in_stock">In Stock</option>
                           <option value="made_to_order">Made to Order</option>
                       </select>
                   </div> */}
                        {/* <!-- User Email --> */}
                        {/* <div className="col-span-full">
                       <label htmlFor="user_email" className="text-sm">User Email</label>
                       <input id="user_email" type="email" name="user_email" placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                   </div> */}
                        {/* <!-- User Name --> */}
                        <div className="col-span-full">
                            <label htmlFor="tourPlan0" className="text-sm">Tour Plan (day 1)</label>
                            <input id="tourPlan0" type="text" name="tourPlan0" placeholder="tourPlan0" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="tourPlan1" className="text-sm">Tour Plan (day 2)</label>
                            <input id="tourPlan1" type="text" name="tourPlan1" placeholder="tourPlan1" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="tourPlan2" className="text-sm">Tour Plan (day 3)</label>
                            <input id="tourPlan2" type="text" name="tourPlan2" placeholder="tourPlan2" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        {/* <!-- Add Button --> */}
                        <div className="col-span-full">
                            <button type="submit" className="px-4 py-2 bg-[#734b6d] border-indigo-300 ml-56 mt-6 border-4 text-white rounded-md">Add Package</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddPackages;