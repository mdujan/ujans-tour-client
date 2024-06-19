// import { IoMdArrowDropleft } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import GuideModal from "../modal/GuideModel";
import { toast } from "react-toastify";
import { axiosSecure } from "../hook/useAxiosSecure";
import useRole from "../hook/useRole";
import { GrUserAdmin } from "react-icons/gr";

const Navbar = () => {
  const [role, isLoading] = useRole()
  // const axiosSecure = useAxiosSecure()
  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const modalHandler = async () => {
    console.log('I want to be a Tourist guide')
    // closeModal()
    try {
      const currentUser = {
        email: user?.email,
        role: 'tourist',
        status: 'requested',
      }
      const { data } = await axiosSecure.put(`/user`, currentUser)
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success('Success!PLease wait for admin confirmation')
      }
      else {
        toast.success('PLease wait for admin approval ✋')
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message)
    } finally {
      closeModal()
    }

  }





  const links = <>



    <NavLink to={'/'} className={({ isActive }) => isActive ? " text-primary font-bold text-xl font-semibold " : "hover:scale-90 text-xl font-semibold hover:text-red-800"}><li>Home</li></NavLink>
    <NavLink to={'/allitems'} className={({ isActive }) => isActive ? "text-primary font-bold text-xl font-semibold " : "hover:scale-90 text-xl font-semibold hover:text-red-800"}><li>Community</li></NavLink>
    <NavLink to={'/blogs'} className={({ isActive }) => isActive ? "text-primary font-bold text-xl font-semibold " : "hover:scale-90 text-xl font-semibold hover:text-red-800"}><li id='add'>Blogs</li></NavLink>

    <NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-primary  text-xl font-semibold " : "hover:scale-90 text-xl font-semibold hover:text-red-800"}><ReactTooltip
      className='mr-14 p-2'
      anchorId="add"
      place="bottom"
      content="Add Items"
      effect="float"
      type="light"
    /><li>Contact Us</li></NavLink>


  </>

  const { user, logOut } = useContext(AuthContext)
  return (
    <div className="    rounded-b-2xl   shadow-sky-400  mx-auto ">
      <div className="navbar border max-w-screen-xl  border-t-2 rounded-t-xl mt-3 h-[90px] bg-cover  "
      //  style={{backgroundImage: 'url(https://i.ibb.co/nnHyJ0F/5570863.jpg)'}} 
      >

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <div className="">
                {links}
              </div>
            </ul>
          </div >

          <div className=" text-2xl font-bold text-stone-500 ml-4 bg-cover">ART  <span className=" text-2xl font-bold text-purple-500 shadow-2xl shadow-purple-400 rounded-full "  >&</span> CRAFT  </div>

        </div>
        <img className="rounded-full top-2 ml-1  left-44 absolute w-[4%] h-[2%]" src="https://i.ibb.co/rbnwdPV/31530356-bird-2.jpg" alt="" />
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex space-x-14 text-xl font-bold ">

              {links}
            </div>
          </ul>
        </div>
        <div className="navbar-end rounded-full mr-3">

          {user ? <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="  btn-circle ">
              <div className="w-fit h-full rounded-full">
                {
                  user?.photoURL ? <img title={user?.displayName} className="w-full h-full rounded-full" alt="" src={user?.photoURL} /> : <img className=" w-18 rounded-full" src={image} alt="" />
                }
              </div><span ><RiArrowDropDownLine className="ml-3 text-xl" /> </span>
            </div>
            <ul tabIndex={0} className="border-4 menu menu-sm dropdown-content hover:tooltip-open z-[2] p-2 shadow bg-base-100 rounded-box w-52">

              <li><a className="text-teal-500 font-semibold"> {user.email}</a></li>
              <li><a className="font-bold" onClick={logOut}>Logout</a></li>
              <Link to={"/dashboard/profile"}><li><a className="font-bold" >DASHBOARD</a></li></Link>

              {/* modal:----> */}
              <div className='hidden md:block'>
                {/* {!user && ( */}
                {
                    role === 'tourist' ?
                    <button
                      disabled={!user}
                      onClick={() => setIsModalOpen(true)}
                      className='flex disabled:cursor-not-allowed bg-purple-100 py-3 px-3 cursor-pointer hover:bg-neutral-100 py- px-1 text-sm font-semibold rounded-box  transition'
                    >
                      Tour guide request<GrUserAdmin className="text-xl ml-3"/>
                    </button>
                    : <span></span>}



                {/* modal  */}
                <GuideModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler} ></GuideModal>
                {/* )} */}
              </div>



            </ul>

          </div> :
            <div className="dropdown dropdown-end">
              <div className="">
                <div className="rounded-md w-[89px] bg-purple-300">
                  <Link to={'login'} id='login' className="btn btn-outline w-full text-black-500 ">Login</Link >
                  <ReactTooltip
                    className='mr-14 p-2'
                    anchorId="login"
                    place="bottom"
                    content="Login here"
                    effect="float"
                    type="light"
                  />

                </div>
              </div>

            </div>}


        </div>
      </div>
    </div>

  );
};

export default Navbar;