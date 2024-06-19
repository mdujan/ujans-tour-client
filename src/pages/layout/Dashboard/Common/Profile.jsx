
import { Helmet } from "react-helmet-async"
import LoadingSpinner from "../../../../Shared/LoadingSpinner"
import useAuth from "../../../../hook/useAuth"
import useRole from "../../../../hook/useRole"
import { axiosCommon } from "../../../../hook/useAxiosCommon"

const Profile = () => {
  const { user, loading } = useAuth() || {}
  const [role, isLoading] = useRole()


  const handleFeedback=(e)=>{

        e.preventDefault();
        const form=e.target;
        const title=form.title.value;
        const feedback=form.description.value;
        const value={
          title, feedback,email:user?.email
        }   
axiosCommon.post('/feedback',value)
.then(res=>{console.log(res.data)})

  }
 

  console.log(user)
  if (isLoading || loading) return <LoadingSpinner />
  return (
    <div className='flex justify-center items-center my-24 h-screen'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='s shadow-lg rounded-2xl  w-[90%] border-[#734b6d] border-8'>
        <img
          alt='profile'
          src='https://i.ibb.co/25P7thS/10363321-192.jpg'
          className='w-full  rounded-t-lg h-56 object-cover'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-xl h-24 w-24  border-8 border-x-sky-700  '
            />
          </a>

          <p className='p-2 uppercase px-4 text-xs text-white bg-amber-500 rounded-full'>
            {role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-md text-gray-600 '>
              <p className='flex flex-col  bg-violet-100 p-6 rounded-full'>
                Name
                <span className='font-bold text-black  '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col bg-violet-100 p-6 rounded-full'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <button className='bg-[#673d6f] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#523969] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                  Change Password
                </button>
              </div>
            </div>
       
       {
role==='tourist' &&      <form onSubmit={ handleFeedback}
        
className="w-[60%] mx-auto bg-white rounded-lg p-8 flex flex-col md:ml-auto  mt-10 md:mt-0 relative shadow-md"
>
<h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
Share Your Exprerience
</h2>
<div className="relative mb-4">
  <label className="leading-7 text-gray-600">Title</label>
  <input
    type="text"
    placeholder="Title"
    name="title"
    className="w-full bg-white rounded border border-gray-300 focus:border-[#405189] focus:ring-1 focus:ring-[#405189] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  />
</div>
<label className="form-control mb-4">
  <div className="label">
    <span className="">Description</span>
  </div>
  <textarea
    className="textarea textarea-bordered h-24"
    placeholder="Description"
    name="description"
  ></textarea>
</label>
<button className="text-white bg-[#734b6d] border-0 py-2 px-6 focus:outline-none hover:bg-[#3d62df] rounded text-lg">
  Share
</button>
</form>

       }
          </div>
        </div>



      </div>
    </div>
  )
}

export default Profile
