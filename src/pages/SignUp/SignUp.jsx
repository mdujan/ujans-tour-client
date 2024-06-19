import { updateProfile } from "firebase/auth";
import useAuth from "../../hook/useAuth";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { createUser, googleLogin, logOut } = useAuth();
    const {
		register,
		handleSubmit,
		formState: { errors } } = useForm();
	const onSubmit = data => {
		const { email, password } = data
		console.log(data)
		const name = data.name
		const photo = data.photoUrl
		console.log(data)
		console.log(name)
		createUser(email, password)
			.then((result) => {
				console.log(result)
				updateProfile(auth.currentUser, {
					displayName: name, photoURL: photo
				}).then((result) => {
					console.log(result)
				}).catch((error) => {
					console.log(error)
					// toast.error('  Succesfully login  ')
				});
				toast.success('  Succesfully reister  ')
				logOut();

			})
			.catch((error) => {
				console.log(error)
				toast.error('  already register  ')
			});



	};
    return (
        <div>
        {/* <Helmet><title>Art & Craft | Register</title></Helmet> */}
       <ToastContainer />
       <div className="w-full mx-auto  bg-purple-400 shadow-amber-400 shadow-2xl rounded-badge bg-cover max-w-5xl p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800"style={{backgroundImage: 'url(https://i.ibb.co/1G9MNn9/update-gym-page.jpg)'}} data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="2000">
           <h1 className="text-2xl font-bold text-center">Register</h1>
           <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
               <div className="space-y-1 text-sm">
                   <label htmlFor="username" className="block dark:text-gray-600 text-amber-400 font-bold">Username</label>
                   <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"  {...register("name", { required: true })} />
                   {errors.exampleRequired && <p className="text-red-600  font-semibold ml-1"> 😞This field is required</p>}



               </div>
               <div className="space-y-1 text-sm">
                   <label htmlFor="email" className="block dark:text-gray-600 text-amber-400 font-bold">Email</label>
                   <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"  {...register("email", { required: true })} />
                   {errors.email && <p className="text-red-600  font-semibold ml-1"> 😞This field is required</p>}

               </div>
               <div className="space-y-1 text-sm">
                   <label htmlFor="photoUrl" className="block dark:text-gray-600 text-amber-400 font-bold">Photo url</label>
                   <input type="text" name="photoURL" id="photoURL" placeholder="photoUrl" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("photoUrl", { required: true })} />
                   {errors.photoUrl && <p className="text-red-600 pt-1 font-semibold ml-6"> This field is required</p>}

               </div>
               <div className="space-y-1 text-sm">
                   <label htmlFor="password" className="block dark:text-gray-600 text-amber-400 font-bold">Password</label>
                   <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })} />


                   {/* {value:/[A-Za-z]{3}/ message:'password must have uppercase and lowercase'} */}

                   {errors.password && errors.password.type === "required" && (
                       <span className="text-red-600  font-semibold ml-1">😞This is required</span>
                   )}
                   {errors.password && errors.password.type === "minLength" && (
                       <span className="text-red-600  font-semibold ml-1">Min length exceeded</span>
                   )}
                   {errors.password && errors.password.type === "pattern" && (
                       <span className="text-red-600  font-semibold ml-1">password must have uppercase and lowercase</span>
                   )}

               </div>
               <button className="btn w-full rounded-b-badge p-3 text-center rounded-sm dark:text-gray-50 bg-gray-300 text-gray-800 font-bold">Sign up</button>
           </form>
           <div className="flex items-center pt-4 space-x-1">
               <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
               <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
               <div className="flex-1 h-px sm:w-16 dark:bg-gray-300 "></div>
           </div>
           <div className="flex justify-center space-x-1">
               <button onClick={() => googleLogin()} aria-label="Log in with Google" className="text-4xl  px-5 ">
                   <FcGoogle />
               </button>
             

               {/* <button onClick={() => githubLogin()} className="text-4xl  px-5 " aria-label="Log in with GitHub">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h- fill-current">
                       <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                   </svg>
               </button> */}
           </div>
           <p className="text-xs text-center sm:px-6 dark:text-gray-600 mr-3 ">Have an account?
           
               <Link to={"/login"} className="underline ml-2 text-sm font-bold text-blue-700">Login</Link>
           </p>
       </div>
   </div>
    );
};

export default SignUp;